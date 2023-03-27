import React, { useState, useEffect } from 'react'
import { addDoc, collection } from "firebase/firestore";
import { db } from '../../config/firebase'

export function ItemData(props){
  const [itemCategory, setItemCategory] = useState('');
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [itemDate, setItemDate] = useState('');
  const itensRef = collection(db, 'itens');


  const handleAddItem = async () => {
    const newItem = {
      name: itemName,
      price: itemPrice,
      date: itemDate,
      category: itemCategory,
    }
    props.setItems(prevState => [...prevState, newItem])
    
    await addDoc(itensRef, {
      ...newItem
    })
  }


  return (
    <div className="flex mb-4">
        <select onChange={e => setItemCategory(e.target.value)} className="text-sm flex-shrink-0 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200" type="button">All categories <svg aria-hidden="true" className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          <option defaultChecked>Select</option>
          <option value="car">Car</option>
          <option value="food">Food</option>
          <option value="role">Role</option>
        </select> 
        <input 
          className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 border-l-gray-100 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Name..." required 
          type="text"
          id="item-name"
          onChange={e => setItemName(e.target.value)}
        />
        <input 
          className="p-2.5 w-14 md:w-20 z-20 text-sm text-gray-900 bg-gray-50 border-l-gray-100 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="R$" required 
          type="number"
          id="item-price"
          onChange={e => setItemPrice(e.target.value)}
        />
        <input 
          className="p-2.5 w-14 md:w-20 z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-100 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Date" 
          type="text"
          id="item-date"
          onChange={e => setItemDate(e.target.value)}
        />
        <button type="button" onClick={() => {
          handleAddItem();
        }} className="ml-1 md:ml-3 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 md:px-4 px-2 border border-blue-500 hover:border-transparent rounded text-sm">
          Add
        </button>
    </div>
  );
}
