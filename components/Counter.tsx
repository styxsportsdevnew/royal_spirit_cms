'use client';

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { increment, decrement } from "../redux/features/counterSlice";
 
const Counter: React.FC = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.value);
 
  return (
    <div>
        <div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
  <img className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src="/img/erin-lindford.jpg" alt="" />
  <div className="space-y-2 text-center sm:text-left">
    <div className="space-y-0.5">
      <p className="text-lg font-semibold text-black">Erin Lindford</p>
      <p className="font-medium text-gray-500">Test Executive</p>
    </div>
    <button className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
      Message
    </button>
  </div>
</div>
      <h1 className="text-center text-xl font-bold">Counter: {count}</h1>


      <div className="grid grid-cols-2 columns- sm:grid-cols-2 columns-">
      <button className="bg-sky-500 hover:bg-sky-700" onClick={() => dispatch(increment())}>Increment</button>

      
<button className="bg-sky-500 hover:bg-sky-700"  onClick={() => dispatch(decrement())}>Decrement</button>
</div>


      
    </div>
  );
};
 
export default Counter;