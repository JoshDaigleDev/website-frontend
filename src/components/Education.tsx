import Image from "next/image";

import localFont from "next/font/local";

const boldFont = localFont({
  src: "../../public/Roboto-Bold.ttf",
  display: "swap",
});

const italFont = localFont({
  src: '../../public/Roboto-MediumItalic.ttf',
  display: 'swap'
})

export default function Education() {
    return (
        <section className="grid min-w-[60%] lg:max-w-[60%]">
            <div className="flex justify-center p-3 lg:text-4xl text-3xl">
                <h1>
                    Education
                </h1>
            </div>
            <div className="grid bg-neutral-900 min-w-full rounded-sm">
                <div className={`${boldFont.className} grid grid-cols-3  bg-neutral-800  p-2 text-lg lg:text-xl rounded-sm`}>
                    <div className="flex justify-start col-span-2">
                        <span>University of Manitoba - Bachelor of Science Major in Computer Science - Cooperative Option</span>
                    </div>
                    <div className="flex justify-end">
                        <span className={`${italFont.className} text-sm lg:text-base items-center`}>09/2017 - 04/2023</span>
                    </div>     
                </div>
                <div className="grid grid-cols-5">
                    <div className="flex items-center  p-2 justify-center ">
                    <Image
                        width={100}
                        height={100}
                        src="/UManitobaLogo.png"
                        alt="UManitobaLogo"
                    />
                    </div>
                    <div className="col-span-4 p-4">
                        <h2 className={`${italFont.className} text-xl mb-3`}>Relavent Courses:</h2>
                        <div className={`${boldFont.className} grid md:grid-cols-3 grid-cols-2 gap-4`}>
                            <div className="bg-yellow-600 p-2 rounded-sm">
                                Data Structures and Algorithms: A+
                            </div>
                            <div className="bg-yellow-600 p-2 rounded-sm">
                                Database Concepts and Usage: A+
                            </div>
                            <div className="bg-yellow-600 p-2 rounded-sm">
                                Object Orientation: A+
                            </div>
                            <div className="bg-yellow-600 p-2 rounded-sm">
                                Distributed Computing: A
                            </div>
                            <div className="bg-yellow-600 p-2 rounded-sm">
                                Analysis of Algorithms: A
                            </div>
                            <div className="bg-yellow-600 p-2 rounded-sm">
                                Computer Graphics 1: A
                            </div>
                            <div className="bg-yellow-600 p-2 rounded-sm">
                                Human-Computer Interaction 2: A
                            </div>
                            <div className="bg-yellow-600 p-2 rounded-sm">
                                Programming Practices: A
                            </div>
                            <div className="bg-yellow-600 p-2 rounded-sm">
                                Technical Communication in CS: A
                            </div>
                            <div className="bg-yellow-600 p-2 rounded-sm">
                                Professional Practices in CS: A
                            </div>
                            <div className="bg-yellow-600 p-2 rounded-sm">
                                Elementary Discrete Mathmatics: A
                            </div>
                            <div className="bg-yellow-600 p-2 rounded-sm">
                                Calculus 2: A+
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </section>  
    )
}