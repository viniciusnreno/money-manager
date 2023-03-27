
import { Item } from "../../components/Item";
import { ItemData } from "../../components/ItemData";
import { Total } from "../../components/Total";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";

export function Home(){
  const [items, setItems] = useState([]);
  const [itemsList, setItemsList] = useState([])
  const itensRef = collection(db, "itens")
  const getItem = async () => {
    const response = await getDocs(itensRef)
    setItemsList(
      response.docs.map((doc) => ({id: doc.id, ...doc.data()}))
    )
  }

  useEffect(() => {
    getItem();
  }, [itemsList])

  return (
    <div className="container mx-auto text-center px-3">
      <h1 className="text-4xl font-bold mt-8 mb-7">Money Manager</h1>

      <ItemData setItems={setItems}/>
      <div>{itemsList?.map(item => <Item id={item.id} category={item.category} name={item.name} price={item.price} date={item.date}/>)}</div>  

      <Total itemsList={itemsList}/>
      
    </div>
  );
}