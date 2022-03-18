import React from 'react';
import{Form ,FormControl, Card  } from 'react-bootstrap';


import './Exercices.css';
function Exercices({ el,setsearch}) {
  
  return (
  
    <div>
      
      

   

<ul id="cards">
          <li className="card" id="card_1">
            <div className="card__content">
              <div>
                <h2 >{el.Title}</h2>
                <p>{el.Description}</p>
                
              </div>
              <figure>
                  
  <iframe width="600" height="400" src={el.video} alt="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </figure>
            </div>
          </li>
          </ul>

    </div>
  )
}

export default Exercices ;