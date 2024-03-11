import './App.css'
import CardStack from './components/CardStack'
import { cardStore } from './store/cardStore'

function App() {
  const savedCards = cardStore((state) => state.cards)
  return (
    <>
      <div className='container'>
        <CardStack />
      </div>
      <h1>saved cards</h1>
      <div className='saved-cards'>
        {savedCards.map((card, index) => (
          <div
            key={index}
            style={{ backgroundColor: card.backgroundColor, width: '75px', height: '125px' }}
          ></div>
        ))}
      </div>
    </>
  )
}

export default App
