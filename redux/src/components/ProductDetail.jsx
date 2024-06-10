import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { add } from '../features/cartSlicer';

const API_URL = 'https://fakestoreapi.com/products';

export function ProductThree() {
  const [products, setProduts] = useState([]);
  const fetchData = async () => {
    const { data } = await axios.get(API_URL);
    setProduts(data);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const dispatch = useDispatch();

  const handleAdd = (product)=>{
    dispatch(add(product));
  }

  return (
    <>
      {
        <div className='flex '>
        {products.map((product)=>(
          <div key={product.id} className="rounded-md w-[150px]  border ">
          <img
            src={product.image}
            className="aspect-[16/9]  w-[150px] rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
          />
          <div className="p-4">
            <h1 className="inline-flex items-center text-lg font-semibold">{product.title}</h1>
            <button
              onClick={()=>{
                handleAdd(product);
              }}
              type="button"
              className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Add to Cart
            </button>
          </div>
        </div>
        ))}
        </div>
      }
    </>
  )
}
