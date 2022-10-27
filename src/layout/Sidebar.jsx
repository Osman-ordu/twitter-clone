import React from 'react'
import {
    ExploreIcon, HomeIcon,
    TwitterLogo, MessageIcon,
    MoreIcon, NotificationsIcon,
    ProfileIcon, TweetIcon
} from '../icons/icons'
import SideLink from '../components/SideLink'

const sideLinks = [
    {
        name:'Twitter',
        icon:TwitterLogo
    },
    {
        name:'Home',
        icon:HomeIcon
    },
    {
        name:'Explore',
        icon:ExploreIcon
    },
    {
        name:'Notifications',
        icon:NotificationsIcon
    },
    {
        name:'Message',
        icon:MessageIcon
    },
    {
        name:'Profile',
        icon:ProfileIcon
    },
    {
        name:'More',
        icon:MoreIcon
    }
]

const Sidebar = () => {
    return (
        <div className='w-32 flex flex-col justify-between px-2 border border-gray-lightest '>
            <nav>
                <ul>
                   {sideLinks.map(({name,icon})=> (
                    <SideLink key={name} name={name} Icon={icon} />
                   ))}
                </ul>
                <button className='mx-8'>
                    <TweetIcon />
                </button>
             
            </nav>
            <div className=' mx-auto bg-primary-base rounded-full m-4 w-12 h-12 '>
                <img className='p-3' src="" alt="" />
            </div>

        </div>
    )
}

export default Sidebar