import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleCart} from "../Router/cordinator";
import CardProds from "../components/CardProds";
import planetas from '../planetas.json';
import styled from "styled-components";


export default function Home({carrinho, setCarrinho}) {
    const [planeta, setPlanetas] = useState(planetas.planetas);
    const navigate = useNavigate();

    function comprar(id) {
        const i = carrinho.findIndex((item) => item.id === id);
        console.log(i);
        if (i !== -1) {
          carrinho[i] = { ...carrinho[i], amount: carrinho[i].amount + 1 };
          
        } else {
          const encontrarPlanera = planetas.find((planetas) => planetas.id === id);
          const novaFruta = { ...encontrarPlanera, amount: 1 };
          const newRender = [...carrinho, (carrinho[1] = novaFruta)];
          setCarrinho(newRender);
    }
}

    
    const planetasRenderizados = planetas.map((planetas)=>{
        return <CardProds 
             key={planetas.id} 
                image={planetas.image}
                name={planetas.name} 
                price={planetas.price}
                id={planetas.id}
                comprar={comprar}
        >  </CardProds>
    })

return (
    <CardPlanetas>
      <br/>
      <br/>
        <button onClick={() => handleCart(navigate)}>Vá para Carrinho </button>
        <br/>
        <PlanetasContainer>
            {planetasRenderizados}
        </PlanetasContainer>
    </CardPlanetas>
);
}
const PlanetasContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
`;
const CardPlanetas = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
