import { useState } from "react"


function App() {

  const [firstName,setFirstName] = useState()
  const [lastName,setLastName] = useState()
  const [email,setEmail] = useState()
  const [message,setMessage] = useState()

  const eventHandler = (e) => {
    e.preventDefault()

    const messageInfo = {
      fn:firstName,
      ln:lastName,
      mail:email,
      m:message
    }

    fetch(`http://localhost:8787/` , {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(messageInfo)
    })

      


  }


  return (
    <div className="App flex justify-center items-center h-screen">
      <form>
        <input onChange={(e) => setFirstName(e.target.value)} className="border-2 block m-2 w-full" type="text" name="firstName" id="firstName" placeholder="Vorname" />
        <input onChange={(e) => setLastName(e.target.value)} className="border-2 block m-2 w-full" type="text" name="lastName" id="lastName" placeholder="Nachname" />
        <input onChange={(e) => setEmail(e.target.value)} className="border-2 block m-2 w-full" type="email" name="email" id="email" placeholder="email" />
        <input onChange={(e) => setMessage(e.target.value)} className="border-2 block m-2 w-full" type="text" name="message" id="message" placeholder="Nachricht" />
        <button onClick={eventHandler} className="border-2 block m-2 w-full">senden</button>
      </form>
    </div>
  )
}

export default App
