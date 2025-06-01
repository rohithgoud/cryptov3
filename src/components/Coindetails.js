import React, { useState,useEffect } from 'react'
import Navbar from './HomeComp/Navbar'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import DOMPurify from 'dompurify'



const Coindetails = () => {
   

const params = useParams()

const [coins,setCoins] = useState({})



useEffect(()=>{

  const fetchCoins = async()=>{
  try{
  const {data} = await axios.get(`https://api.coingecko.com/api/v3/coins/${params.id}`)
  
  setCoins(data);

  }

  catch (error) {
    console.log("Error while fetching coins")
      
    }
  }
  
  fetchCoins();
  
  }, [])






  return (
    <>
      <Navbar/>
     <div className='flex flex-col justify-center items-center  h-[full] mt-14 mb-10 bg-gray-50'>
      <div className='shadow-md bg-white rounded-md lg:w-[60%] md:w-[80%] w-[95%] py-4 h-[35%] mt-10 '>
        <h1 className='text-4xl font-semibold text-center lg:text-6xl md:text-6xl '>{coins.name}</h1>
      </div>
      <div className='shadow-md bg-white rounded-md lg:w-[60%] md:w-[80%] w-[95%] py-6  mt-4 '>
        <p className='pl-6 text-lg text-white lg:text-xl md:text-xl'>Rank: #{coins.coingecko_rank}</p>
       <div  className='flex justify-between px-2 mt-4 lg:px-6 md:px-6'>
       <div >
    <div className='flex' >{coins.image ? <img className='pr-3' src={coins.image.small} alt='' /> : null}
    <p className='pt-1 pr-3 text-lg font-semibold lg:text-2xl md:text-xl'>{coins.name}</p>
    {coins.symbol ? <p className='pt-2 text-sm font-semibold lg:text-xl md:text-lg '>{coins.symbol.toUpperCase()}/USD</p> : null}</div>
    </div>
    <div className='pr-2 lg:pr-10 md:pr-5'>
    {coins.market_data?.current_price ? <h1 className='text-xl font-semibold lg:text-4xl md:text-2xl'>${coins.market_data.current_price.usd.toLocaleString()}</h1> : null}
    </div>
       </div>
      </div>


<div className='shadow-md bg-white rounded-md lg:w-[60%] md:w-[80%] w-[95%] py-6  mt-4 lg:px-10 '>
<div >
                    <table className='flex flex-col items-center justify-center'>
                        <thead>
                            <tr>
                                <th className='px-4 py-2 font-semibold rounded-sm lg:px-8 md:px-6 text-md '>1h</th>
                                <th className='px-4 py-2 font-semibold rounded-sm lg:px-8 md:px-6 text-md '>24h</th>
                                <th className='px-4 py-2 font-semibold rounded-sm lg:px-8 md:px-6 text-md'>7d</th>
                                <th className='px-4 py-2 font-semibold rounded-sm lg:px-8 md:px-6 text-md'>14d</th>
                                <th className='px-4 py-2 font-semibold rounded-sm lg:px-8 md:px-6 text-md'>30d</th>
                                <th className='px-4 py-2 font-semibold rounded-sm lg:px-8 md:px-6 text-md'>1yr</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='px-2 py-2 lg:px-6 md:px-4 text-md' >{coins.market_data?.price_change_percentage_1h_in_currency ? <p>{coins.market_data.price_change_percentage_1h_in_currency.usd.toFixed(1)}%</p> : null}</td>
                                <td className='px-2 py-2 lg:px-6 md:px-4 text-md'>{coins.market_data?.price_change_percentage_24h_in_currency ? <p>{coins.market_data.price_change_percentage_24h_in_currency.usd.toFixed(1)}%</p> : null}</td>
                                <td className='px-2 py-2 lg:px-6 md:px-4 text-md'>{coins.market_data?.price_change_percentage_24h_in_currency ? <p>{coins.market_data.price_change_percentage_7d_in_currency.usd.toFixed(1)}%</p> : null}</td>
                                <td className='px-2 py-2 lg:px-6 md:px-4 text-md'>{coins.market_data?.price_change_percentage_24h_in_currency ? <p>{coins.market_data.price_change_percentage_14d_in_currency.usd.toFixed(1)}%</p> : null}</td>
                                <td className='px-2 py-2 lg:px-6 md:px-4 text-md'>{coins.market_data?.price_change_percentage_24h_in_currency ? <p>{coins.market_data.price_change_percentage_30d_in_currency.usd.toFixed(1)}%</p> : null}</td>
                                <td className='px-2 py-2 lg:px-6 md:px-4 text-md'>{coins.market_data?.price_change_percentage_24h_in_currency ? <p>{coins.market_data.price_change_percentage_1y_in_currency.usd.toFixed(1)}%</p> : null}</td>

                            </tr>
                        </tbody>
                    </table>
                </div>
</div>


<div className='flex bg-white justify-between shadow-md rounded-md lg:w-[60%] md:w-[80%] w-[95%] py-6 h-[35%] mt-10 lg:px-14 md:px-2 px-2 '>

<div >
                            <div className='flex flex-col '>
                                <h4 className='pr-1 text-sm font-semibold lg:text-xl md:text-md lg:pr-16 md:pr-4' >24 Hour Low</h4>
                                {coins.market_data?.low_24h ? <p className='text-sm md:text-md lg:text-xl '>${coins.market_data.low_24h.usd.toLocaleString()}</p> : null}
                            </div>
                            <div className='flex flex-col mt-2 '>
                                <h4 className='pr-1 text-sm font-semibold lg:text-xl md:text-md lg:pr-16 md:pr-4'>24 Hour High</h4>
                                {coins.market_data?.high_24h ? <p className='text-sm lg:text-xl '>${coins.market_data.high_24h.usd.toLocaleString()}</p> : null}                            </div>

                        </div>




<div >
                            <div className='flex flex-col '>
                                <h4 className='pr-1 text-sm font-semibold md:text-md lg:text-xl lg:pr-16 md:pr-4'>Market Cap</h4>
                                {coins.market_data?.market_cap ? <p className='text-sm md:text-md lg:text-xl'>${coins.market_data.market_cap.usd.toLocaleString()}</p> : null}
                            </div>
                            <div className='flex flex-col mt-2 '>
                                <h4 className='pr-1 text-sm font-semibold lg:text-xl md:text-md lg:pr-16 md:pr-4'>Circulating Supply</h4>
                                {coins.market_data ? <p className='text-sm lg:text-xl md:text-md'>{coins.market_data.circulating_supply}</p> : null}
                            </div>

                        </div>
                        </div>

                        <div className=' bg-white shadow-md rounded-md lg:w-[60%] md:w-[80%] w-[95%] py-4 h-[35%] mt-10 px-2 ' >
                        <h3 className='text-lg font-semibold'>About</h3>
                        <p dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(coins.description ? coins.description.en : ''),
                        }}>
                        
                        </p>

                    </div>

     </div>
    </>
  )
}

export default Coindetails
