import React ,{useRef,useEffect,useState,useReducer}from 'react'
import './styles.css'
import DigitButton from './DigitButton'
import OperationButton from './OperationButton'

export const ACTIONS = {
    ADD_DIGIT:'add-digit',
    CHOOSE_OPERATION:'choose-operation',
    CLEAR:'clear',
    DELETE_DIGIT:'delete-digit',
    EQUAL:'equal',
}
    const reducer=(state,{type,payload})=>{
        switch(type){
            case ACTIONS.ADD_DIGIT:
                if(state.overwrite ){
                    return{
                        ...state,
                        currentOperand:payload.digit,
                        overwrite:false
                    }
                }
                if(payload.digit=="0" && state.currentOperand==="0"){
                    return state
                }
                 if (payload.digit === "." && state.currentOperand==null || state.currentOperand=="")    
                return{
                    ...state,
                    currentOperand: "0."
                }
                if (payload.digit === "."  && state.currentOperand.includes("."))    
                return state
                return{
                    ...state,
                    currentOperand: `${state.currentOperand || "" }${payload.digit}`
                }
            case ACTIONS.CHOOSE_OPERATION:
                if(state.currentOperand==null && state.previouseOperand==null){
                    return state
                }
                if(state.currentOperand==null){
                    return{
                        ...state,
                        operation:payload.operation,
                    }
                }
                if(state.previouseOperand==null){
                    return{
                        ...state,
                        operation:payload.operation,
                        previouseOperand:state.currentOperand,
                        currentOperand:null
                    }
                }
                return{
                    ...state,
                    previouseOperand:evaluate(state),
                    operation:payload.operation,
                    currentOperand:null,
                }
            case ACTIONS.CLEAR:
                return{}
            case ACTIONS.DELETE_DIGIT:
                if(state.overwrite){
                    return{
                        ...state,
                        overwrite:false,
                        currentOperand:null
                    }
                }
                if(state.currentOperand==null) return state
                if(state.currentOperand.length==1){
                    return{
                        ...state,currentOperand:null,
                    }
                }
                return{
                    ...state,
                    currentOperand:state.currentOperand.slice(0,-1)
                }
            case ACTIONS.EQUAL:
                if(state.operation==null||state.currentOperand==null||state.previouseOperand==null){
                    return state
                }
                return{
                    ...state,
                    overwrite:true,
                    previouseOperand:null,
                    operation:null,
                    currentOperand:evaluate(state)
                }
        }
           
    }
     const evaluate=({currentOperand,previouseOperand,operation})=>{
            const prev=parseFloat(previouseOperand);
            const current=parseFloat(currentOperand);
            if(isNaN(prev)||isNaN(current)) return ""
            let computation=""
            switch (operation){
                case "+":
                    computation=prev+current
                    break
                case "-":
                    computation=prev-current
                    break
                case "x":
                    computation=prev*current
                    break
                case "÷":
                    computation=prev/current
                    break
            }
            return computation.toString();
        }
    const INTEGER_FORMATTER=new Intl.NumberFormat("en-us",{
        maximumFractionDigits:0
    }) 
     const FormatOperand=(op)=>{
        if(op==null)return
        const [integer,decimal]=op.split(".")
        if(decimal==null) return INTEGER_FORMATTER.format(integer)
        return `${INTEGER_FORMATTER.format(integer)}.${decimal}`
     }

 const Kalku = () => {
    // // const currentValue=useRef();
    // const [value,setValue]=useState([]);
    // // useEffect(()=>{
        
    // // },[value])
    // const currentActions=(param)=>{
    //     setValue((previousValue)=>[...previousValue,param])
    // }
const [{currentOperand,previouseOperand,operation},dispatch]=useReducer(reducer,{})
   return (
     <div className='calculator-grid'>
        <div className='output'>
                <div className='previous-operand'>{FormatOperand(previouseOperand)}</div>
            <div className='current-operand'>{FormatOperand(currentOperand)}</div>
        </div>
        <button className='span-two' onClick={()=>dispatch({type:ACTIONS.CLEAR})}>AC</button>
        <button onClick={()=>dispatch({type:ACTIONS.DELETE_DIGIT})}>DEL</button>
        <OperationButton operation="÷" dispatch={dispatch}/>

        {/* <button>÷</button> */}
        <DigitButton digit="1" dispatch={dispatch}/>
        <DigitButton digit="2" dispatch={dispatch}/>
        <DigitButton digit="3" dispatch={dispatch}/>
        <OperationButton operation="x" dispatch={dispatch}/>
        {/* <button>x</button> */}
        <DigitButton digit="4" dispatch={dispatch}/>
        <DigitButton digit="5" dispatch={dispatch}/>
        <DigitButton digit="6" dispatch={dispatch}/>

        <OperationButton operation="+" dispatch={dispatch}/>
        {/* <button>+</button> */}
        <DigitButton digit="7" dispatch={dispatch}/>
        <DigitButton digit="8" dispatch={dispatch}/>
        <DigitButton digit="9" dispatch={dispatch}/>

        <OperationButton operation="-" dispatch={dispatch}/>
        {/* <button>-</button> */}
        <DigitButton digit="." dispatch={dispatch}/>
        <DigitButton digit="0" dispatch={dispatch}/>
        <button onClick={()=>{dispatch({type:ACTIONS.EQUAL})}} className='span-two'>=</button>
     </div>
   )
 }
 
 export default Kalku
 