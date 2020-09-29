import React from 'react';
import './app.css';
import List from './list';


function App(props) {

  const arrOfLists = props.store.lists.map((list) => {
      let cardArr = props.store.allCards.find((list) => )
      <List key={list.id} header={list.header} cards={list.cards}/>
  })

  return (
  <main>  
    <header>
      <h1>

      </h1>
      <div className='App-list'>

      </div>
    </header>
  </main>
  )
 
}

export default App;
