import Title from '@/components/Title'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import ScrollChips from '@/components/ScrollChips'

export default function Page() {
  return (
    <main className="min-h-max">
      <ScrollChips />
      <div className="lg:min-h-screen min-h-[50vh]">
        <Title />
      </div>
      <div className="flex justify-center py-4 mt-16">
        <Experience />
      </div>
      <div className="flex justify-center py-4">
        <Education />
      </div>
    </main>
  )
} 
