import React from 'react'
import { link } from "./Link"
import "./Home.css"

function Home() {

    return (
        <div className="homeBackground">
            <div className="homeTexts">
                <h1>Hello, I am Noriyuki Ishii</h1>
                <h4>front end focused with full-stack and international experience.</h4>
                {link.map ((each, i)=> {
                    return <a href={each.url} className="sns-btn"><button  key={i} className="sns-icon">{each.icon}</button></a>
                })}
            </div>
        </div>
    )
}

export default Home
