import { useEffect } from "react";

export function Total(props){
  var total = 0;
  props.itemsList.map(item => total = total + parseInt(item.price))
  return (
    <div className="total">
      <h1 className="text-2xl font-bold mt-8 mb-7">Total: {total} </h1>
    </div>
  )
}