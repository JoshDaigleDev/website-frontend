import Title from '@/components/Title'
import Experience from '@/components/Experience'


export default function Page() {
  return (
    <main className="min-h-max">
      <div className="lg:min-h-screen min-h-[50vh]">
        <Title />
      </div>
      <div className="flex justify-center py-4">
        <Experience />
      </div>
    </main>
  )
} 
