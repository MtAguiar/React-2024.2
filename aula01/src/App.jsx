// Quem chama o APP é o main dentro da TAG StricMode. COmo no main tenho uma chamada index.css, ele incorpora esse css aqui no app
import Exemplo from "./components/Exemplo";

// export default function App() {
//   return (
//   <h1> Hello Mundão!</h1>
//   )
//   }

//Se eu tenho tag h1 ele só retorna h1 desse jeito. Para retornar tags diferentes, faço isso dentro de um div, fragment...
const App = () =>{
  // return (
  //  //Fragment == tag sem nome; Tipo uma div sem nome
  //  <> 
  //     <h1>Hello Mundão!</h1>
  //     {/* //{usando uma expressão de js} */}
  //     <h2>Data: {new Date().toLocaleDateString()}</h2>
  //     <h2>Data: {new Date().toLocaleTimeString()}</h2>
  //   </>

  const elementosHtml = ( 
    <div>
      <h1>Hello Mundão!</h1>
    <h2>Data: {new Date().toLocaleDateString()}</h2>
     <h2>Data: {new Date().toLocaleTimeString()}</h2>
     <Exemplo/>
    </div>
  )
  return elementosHtml;
};

export default App;