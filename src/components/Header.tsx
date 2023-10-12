'use client'
export default function Header() {
  return (
        <div className="flex items-center fixed justify-center border-b min-w-full bg-neutral-900 space-x-5 py-3 lg:text-xl z-40">
            <div className="flex items-center justify-center">
                <button className="hover:text-yellow-600" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                    Home 
                </button>
            </div>
            <div className="flex items-center justify-center">
                <button className="hover:text-yellow-600" onClick={() => window.scrollTo({top: 800, behavior: 'smooth'})}>
                    Experience 
                </button>
            </div>
            <div className="flex items-center justify-center">
                <button className="hover:text-yellow-600" onClick={() => window.scrollTo({top: 1200, behavior: 'smooth'})}>
                    Education 
                </button>     
            </div>
        </div>
    )
  }
  