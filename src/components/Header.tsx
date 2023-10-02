import Link from 'next/link'

export default function Header() {
    return (
        <div className="grid grid-cols-12 bg-opacity-60 bg-indigo-950 border-b">
            <div className="col-span-8 col-start-5">
                <div className="grid grid-cols-6 text-xl py-4 px-6">
                    <div className="flex items-center justify-center">
                        <Link href="/" className="transition ease-in-out delay-50 hover:text-red-500 duration 200">
                            Home
                        </Link>
                    </div>
                    <div className="flex items-center justify-center">
                        <p className="transition ease-in-out delay-50 hover:text-red-500 duration 200">
                            Work Experience
                        </p>       
                    </div>
                    <div className="flex items-center justify-center">
                        <p className="transition ease-in-out delay-50 hover:text-red-500 duration 200">
                            Education
                        </p>       
                    </div>
                    <div className="flex items-center justify-center">
                        <p className="transition ease-in-out delay-50 hover:text-red-500 duration 200">
                            Projects
                        </p>       
                    </div>
                </div>
            </div>
        </div>
    )
  }
  