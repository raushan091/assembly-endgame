export default function InputBox(props){
    
    return(
        <input type="text" className="input-field" maxLength={1} value={props.show? props.letter:''} readOnly/>
    )
}