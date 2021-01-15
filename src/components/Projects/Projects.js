import React from 'react'
import { projects } from "./ProjectDetail"

function Projects() {

    projects.map((each) => {
        console.log(each.name)
    })

    return (
        <div>
            <h1>portfolio page</h1>
        </div>
    )
}

export default Projects
