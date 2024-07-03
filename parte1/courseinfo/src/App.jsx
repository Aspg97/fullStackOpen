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
      <Parte parte = {infoS.parte1} ejercicio={infoS.ejercicio1}/>
      <Parte parte = {infoS.parte2} ejercicio={infoS.ejercicio2}/>
      <Parte parte = {infoS.parte3} ejercicio={infoS.ejercicio3}/>
    </div>
  );
}

const Total = (elementos) => {
  return(
    <>
    <p>Numero de ejercicios: {elementos.num1 + elementos.num2 + elementos.num3}</p>
    </>
  );
}

function App() {
  const curso = 'Desarrollo de aplicaciones Half Stack';
  const parte1 = 'Fundamentos de React';
  const ejercicio1 = 10;
  const parte2 = 'Usando props para el paso de datos';
  const ejercicio2 = 7;
  const parte3 = 'Estado de un componente';
  const ejercicio3 = 14;
  return (
    <div>
      <Header nombreCurso = {curso}/>
      <Content parte1 = {parte1} ejercicio1 = {ejercicio1} parte2 = {parte2} ejercicio2 = {ejercicio2} parte3 = {parte3} ejercicio3 = {ejercicio3}/>
      <Total num1 = {ejercicio1} num2 = {ejercicio2} num3 = {ejercicio3}/>
    </div>
  )
}

export default App
