import React from 'react'
import { NavigationLink } from '../fragments'
import { ThemeChangerButton } from '../elements'

type Props = {}

const Navigation = (props: Props) => {
  return (
<nav className='w-full h-auto sticky top-1 flex items-center justify-center py-3 px-20'>
    <div className='flex justify-center w-full group'>
        <ul className='flex gap-5 border-2 border-secondary px-3 py-2 rounded-full group-hover:ring-1 group-hover:ring-secondary'>
            {link.map((nav: Link, i: number) => (
                <NavigationLink
                    key={i}
                    url={nav.url}
                    text={nav.text}
                />
            ))}
        </ul>
    </div>
    <ThemeChangerButton />
</nav>

  )
}

type Link = {
    url: string,
    text: string
}

const link = [
    {
        url: "/",
        text: "Home"
    },
    {
        url: "/about",
        text: "About"
    },
    {
        url: "/projects",
        text: "Projects"
    },
    {
        url: "/contact",
        text: "Contact"
    },
]

export default Navigation