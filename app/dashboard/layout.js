import Link from 'next/link'
import React from 'react'
import Foooter from '../components/Foooter'

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

        <Foooter />
    </div>
  )
}
