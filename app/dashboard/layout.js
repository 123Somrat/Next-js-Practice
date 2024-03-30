import Link from 'next/link'
import React from 'react'

export default function layout({children}) {
  return (
    <div>
        <ul className='flex gap-5 p-4'>
            <li><Link href={'/dashboard/home'}>Home</Link></li>
            <li><Link href={'/dashboard/profile'}>Profile</Link></li>
            <li>
              <Link href={'/dashboard/books'}>Books</Link>
            </li>
            <li>Contact</li>
        </ul>

         {children}

         <footer>
             <h1>@copyright mohammad jafar udddin somrat</h1>
         </footer>
    </div>
  )
}
