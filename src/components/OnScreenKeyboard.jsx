export default function OnScreenKeyboard(){
   const letters= [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ]

   const letterElements= letters.map( letter=>(
    <button key={letter}>{letter}</button>
   ))

   return(
    <div className="screen-keyboard">
        {letterElements}
    </div>
   )
}