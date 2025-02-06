import React from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../feature/cartSlice";


function Card({ product }) {
  const dispatch = useDispatch()
  return (
    <>
      <div className=" shadow-2xl">
        <div className=" overflow-hidden h-[20rem]">
          <img
            className=" hover:scale-125 h-full w-full object-cover object-left-top"
            src={product.imageUrl}
          />
        </div>
        <div>
          <h1 className="text-md p-3 font-bold">{product.title}</h1>
          <div className="bg-white flex space-x-2 pb-2 pl-2 items-center">
            <p className="font-semibold">${product.price}</p>
            <p className=" line-through opacity-50">
              ${product.discountedPrice}
            </p>
            <p className="text-green-600 font-semibold">
              %{product.discountPersent}
            </p>
          </div>
          <button onClick={()=>dispatch(addCart(product))} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Add Cart
          </button>
        </div>
      </div>
    </>
  );
}
export default Card;
