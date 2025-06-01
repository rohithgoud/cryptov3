import React, { useEffect, useState } from 'react'
import axios from "axios"
import TrendingItem from './TrendingItem'

function Trending() {

    const [data, setData] = useState([])
    const url = "https://api.coingecko.com/api/v3/search/trending"

    useEffect(()=> {
        axios.get(url)
        .then((response) => {
            setData(response.data.coins)
        })
    },[url])

  return (
    <div className='px-2 py-5 rounded-div lg:px-10 bg-gray-50'>
        <h1 className='my-5 text-3xl font-semibold'>Trending Coins</h1>
        <div className='grid gap-3 md:grid-cols-2 xl:grid-cols-3 sm:grid-cols-1'>
            {data.map((coin)=> (
                <TrendingItem key={coin.item.id} coin={coin}/>
            ))}
        </div>
    </div>
  )
}

export default Trending