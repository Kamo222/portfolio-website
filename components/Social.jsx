import Link from "next/link";

import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa"

const socials = [
    {
        icon: <FaGithub />,
        path: "https://github.com/Kamo222"
    },
    {
        icon: <FaLinkedin />,
        path: "https://www.linkedin.com/in/kamohelo-mamaregane-065545138/"
    },
    {
        icon: <FaTwitter />,
        path: "https://www.twitter.com/"
    }
    // {
    //     icon: <FaInstagram />,
    //     path: "https://www.instagram.com/"
    // },
    // {
    //     icon: <FaFacebook />,
    //     path: "https://www.facebook.com/"
    // },
    
]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {
            socials.map((item, index) => {
                return <Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>
            })
        }
    </div>
  )
}

export default Social