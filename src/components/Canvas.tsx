'use client'

import { useEffect, useRef } from 'react'

type CanvasProps = React.DetailedHTMLProps<React.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>;

const Canvas: React.FC<CanvasProps> = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      var scaleVal = window.innerWidth > window.innerHeight ? window.innerWidth/4: window.innerHeight/4;
      var ang = Math.PI/6;
      var soloAng = 0;
      var dotOpacity = 0;

      function calculateScale(): number {
        return window.innerWidth < window.innerHeight ? window.innerHeight/4: Math.max(window.innerWidth/8, 200);
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
          context.lineWidth = num/1.2;
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
          context.arc(0, 0, 2, 0, 2 * Math.PI);
          context.fill();
          context.rotate(-ang);
          context.rotate(-ang/2)
          context.beginPath();
          context.arc(0, 0, 1, 0, 2 * Math.PI);
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


        //drawFloor(canvas);

      }


      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        scaleVal = calculateScale();
        draw();
      };

      handleResize();

      const handleMouseMove = (e: MouseEvent) => {
        canvas.width = window.innerWidth;
        ang = mapRange(e.clientX, 10, window.innerWidth-20, 0, Math.PI/3);
        soloAng = mapRange(e.clientX, 10, window.innerWidth-20, 0, Math.PI/2);
        dotOpacity = mapRange(ang, Math.PI/3.5, Math.PI/3, 0, 0.8);
        draw();
      }

      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const viewportHeight = window.innerHeight;
        const scaledPosition = (scrollPosition / viewportHeight) * 100;

        ang = mapRange(scaledPosition, 35, 10, 0, Math.PI/3);
        dotOpacity = mapRange(ang, Math.PI/3.5, Math.PI/3, 0, 0.8);
        canvas.width = window.innerWidth;
        draw();
        console.log(scaledPosition, ang)
      }

      window.addEventListener('scroll',  handleScroll)
      window.addEventListener('resize', handleResize);
      //window.addEventListener('mousemove', handleMouseMove);


      draw();
      return () => {
        window.removeEventListener('resize', handleResize);
        //window.removeEventListener('mousemove', handleMouseMove);
      };
    
    }, []);

    return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full -z-10"/>
}

export default Canvas