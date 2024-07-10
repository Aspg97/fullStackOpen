const  Header = (nombCurso) => {
  return(
    <div>
      <h1>Nombre del curso: {nombCurso.nombreCurso}</h1>
    </div>
  );
}

const Parte = (infoP) => {
  return(
    <>
      <p>{infoP.parte} {infoP.ejercicio}</p>
    </>
  )
}

const Content = (infoS) => {
  return(
    <div>
      <Parte parte = {infoS.partes[0].nombre} ejercicio={infoS.partes[0].ejercicios}/>
      <Parte parte = {infoS.partes[1].nombre} ejercicio={infoS.partes[1].ejercicios}/>
      <Parte parte = {infoS.partes[2].nombre} ejercicio={infoS.partes[2].ejercicios}/>
    </div>
  );
}

const Total = (elementos) => {
  return(
    <>
    <p>Numero de ejercicios: {elementos.partes[0].ejercicios + elementos.partes[1].ejercicios + elementos.partes[2].ejercicios}</p>
    </>
  );
}

function App() {
  const curso = 'Desarrollo de aplicaciones Half Stack';
  const parte = [
    {
      nombre: 'Fundamentos de React',
      ejercicios: 10
    },
    {
      nombre: 'Usando props para el paso de datos',
      ejercicios: 7
    },
    {
      nombre: 'Estado de un componente',
      ejercicios: 14
    }
  ]
  return (
    <div>
      <Header nombreCurso = {curso}/>
      <Content partes = {parte}/>
      <Total partes = {parte}/>
    </div>
  )
}

export default App
