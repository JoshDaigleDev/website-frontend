import localFont from 'next/font/local'
import Canvas from '@/components/Canvas'

const boldFont = localFont({
  src: '../../public/Roboto-Bold.ttf',
  display: 'swap',
})

const italFont = localFont({
    src: '../../public/Roboto-MediumItalic.ttf',
    display: 'swap'
})

export default function Title() {
    return (
        <>
        <Canvas />
        <section className="grid pt-9">
            <div className="flex justify-center">
                <h1 className={`${boldFont.className} underline decoration-yellow-600 text-[56px] sm:text-[64px] md:text-[88px] xl:text-[128px]`}>
                    Josh Daigle
                </h1>
            </div>
            <div className="flex justify-center">
                <h1 className={`${italFont.className} text-[20px] sm:text-[24px] md:text-[32px] xl:text-[40px]`}>
                    Software Developer
                </h1>
            </div>
      </section>
      </>
    )
}