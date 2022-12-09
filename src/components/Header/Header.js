import React from 'react'
import Logo from '../../images/logo.png'
import './Header.css'
// import { useNavigate } from 'react-router-dom'
// import { handleCarrinho } from '../../Router/cordinator'

function Header(){

    // const navigate = useNavigate()

    return(
        
         
            <div className='container'>
                <div className='logo'>
                    <img src={Logo} alt='logo' />
                    
                </div>
                <nav>
                    <ul>
                        <li>Lojas Próximas</li>
                        <li>Mundo de aventuras</li>
                        <li>Novos Planetas</li>
                        <li>Sobre</li>
                    </ul>
                </nav>
            </div>
        
            
      
    )
}

export default Header