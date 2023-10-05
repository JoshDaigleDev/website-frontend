import Link from 'next/link'

export default function Header() {
    return (
        <div className="flex items-center justify-center border-b space-x-5 py-3">
            <div className="flex items-center justify-center">
                <Link href="/" className="transition ease-in-out delay-50 hover:text-red-500 duration 200">
                    Home
                </Link>
            </div>
            <div className="flex items-center justify-center">
                <p> Experience </p>       
            </div>
            <div className="flex items-center justify-center">
                <p> Education  </p>       
            </div>
            <div className="flex items-center justify-center">
                <p> Projects  </p>            
            </div>
        </div>
    )
  }
  