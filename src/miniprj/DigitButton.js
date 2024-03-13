import { ACTIONS } from "./Kalku"

const DigitButton = ({dispatch,digit}) => {
  return<button onClick={()=>dispatch({type:ACTIONS.ADD_DIGIT,payload:{digit}})}>{digit}</button>
}

export default DigitButton
