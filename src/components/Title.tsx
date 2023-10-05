import localFont from 'next/font/local'

const boldFont = localFont({
  src: '../../public/Roboto-Bold.ttf',
  display: 'swap',
})


export default function Title() {
    return (
        <section className="grid gap-3 md:gap-8 py-5 min-h-screen">
            <div className="flex justify-center items-end  drop-shadow-lg">
                <h1 className={`${boldFont.className} lg:text-[180px] md:text-[140px] sm:text-8xl text-6xl`}>
                    Josh Daigle
                </h1>
            </div>
            <div className="flex justify-center drop-shadow-lg">
                <h1 className="lg:text-[66px] md:text-[54px] sm:text-4xl text-2xl">
                    Software Developer
                </h1>
            </div>
      </section>
    )
}