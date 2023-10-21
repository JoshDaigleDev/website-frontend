'use client'

import { useEffect, useRef } from 'react'

type CanvasProps = React.DetailedHTMLProps<React.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>;

const Canvas: React.FC<CanvasProps> = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      var scaleVal: number = calculateScale();
      var ang: number = Math.PI/3;
      var dotOpacity: number = mapRange(ang, Math.PI/3.5, Math.PI/3, 0, 0.8);

      function calculateScale(): number {
        return Math.max(window.innerWidth/8, 200);
      }

      function mapRange(target: number, inMin: number, inMax: number, outMin: number, outMax: number): number {
        return Math.min(Math.max((target - inMin) * (outMax - outMin) / (inMax - inMin) + outMin, outMin), outMax);
      }

      function drawTree(canvas: HTMLCanvasElement, positionX: number, flip: boolean = false): void {
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
          context.lineWidth = num/2.2;
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


      function getRandomFillStyle(): string {
        const red: number = Math.floor(Math.random() * 256);
        const green: number = Math.floor(Math.random() * 256);
        const blue: number = Math.floor(Math.random() * 256);
        const fillStyle: string = `rgba(${red}, ${green}, ${blue}, ${dotOpacity})`;
    
        return fillStyle;
      }
      
      function drawFloor(canvas: HTMLCanvasElement, reduce: boolean = false): void {
        const context = canvas?.getContext('2d');
        if (!canvas || !context || ang < Math.PI/1024) return;
        context.fillStyle = "#ca8a04";
        var width: number = mapRange(ang, Math.PI/1024, Math.PI/6, 0, 2*canvas.width/3)
        var height: number = reduce ? canvas.height/180 : canvas.height/80
        context.fillRect(-canvas.width/3, -height+1, width, height);

      }
    

      function draw(): void {
        const context = canvas?.getContext('2d');
        if (!canvas || !context) return;

        context.translate(canvas.width/2, canvas.height)

        if (canvas.width >= 1024) {
          drawFloor(canvas);
          drawTree(canvas, canvas.width/4);
          drawTree(canvas, -canvas.width/4, true);
        } else {
          context.translate(0, -canvas.height/2.2);
          drawFloor(canvas, true);
          soloRecTree(canvas, 11, scaleVal/2)
          context.translate(0, canvas.height/2.2);
        }
      }


      const handleResize = (): void => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        scaleVal = calculateScale();
        draw();
      };


      const handleScroll = (): void => {
        var scrollPosition: number = window.scrollY;
        var viewportHeight: number = window.innerHeight;
        var scaledPosition: number = (scrollPosition / viewportHeight) * 100;
        var max: number = window.innerHeight > window.innerWidth ? 50 : 60;
        ang = mapRange(scaledPosition, max, 10, 0, Math.PI/3);
        dotOpacity = mapRange(ang, Math.PI/3.5, Math.PI/3, 0, 0.8);
        canvas.width = window.innerWidth;
        draw();
      }


      window.addEventListener('scroll',  handleScroll)
      window.addEventListener('resize', handleResize);

      handleResize();

      return () => {
        window.addEventListener('scroll',  handleScroll)
        window.removeEventListener('resize', handleResize);
      };
    
    }, []);

    return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full -z-10"/>
}

export default Canvas