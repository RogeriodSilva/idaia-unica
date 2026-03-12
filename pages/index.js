import { useState } from "react"

function Home() {
     
     return( 
     <>
          <h1>Home</h1>
          <Contador/>
     </>)
}

function Contador(){
     const [contador, setContador] = useState(0)
     
     return <>
          <div>
               <div>{contador}</div>
               <button onClick={()=> setContador(contador + 1)}>Clique aqui</button>
          </div>
     </>
}

export default Home