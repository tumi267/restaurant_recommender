'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function Nav() {
    const [show, setShow] = useState(true)
    const [select,setSelect]=useState(0)
    const tags=[{name:'Discover'},{name:'My Plates'}]
    const [lastScrollY, setLastScrollY] = useState(0)
    // scroll logic
    useEffect(()=>{const handleScroll = () => {
        const currentScrollY = window.scrollY
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
          // scrolling down
          setShow(false)
        } else {
          // scrolling up
          setShow(true)
        }
        setLastScrollY(currentScrollY)
      }
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollY])
    return (
    <div className={`flex justify-between h-[4em] px-[0.5em] items-center border-b-2 sticky top-0 left-0
    transition-transform duration-300 ${show ? 'translate-y-0' : '-translate-y-full'}
    z-[10] bg-[#ffff]
    `}>
        <span>logo</span>
        <span className='flex justify-evenly gap-[1em]'>
            {tags.map((e,i)=>{return<Link href={'/'} key={i} className={`cursor-pointer ${select === i ? 'text-red-500': 'text-black hover:text-red-400'} cursor-pointer transition-colors duration-200
            `} onClick={()=>{setSelect(i)}}>{e.name}</Link>})}
        </span>
        <span>login</span>
    </div>
  )
}

export default Nav