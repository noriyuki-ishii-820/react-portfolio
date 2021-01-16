import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"
import * as GoIcons from "react-icons/go"
import * as GrIcons from "react-icons/gr"


export const skills = [
    {
        name: "Front-End",
        sets: "React, HTML5, CSS3, Sass, Bootstrap, Bulma, Tailwind, Material UI, API, JavaScript",
        icon: <FaIcons.FaLaptopCode />
    },
    {
        name: "Server",
        sets: "NodeJS, Express",
        icon: <GoIcons.GoServer />
    },
    {
        name: "Database",
        sets: "MySQL, MongoDB",
        icon: <FaIcons.FaDatabase />

    },
    {
        name: "Deployment",
        sets: "GitHub, Netlify, Heroku",
        icon: <GrIcons.GrDeploy />
    }

]