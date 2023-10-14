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
        <section className="grid min-w-[50%]">
            <div className="flex justify-center p-3 lg:text-4xl text-3xl">
                <h1>
                    Education
                </h1>
            </div>
            <div className="grid bg-neutral-900 min-w-full">
                <div className={`${boldFont.className} flex justify-between space-x-5  bg-neutral-800  p-2 text-lg lg:text-xl`}>
                    <span>University of Manitoba - B. SC. Major in Computer Science Cooperative Option</span>
                    <span className={`${italFont.className} text-sm lg:text-base items-center`}>September 2017 - April 2023</span>
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
                            <div className="bg-yellow-600 p-2">
                                Data Structures and Algorithms: A+
                            </div>
                            <div className="bg-yellow-600 p-2">
                                Database Concepts and Usage: A+
                            </div>
                            <div className="bg-yellow-600 p-2">
                                Object Orientation: A+
                            </div>
                            <div className="bg-yellow-600 p-2">
                                Distributed Computing: A
                            </div>
                            <div className="bg-yellow-600 p-2">
                                Analysis of Algorithms: A
                            </div>
                            <div className="bg-yellow-600 p-2">
                                Computer Graphics 1: A
                            </div>
                            <div className="bg-yellow-600 p-2">
                                Human-Computer Interaction 2: A
                            </div>
                            <div className="bg-yellow-600 p-2">
                                Programming Practices: A
                            </div>
                            <div className="bg-yellow-600 p-2">
                                Technical Communication in CS: A
                            </div>
                            <div className="bg-yellow-600 p-2">
                                Professional Practices in CS: A
                            </div>
                            <div className="bg-yellow-600 p-2">
                                Elementary Discrete Mathmatics: A
                            </div>
                            <div className="bg-yellow-600 p-2">
                                Calculus 2: A+
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </section>  
    )
}