import { AiFillHome } from 'react-icons/ai'
import { FaUserAlt } from 'react-icons/fa'
import { BsFillHandbagFill } from 'react-icons/bs'
import { FaEnvelopeOpen } from 'react-icons/fa'
import { FaMicroblog } from 'react-icons/fa'

import AboutPage from "~/Pages/AboutPage"
import ContactPage from "~/Pages/ContactPage"
import HomePage from "~/Pages/HomePage"
import PortFolioPage from "~/Pages/PortFolioPage"
import BlogPage from '~/Pages/BlogPage'


export default [
    {
        title: "Home",
        icon: AiFillHome,
        component: HomePage,
        type: "menu",
        to: "/"
    },
    {
        title: "About",
        icon: FaUserAlt,
        component: AboutPage,
        type: "menu",
        to: "/about"
    },
    {
        title: "Portfolio",
        icon: BsFillHandbagFill,
        component: PortFolioPage,
        type: "menu",
        to: "/portfolio"
    },
    {
        title: "Contact",
        icon: FaEnvelopeOpen,
        component: ContactPage,
        type: "menu",
        to: "/contact"
    },
    {
        title: "Blog",
        icon: FaMicroblog,
        component: BlogPage,
        type: "menu",
        to: "/blog"
    }
]