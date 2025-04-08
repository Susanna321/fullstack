const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by
      <a href="https://github.com/mluukai"> mluukai</a>
    </div>
  )
}

const App = () => {
  const friends = [
    { name: 'Leevi', age: 4},
    { name: 'Venla', age: 10}
  ]
  const friends2 = [ 'Kalle', 'Maisa']


  return (
    <>
      <h1>Greetings</h1>
      <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p>
      <p>{friends2}</p>
      <Footer/>
    </>
  )
}



export default App
