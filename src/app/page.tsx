import localFont from 'next/font/local'

const boldFont = localFont({
  src: '../../public/Roboto-Bold.ttf',
  display: 'swap',
})


export default function Page() {
  return (
    <main className="pt-32 min-h-max">
      <div className="grid grid-rows-2">
        <div className="flex justify-center text-[200px] drop-shadow-lg">
          <h1 className={boldFont.className}>
            Josh Daigle
          </h1>
        </div>
        <div>
          <h2 className="flex justify-center text-7xl drop-shadow-lg">
            Software Developer
          </h2>
        </div>
      </div>
    </main>
  )
} 
