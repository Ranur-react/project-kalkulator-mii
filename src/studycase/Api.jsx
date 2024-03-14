import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Gambar from '../materi/Gambar';
const URL ='http://api.weatherapi.com/v1/current.json?key=188dc82421fc44d195d34719242502&q=London & aqi=no';

const Api = () => {
    const [temp, setTemp] = useState();
    useEffect(() => {
      // fetch(URL)
      //   .then(response => response.json())
      //   .then(data => setTemp(data.current.temp_f))
      //   .catch(error => console.error('Error:', error));
        axios.get(URL)
          .then(e => setTemp(e.data.current.temp_f))
          .catch(error => console.error('Error:', error));
    }, []);
    return (
      <div className='bg-gray-100 min-h-screen flex items-center justify-center'>
        {/* <div className='bg-white p-8 rounded shadow-md'>
          <div className='flex items-center'>
            <img src='https://picsum.photos/200/300' />
          </div>
        </div> */}
            <div className='bg-white p-8 rounded shadow-md'>
                <h1 className='text-3xl font-bold mb-4'>Weather in London</h1>
                <div className='flex items-center'>
                    <span className='text-5xl font-bold mr-2'>{temp}</span>
                    <span className='text-2xl'>°F</span>
                    <Gambar/>
                </div>
            </div>
        </div>
    )
}

export default Api
