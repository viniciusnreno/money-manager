import { doc, deleteDoc, collection } from "firebase/firestore";
import { db } from "../../config/firebase";

export function Item(props){
  const itensRef = collection(db, "itens")
  const handleDelete = async () => {
    try {
      await deleteDoc(doc(itensRef, props.id));
    } catch (error) {
      console.error("Error deleting item: ", error);
    }
  }

  return (
    <div className="flex p-2 items-center flex-row text-center bg-indigo-500 mx-auto text-white border rounded-lg mb-2">
      <span className="basis-2/3 md:basis-5/6 text-left"><span>{props.category}</span> - {props.name}</span>
      <span className="basis-1/4 md:basis-1/6 text-sm">R$ {props.price}</span>
      <span className="basis-1/4 md:basis-1/6 text-sm">{props.date}</span>
      <button onClick={handleDelete} className="basis-1/12 ml-1 md:ml-3 bg-white hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 md:px-4 px-2 border border-red-500 hover:border-transparent rounded text-sm">Delete</button>
    </div>
  )
}
