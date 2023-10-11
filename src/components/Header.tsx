import Link from 'next/link'

export default function Header() {
    return (
        <div className="flex items-center justify-center border-b bg-neutral-900 space-x-5 py-3">
            <div className="flex items-center justify-center">
                <p> Home </p>
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
  