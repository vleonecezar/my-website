import React, { useState, useEffect } from 'react';
import './styles.css'
import vitorcezar_image from '../../assets/images/vitorcezar_image.jpg'

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
                    <div className="projects-container">
                        <div className="project">
                            <img key={project.id} src={project.image} alt={`foto do projeto ${project.name}`}/>
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                        </div>
                    </div>
                ))
            )
        })
    }, [])

    return (
        <section>
            <div className="profile-container">
                <div className="profile">
                    <img src={vitorcezar_image} alt="Foto de Vitor Cezar"/>
                    <div className="profile-info">
                        <h2>{'< Desenvolvedor >'}</h2>
                        <p>
                        Desenvolvedor Front End em constante aprendizado. Focado em Javascript, 
                        buscando sempre o codigo limpo e eficiente.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <h2>Ultimos Projetos</h2>
                {homeContent}
            </div>
        </section>
    )
}

export default Home