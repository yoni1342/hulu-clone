import React from 'react'
import Image  from 'next/image'
import HeaderItem from '../components/HeaderItem'
import {BadgeCheckIcon, CollectionIcon, HomeIcon, LightningBoltIcon, SearchIcon, UserIcon} from '@heroicons/react/outline'
function Header() {
  return (
    <header className = 'flex flex-col items-center justify-between sm:flex-row m-5'>
        {/* Left */}
        <div className="flex flex-grow justify-evenly sm:justify-start">
            <HeaderItem title = 'HOME' Icon ={HomeIcon} />
            <HeaderItem title = 'TRENDING' Icon ={LightningBoltIcon} />
            <HeaderItem title = 'VERIFIED' Icon ={BadgeCheckIcon} />
            <HeaderItem title = 'COLLECTIONS' Icon ={CollectionIcon} />
            <HeaderItem title = 'SEARCH' Icon ={SearchIcon} />
            <HeaderItem title = 'ACCOUNT' Icon ={UserIcon} />
        </div>
        {/* Right */}
        <div className = ''>
        <Image 
            src = 'https://i.ibb.co/1G9F4pF/hulu.png'
            width = {200}
            height = {100}
            objectFit = 'contain'
        />
        </div>
    </header>
  )
}

export default Header