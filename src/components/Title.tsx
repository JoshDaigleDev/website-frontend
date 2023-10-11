import localFont from 'next/font/local'
import Canvas from '@/components/Canvas'

const boldFont = localFont({
  src: '../../public/Roboto-Bold.ttf',
  display: 'swap',
})

const italFont = localFont({
    src: '../../public/Roboto-LightItalic.ttf',
    display: 'swap'
})

export default function Title() {
    return (
        <>
        <Canvas />
        <section className="grid gap-3 md:gap-8 py-5 min-h-screen  -z-20">
            
            <div className="flex justify-center items-end  drop-shadow-lg z-10">
                <h1 className={`${boldFont.className} lg:text-[180px] md:text-[140px] sm:text-8xl text-6xl`}>
                    Josh Daigle
                </h1>
            </div>
            <div className="flex justify-center drop-shadow-lg">
                <h1 className={`${italFont.className} lg:text-[66px] md:text-[54px] sm:text-4xl text-2xl z-10`}>
                    Software Developer
                </h1>
            </div>
      </section>
      </>
    )
}