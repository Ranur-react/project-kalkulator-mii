import React, { useEffect, useRef } from 'react'

const spContex= React.createContext();
const SpList=()=>{
    const [items,setItems]=React.useState([]);
    const itemInput=useRef(null);
    useEffect(()=>{
        const storedItems=JSON.parse(localStorage.getItem("ShoopingList"));
        setItems(storedItems);
    },[]);
    useEffect(()=>{
        localStorage.setItem("ShoopingList",JSON.stringify(items))
    },[items]);
    const addItem=()=>{
        const newItem=itemInput.current.value;
        if(newItem!==''){
            setItems(prevItems=>[...prevItems,newItem]);
            itemInput.current.value=''
        }
    }
    const deleteItem=(index)=>{
        const updateItems=items.filter((item,i)=>i!==index);
        setItems(updateItems);
    }
      return (
    <div>
      <h2>Order List</h2>
      <input type='text' ref={itemInput}></input>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item,i)=>(
            <li key={i}>
                {i+1}. {item} <button onClick={()=>deleteItem(i)}> Delete</button>
            </li>
        ))}
      </ul>
    </div>
  )
}
const Coba = () => {
  return (
    <div>
    <spContex.Provider value={{}}>
        <SpList/>
    </spContex.Provider>
    </div>
  )
}

export default Coba
