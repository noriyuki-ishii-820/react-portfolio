import React from 'react'
import { link } from "./Link"
import "./Home.css"

function Home() {

    return (
        <div className="homeBackground">
            <h1>Hello, I am Noriyuki Ishii</h1>
            <h4>front end focused with full-stack and international experience.</h4>
        
            {link.map ((each, i)=> {
                return <a href={each.url}><button key={i}>{each.icon}</button></a>
            })}
        </div>
    )
}

export default Home
