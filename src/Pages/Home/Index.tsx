import { useState } from "react"
import { Card } from "../../Components/Card"
import "./Style.css"

export function Home() {

  const [name, setName] = useState<string>("");
  const [listNames, setListNames] = useState<string[]>([]);

  function addLista() {
    listNames.push(name);
    console.log(listNames);
    setName("");
  }
  
  return (
    <div className="flex flex-col justify-center items-center mx-auto my-10">
      <h1 className="text-2xl mb-5 font-semibold text-cyan-600">Lista de Presença</h1>
      <input type="text" placeholder="Nome" className="input-name" value={name} onChange={(e) => setName(e.target.value)}/>
      <button className="buttom-add" onClick={addLista}>Adicionar</button>

      <div className="w-1/2 bg-slate-300 h-1 rounded-md mb-5"></div>

      <>
        {listNames.map((name) => {
          return <Card name={name}/>
        })}
      </>

    </div>
  )
}
