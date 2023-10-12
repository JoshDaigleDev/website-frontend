"use client";
import { useState, useEffect } from "react";

export default function ScrollChips() {
  const [isVisible, setIsVisible] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const handleResize = () => {
        if(window.innerHeight > window.innerWidth) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }    
    }

    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

    return (
        <div>
            { 
                isVisible && <button 
                    onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}
                    className="bg-neutral-800 border-yellow-600 text-yellow-600 fixed border-4 animate-bounce rounded-full bottom-0 right-0 p-3 hover:p-4 mr-7 mb-5">
                        <svg className="h-8 w-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z"/></svg>
                </button> 
            }
            {
                !isVisible && !isMobile && <button 
                    onClick={() => { window.scrollTo({ top: 900, behavior: "smooth" }); }}
                    className="bg-neutral-800 border-yellow-600 text-yellow-600 animate-bounce absolute border-4 rounded-full bottom-10 right-0 left-0 p-3 hover:p-4 m-auto">
                        <svg className="h-8 w-8 fill-current" viewBox="0 -960 960 960"><path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z"/></svg>
                </button> 
            }
      </div>
    );

}
