import React from 'react'

function HeaderItem({title, Icon}) {
  return (
    <div className = 'flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white'>
        <Icon className = 'h-8 mb-1 group-hover:animate-bounce transition duration-150' />
        <p className = 'opacity-0 group-hover:opacity-100 transition duration-150'>
        {title}</p>
    </div>
  )
}

export default HeaderItem