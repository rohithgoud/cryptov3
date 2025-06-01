import React from 'react'
import Navbar from './HomeComp/Navbar'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Nft = () => {



    const [nft,setNft] = useState([]);



    useEffect(()=>{
  
      const fetchNft = async()=>{
      try{
      const {data} = await axios.get(`https://api.coingecko.com/api/v3/nfts/list?per_page=30`)
     
      setNft(data);
     
      }

      catch (error) {
        console.log("Error while fetching coins")
          
        }

    }
      
      fetchNft();
      
      }, [])

  return (
    


    


    <div>
      <Navbar/>
      
<div className='mt-28 '>
<h1 className='mb-4 text-3xl font-semibold text-center'>Trending Nft's</h1>
<div className='grid gap-3 mx-2 lg:grid-cols-4 md:grid-cols-2 md:mx-4 lg:mx-7'>
{
    nft.map((item)=>(

<div key={item.id} className="border rounded-md cursor-pointer ">
      <div>
      <Link to={`/Nft/${item.id}`}>
       <div className="flex items-center h-full p-4" key={item.id}>
          <div className="flex-grow">
          <p className="px-1 text-xl font-semibold text-black bg-gray-300 rounded-md " >Symbol: {item.symbol}</p>
            <h2 className="font-medium title-font">Name: {item.name}</h2>
            <p >Asset platform: {item.asset_platform_id
}</p>


          </div>
        </div>

        </Link>
      </div>
      </div>



    ))
}
</div>
</div>

    </div>
  )
}

export default Nft
