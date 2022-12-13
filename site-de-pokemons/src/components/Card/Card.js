import {Container} from './styled'
import grass from "../../assets/types/grass.png";
import ball from "../../assets/pokemon-ball-card.png";
import pokemon from "../../assets/bulbasaur.png";



export const Card = () => {
  return(
    <Container>
        <img src={pokemon}/>
      <div className='card'>
        <div className='info'>
          <div>
            <h4>#01</h4>
            <h1>Bulbasaur</h1>
            <div>
              <img src={grass}/>
            </div>
          </div>
          <button>Detalhes</button>
        </div>
        <div className='picture'>
          <img src={ball}/>
          <button>Capturar!</button>
        </div>
      </div>
    </Container>
  )
} 