import Title from '@/components/Title'
import Experience from '@/components/Experience'


export default function Page() {
  return (
    <main className="min-h-max">
      <Title />
      <div className="flex justify-center py-4">
        <Experience />
      </div>
    </main>
  )
} 
