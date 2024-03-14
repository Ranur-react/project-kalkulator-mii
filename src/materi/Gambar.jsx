import React from 'react'
const Gambar = () => {
    const imagePath ='./images/temperature.png';
    return (
    <div>
      <img className='h-10' src={imagePath} alt='No Image Found'/>
    </div>
  )
}

export default Gambar
