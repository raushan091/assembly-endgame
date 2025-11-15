import OnScreenKeyboard from "./components/OnScreenKeyboard"
import InputBox from "./components/InputBox"

export default function App(){
  const wordList=['apple','blood','bro','family','bhaiya']
  const word=['A','P','P','L','E'];

  const wordElement= word.map( letter=>(
    <InputBox
    show={false}
    letter={letter}
    />
  ))


  return(
   <main>
    <div className="details-container">
      <h1>Assembly: Endgame</h1>
      <span>Guess the word in under 8 attempts to keep the <br /> programming world safe from Assembly!</span>
      <div className="word-box">
        {wordElement}
      </div>
      <OnScreenKeyboard/>
    </div>
   </main>
  )
}