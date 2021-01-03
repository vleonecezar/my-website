import React from 'react';
import './styles.css'
import vitorcezar_image from '../../assets/vitorcezar_image.jpg'

const Home = () => (
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
            <h2></h2>
        </div>
    </section>
)

export default Home