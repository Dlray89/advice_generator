import quoteIcon from './images/quote.svg'
import diceIcon from './images/icon-dice.svg'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [quotes, setQuotes] = useState('')
  const api_url = 'https://api.adviceslip.com/advice'

  const generateQuotes = () => {
    (async () => {
      const getAdvice = await axios.get(api_url)
      setQuotes(getAdvice.data.slip)
    })()
  }

  useEffect(() => {
    generateQuotes()
  }, [])

  return (
    <>
      <div className="card-container">
        <h4 className="card-container__title">Advice #{quotes.id}</h4>
        <p className="card-container__quotes">&ldquo; {quotes.advice} &rdquo;</p>
        <div className="card-container__dividers">
          <span /><img src={quoteIcon} alt='quotes icon' /><span />
        </div>
        <button className='card-container__btn' onClick={generateQuotes}> <img src={diceIcon} alt='dice icon' className='card-container__btn__icon' /></button>
      </div>
    </>
  );
}

export default App;
