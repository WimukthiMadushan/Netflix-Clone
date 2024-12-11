import React, {useEffect, useRef} from 'react'
import cards_data from "./../../assets/cards/Cards_data"
import './TitleCards.css'

const TitleCards = () => {

  const cardsRef = useRef();
  useEffect(() => {
    cardsRef.current.addEventListener('wheel', (e) => {
      e.preventDefault();
      cardsRef.current.scrollLeft += e.deltaY;
    });
  }
  , []);

  return (
    <div className='title-cards'>
      <h2>Popular on Netflix</h2>
      <div className='card-list' ref={cardsRef}>
      {cards_data.map((card, index) => {
        return (
          <div key={index} className='card'>
            <img src={card.image}
              alt={card.title} />
            <p>{card.name}</p>
            </div>
          )
        })}
        </div>
    </div>
  )
}

export default TitleCards