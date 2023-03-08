
import { Item } from "../../components/Item";
import { ItemData } from "../../components/ItemData";
import { Total } from "../../components/Total";
import React, { useState } from "react";

export function Home(){
  const [items, setItems] = useState([]);

  return (
    <div className="container mx-auto text-center px-3">
      <h1 className="text-4xl font-bold mt-8 mb-7">Money Manager</h1>

      <ItemData setItems={setItems}/>
      {
        items.map(item => <Item key={item.id} category={item.category} name={item.name} price={item.price} date={item.date}/>)
      }

      <Total items={items}/>
      
    </div>
  );
}