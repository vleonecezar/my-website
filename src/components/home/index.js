import React, { useState, useEffect } from 'react';
import './styles.css'
import vitorcezar_image from '../../assets/images/vitorcezar_image.jpg'

// Projects Mouse Effects

function projectsMouseOver(id) {
    const elements = document.querySelectorAll(".project")
    
    elements.forEach(element => {
        element.style.opacity = "0.3"
    })

    document.getElementById(id).style.opacity = "1"
}

function projectsMouseOut() {
    const elements = document.querySelectorAll(".project")
    elements.forEach(element => {
        element.style.opacity = "1"
    })
}

// -----------------------------

async function getProjects() {
    try {
        const response = await fetch('http://localhost:3000/api/projects.json')
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}
    
const Home = () => {

    const [homeContent, setHomeContent] = useState([])

    useEffect(() => {
        getProjects().then(data => {
            setHomeContent(
             data['projects'].map(project => (
                <div id={project.id} className="project" onMouseOver={() => projectsMouseOver(project.id)} onMouseOut={() => projectsMouseOut()}>
                    <img key={project.id} src={project.image} alt={`foto do projeto ${project.name}`}/>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                </div>

            ))
            )
        })
    })

    return (
        <section>
            <div className="profile-container">
                <div className="profile">
                    <img src={vitorcezar_image} alt="Foto de Vitor Cezar"/>
                    <div className="profile-info">
                        <h2>{'< Web Developer >'}</h2>
                        <p>
                        Desenvolvedor Front End em constante aprendizado. Focado em Javascript, 
                        buscando sempre o codigo limpo e eficiente.
                        </p>
                        <div className="profile-buttons">
                            <a href="http://localhost:3000">
                                <i className="fab fa-github"></i>
                                Github
                            </a>
                            <a href="#">
                                <i className="fab fa-instagram"></i>
                                Instagram
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <h2 id="projects-title">Meus Ultimos Projetos</h2>
            <div className="projects-container">
                {homeContent}
            </div>
        </section>
    )
}

export default Home