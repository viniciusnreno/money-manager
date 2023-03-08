

export function Item(props){
  return (
    <div className="flex p-2 items-center flex-row text-center bg-indigo-500 mx-auto text-white border rounded-lg mb-2">
      <span className="basis-5/6 text-left"><span>{props.category}</span> - {props.name}</span>
      <span className="basis-1/12 text-sm">R$ {props.price}</span>
      <span className="basis-1/12 text-right text-sm">{props.date}</span>
    </div>
  )
} 