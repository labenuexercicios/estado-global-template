import React from 'react'
import Instagram from '../../images/ig-icon.png'
import Github from '../../images/github.png'
import Linkedin from '../../images/linkedin.png'


import {AreaFooter} from './styled'

function Footer(){

    return(
        <>
            <AreaFooter>
                
                <p>Finest Space © - Todos os direitos reservados.</p> 
                

                <div className='redes-sociais'>
                    <p className = 'text-footer'>siga-me nas redes sociais:</p>
                    
                    <a href='https://www.instagram.com/alexfsilva4/' target='_blank'> <img src={Instagram} alt='instagram'/></a> 
                    <a href='https://www.linkedin.com/in/alex-ferreira-860010171/' target='_blank'> <img src={Linkedin} alt='linkedin'/></a>
                    <a href='https://github.com/alexferreiraa20'target='_blank'> <img src={Github} alt='github'/></a> 
                    
                </div>
            </AreaFooter>
        </>
    )
}

export default Footer