import React from 'react'

import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './HomeComp/Navbar'

const NftDetails = () => {
    const [nft,setNft] = useState([]);

    const params = useParams()

    useEffect(()=>{
  
      const fetchNft = async()=>{
      try{
      const {data} = await axios.get(`https://api.coingecko.com/api/v3/nfts/${params.id}`)
     
      setNft(data);
  

  
      }

      catch (error) {
        console.log("Error while fetching coins")
          
        }

    }
      
      fetchNft();
      
      }, [params.id])
  return (
    <>
      <Navbar/>


<div className='mt-4'>
<section className="w-[90%] mx-auto my-14 border ">
  <div className="container flex flex-col items-center justify-center py-24 md:flex-row">
    <div className=" lg:w-[25%] lg:pl-20 md:pl-10 pl-10 md:w-1/2 w-5/6 mb-10 md:mb-0 ">
     {nft.image ? <img className='object-cover object-center w-56 h-56 rounded ' src={nft.image.small} alt='' /> : null}
    </div>
    <div className="lg:flex-grow md:w-[40%] pl-2 flex flex-col ">
      <h1 className="mb-4 text-3xl font-medium title-font sm:text-4xl">{nft.name}</h1>
      {nft.floor_price?<p className='text-lg font-semibold leading-relaxed lg:text-xl'>Price: {nft.floor_price.usd} USD</p>:null}
      <p className='text-sm font-semibold lg:text-xl'>Contract address: {nft.contract_address
}</p>
<p className="leading-relaxed ">Total supply: {nft.total_supply}</p>
      <p className="leading-relaxed ">{nft.description}</p>
    </div>
  </div>
</section>
</div>

    </>
  )
}

export default NftDetails
