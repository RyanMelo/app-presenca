import { useState } from "react"
import { Card } from "../../Components/Card"
import "./Style.css"

interface Pessoa {
  name: string;
  time: string;
}

export function Home() {

  var date = new Date();
  var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

  const [name, setName] = useState<string>("");
  const [listPessoas, setlistPessoas] = useState<Pessoa[]>([]);

  function addLista() {
    listPessoas.push(
      {
        name: name,
        time: time,
      }
    );
    console.log(listPessoas);
    setName("");
  }
  
  return (
    <div className="flex flex-col justify-center items-center mx-auto my-10">
      <h1 className="text-2xl mb-5 font-semibold text-cyan-500">Lista de Presença</h1>
      <input type="text" placeholder="Nome" className="input-name" value={name} onChange={(e) => setName(e.target.value)}/>
      <button className="buttom-add" onClick={addLista}>Adicionar</button>

      <div className="w-1/2 bg-slate-300 h-1 rounded-md mb-5"></div>

      <>
        {listPessoas.map(pessoa => {
          return <Card name={pessoa.name} time={pessoa.time}/>
        })}
      </>

    </div>
  )
}
