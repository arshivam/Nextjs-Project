import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className='bg-gray-900 text-white px-3 h-16 flex justify-between items-center'>
        <div className='logo font-bold'>GetMeChai!</div>
        {/* <ul className='flex justify-around gap-4'>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Sign up</li>
            <li>Login</li>
        </ul> */}
        <div>
          <Link href={"/login"}>
          <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button>
          </Link>
        </div>
    </nav>
  )
}

export default Navbar