import React from 'react'
import { NavLink } from 'react-router-dom'
import './SideBar.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import {Button} from "@material-ui/core";



const SideBar = () => {
    return (
        <div className="sidebar">
        {/* twitter icon */}
        <TwitterIcon className="sidebar-twitterIcon"/>

        {/* sidebar option */}

        <NavLink className="text-change" to='/'><SidebarOption active Icon={HomeIcon} text="Home"/></NavLink>
        <SidebarOption Icon={SearchIcon} text="Explore"/>
        <SidebarOption Icon= {NotificationsNoneIcon} text="Notifications"/>
        <NavLink className="text-change" to='/alltweets'><SidebarOption Icon={MailOutlineIcon} text="Messages" /></NavLink>
        <SidebarOption Icon={PermIdentityIcon} text="Profile" />
        
               {/* Button tweet */}
        <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
    </div>
    )
}

export default SideBar
