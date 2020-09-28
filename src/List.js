import React from 'react';
import './list.css';
import Card from './card';

function List(props){

    const arrOfCards = props.cards.map((card) => 
        <li key={card.id}>
            <Card title={card.title} content={card.content}/>
        </li>
    );
    return (
        <section className='List'>
            <header className='List-cards'>
                {props.header}
            </header>
            <div className='List-cards'>
                <ul>
                    {arrOfCards}
                </ul>
            </div>
        </section>
    )
};

export default {
    List,
}