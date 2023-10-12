'use client'

import { useEffect, useRef } from 'react'

type CanvasProps = React.DetailedHTMLProps<React.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>;

const Canvas: React.FC<CanvasProps> = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      var scaleVal = calculateScale();
      var ang = Math.PI/3;
      var dotOpacity = mapRange(ang, Math.PI/3.5, Math.PI/3, 0, 0.8);

      function calculateScale(): number {
        return Math.max(window.innerWidth/8, 200);
      }

      function mapRange(target: number, inMin: number, inMax: number, outMin: number, outMax: number): number {
        return Math.min(Math.max((target - inMin) * (outMax - outMin) / (inMax - inMin) + outMin, outMin), outMax);
      }

      function drawTree(canvas: HTMLCanvasElement, positionX: number, flip: boolean = false) {
        const context = canvas?.getContext('2d');
        if (!canvas || !context) return;
        context.translate(positionX, 0);
        if (flip) context.scale(-1, 1);
        recTree(canvas, 10, scaleVal);
        if (flip) context.scale(1, 1);
        context.translate(-positionX, 0);
      }

      function recTree (canvas: HTMLCanvasElement, num: number, len: number): void {
        
        const context = canvas?.getContext('2d');
        if (!canvas || !context) return;
  
        context.strokeStyle = `#ca8a04`;
        context.beginPath();
        context.moveTo(0,0);
        context.lineTo(0, -len);
        if (ang > Math.PI/1024) {
          context.lineWidth = num/1.2;
          context.stroke();  
        }

        if (num > 1){
          context.translate(0, -len);
          context.rotate(ang)
          recTree(canvas, num-1, len*0.7);
          context.rotate(-ang);
          context.rotate(-ang/2)
          recTree(canvas, num-1, len*0.7);
          context.rotate(ang/2);
          context.translate(0, len);
        } else if (ang > Math.PI/3.5) {
          var randomColour = getRandomFillStyle();
          context.fillStyle = randomColour;
          context.translate(0, -len);
          context.rotate(ang)
          context.beginPath();
          context.arc(0, 0, 5, 0, 2 * Math.PI);
          context.fill();
          context.rotate(-ang);
          context.rotate(-ang/2)
          context.beginPath();
          context.arc(0, 0, 5, 0, 2 * Math.PI);
          context.rotate(ang/2);
          context.translate(0, len);
        }
  
      }

      function soloRecTree(canvas: HTMLCanvasElement, num: number, len: number): void {
        const context = canvas?.getContext('2d');
        if (!canvas || !context) return;

        context.strokeStyle = `#ca8a04`;
        context.beginPath();
        context.moveTo(0,0);
        context.lineTo(0, -len);
        if (ang > Math.PI/1024) {
          context.lineWidth = num/1.5;
          context.stroke();  
        }

        if (num > 1){
          context.translate(0, -len);
          context.rotate(ang)
          soloRecTree(canvas, num-1, len*0.6);
          context.rotate(-ang);
          context.rotate(-ang/2)
          soloRecTree(canvas, num-1, len*0.7);
          context.rotate(ang/2);
          context.translate(0, len);
        } else if (ang > Math.PI/3.5) {
          var randomColour = getRandomFillStyle();
          context.fillStyle = randomColour;
          context.translate(0, -len);
          context.rotate(ang)
          context.beginPath();
          context.arc(0, 0, 1.5, 0, 2 * Math.PI);
          context.fill();
          context.rotate(-ang);
          context.rotate(-ang/2)
          context.beginPath();
          context.arc(0, 0, 1.5, 0, 2 * Math.PI);
          context.rotate(ang/2);
          context.translate(0, len);
        }
      }

      function getRandomFillStyle() {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
    
        const fillStyle = `rgba(${red}, ${green}, ${blue}, ${dotOpacity})`;
    
        return fillStyle;
      }
      
      function drawFloor(canvas: HTMLCanvasElement): void {
        const context = canvas?.getContext('2d');
        if (!canvas || !context || ang < Math.PI/1024) return;
        context.fillStyle = "#ca8a04";
        var width = mapRange(ang, Math.PI/1024, Math.PI/6, 0, 2*canvas.width/3)
        context.fillRect(-canvas.width/3, -canvas.height/80, width, canvas.height/80);

      }
    
      function draw() {
        const context = canvas?.getContext('2d');
        if (!canvas || !context) return;
        context.translate(canvas.width/2, canvas.height)

        if (canvas.width >= 1000) {
          drawFloor(canvas);
          drawTree(canvas, canvas.width/4);
          drawTree(canvas, -canvas.width/4, true);
        } else {
          context.translate(0, -canvas.height/2.2);
          drawFloor(canvas);
          soloRecTree(canvas, 11, scaleVal/2)
          context.translate(0, canvas.height/2.2);
        }
      }


      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        scaleVal = calculateScale();
        draw();
      };

      handleResize();

      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const viewportHeight = window.innerHeight;
        const scaledPosition = (scrollPosition / viewportHeight) * 100;
        var max = window.innerHeight > window.innerWidth ? 50 : 75;
        ang = mapRange(scaledPosition, max, 10, 0, Math.PI/3);
        console.log(window.innerHeight)
        dotOpacity = mapRange(ang, Math.PI/3.5, Math.PI/3, 0, 0.8);
        canvas.width = window.innerWidth;
        draw();
      }

      window.addEventListener('scroll',  handleScroll)
      window.addEventListener('resize', handleResize);


      draw();
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    
    }, []);

    return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full -z-10"/>
}

export default Canvas