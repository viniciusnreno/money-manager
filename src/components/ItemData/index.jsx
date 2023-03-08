import React, { useState } from 'react'
import nextId  from "react-id-generator";

export function ItemData(props){
  const [itemName, setItemName] = useState();
  const [itemPrice, setItemPrice] = useState();
  const [itemDate, setItemDate] = useState();

  function handleAddItem(){
    const newItem = {
      name: itemName,
      price: itemPrice,
      date: itemDate,
      id: nextId()
    }
    console.log(newItem)
    props.setItems(prevState => [...prevState, newItem])
  }

  return (
    <div className="flex mb-4">
        <label htmlFor="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
        <select className="flex-shrink-0 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200" type="button">All categories <svg aria-hidden="true" className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          <option defaultChecked>Select</option>
          <option value="car">Car</option>
          <option value="food">Food</option>
          <option value="role">Role</option>
        </select> 
        <input 
          className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 border-l-gray-100 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Search" required 
          type="text"
          id="item-name"
          onChange={e => setItemName(e.target.value)}
        />
        <input 
          className="p-2.5 w-20 z-20 text-sm text-gray-900 bg-gray-50 border-l-gray-100 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="R$" required 
          type="money"
          id="item-price"
          onChange={e => setItemPrice(e.target.value)}
        />
        <input 
          className="p-2.5 w-20 z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-100 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="date" required 
          type="data"
          id="item-date"
          onChange={e => setItemDate(e.target.value)}
        />
        <button type="button" onClick={handleAddItem} className="ml-3 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Add
        </button>
    </div>
  );
}
