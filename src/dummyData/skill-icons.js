import { RiReactjsLine } from 'react-icons/ri';
import { FaLaravel } from 'react-icons/fa';
import { SiJavascript, SiSocketdotio } from 'react-icons/si';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { BsBootstrapFill } from 'react-icons/bs';


const listICons = [
    {
        slug: "reactjs",
        icon: RiReactjsLine
    },
    {
        slug: "laravel-mysql",
        icon: FaLaravel
    },
    {
        slug: "javascript",
        icon: SiJavascript
    },
    {
        slug: "html5",
        icon: AiFillHtml5
    },
    {
        slug: "css3",
        icon: DiCss3
    },
    {
        slug: "css-libraries",
        icon: BsBootstrapFill
    },
    {
        slug: "others",
        icon: SiSocketdotio
    },
]

function selectedIcon(slug) {
    return listICons.find(icon => icon.slug === slug).icon
}

export default selectedIcon