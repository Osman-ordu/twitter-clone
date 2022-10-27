import React from 'react'
import {
    ExploreIcon, HomeIcon,
    TwitterLogo, MessageIcon,
    MoreIcon, NotificationsIcon,
    ProfileIcon, TweetIcon
} from '../icons/icons'

const Sidebar = () => {
    return (
        <div className='w-72 bg-blue-200 flex flex-col justify-between px-2'>
            <TwitterLogo />
            <nav>
                <HomeIcon />
                <ExploreIcon />
                <NotificationsIcon />
                <MessageIcon />
                <ProfileIcon />
                <MoreIcon />
                <TweetIcon />
            </nav>

            <div className='profil-area'>
                <img src="" alt="" />
                <div>Osman Ordu</div>
            </div>

        </div>
    )
}

export default Sidebar