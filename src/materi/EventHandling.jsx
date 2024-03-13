import React from 'react'

const EventHandling = () => {
    const handleSubmit=(e)=> {
        e.preventDefault();
        console.log('====================================');
        console.log("Aanda Klik submit");
        console.log('====================================');
       }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default EventHandling
