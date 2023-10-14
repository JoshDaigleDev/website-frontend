import localFont from 'next/font/local'

const italFont = localFont({
    src: '../../public/Roboto-MediumItalic.ttf',
    display: 'swap'
  })

export default function Footer() {
    return (
        <div className="grid grid-cols-8 border-t md:px-32 md:py-6 text-xs p-3 bg-neutral-900">
            <div className=" col-span-2 flex items-center justify-center">
                ©Josh Daigle 2023
            </div>
            <div className={`${italFont.className}  col-span-6 flex items-center justify-center`}>
                Built With 🗲 ReactJS ● NextJS ● Typescript ● TailwindCSS ● Google Cloud Platform
            </div>
        </div>
    )
  }