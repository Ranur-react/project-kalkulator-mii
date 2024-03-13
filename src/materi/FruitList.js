import React from 'react'
const f=['apple','banana'];
const FruitList = () => {
  return (
    <div>
        <ul>
                  {
        f.map((value,index)=>(
            <li key={index}>{value}</li>
        ))
      }
        </ul>
    </div>
  )
}

export default FruitList
