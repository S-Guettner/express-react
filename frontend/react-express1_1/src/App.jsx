import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import Comments from "./components/Comments"

function App() {

  const [firstName,setFirstName] = useState()
  const [lastName,setLastName] = useState()
  const [email,setEmail] = useState()
  const [message,setMessage] = useState()
  const [guestBookComments,setGuestBookComments] = useState([])

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

    fetch(`http://localhost:8787/api/v1/guestbook`)
    .then(res => res.json())
    .then(data => {
      /* console.log(data) */
      data?.map((comment) => {
        setGuestBookComments([...guestBookComments, comment])
        console.log(guestBookComments)

      })
    })
  }

  
  return (
    <main>
    <div className="App flex justify-center items-center mb-4">
      <form>
        <input onChange={(e) => setFirstName(e.target.value)} className="border-2 block m-2 w-full" type="text" name="firstName" id="firstName" placeholder="Vorname" />
        <input onChange={(e) => setLastName(e.target.value)} className="border-2 block m-2 w-full" type="text" name="lastName" id="lastName" placeholder="Nachname" />
        <input onChange={(e) => setEmail(e.target.value)} className="border-2 block m-2 w-full" type="email" name="email" id="email" placeholder="email" />
        <input onChange={(e) => setMessage(e.target.value)} className="border-2 block m-2 w-full" type="text" name="message" id="message" placeholder="Nachricht" />
        <button onClick={eventHandler} className="border-2 block m-2 w-full">senden</button>
      </form>
    </div>
      <section>
        comments
        {guestBookComments.map((item) => {
          console.log(item)
          return(
            <Comments 
              key={uuidv4()}
              firstName={item.fn}
              lastName={item.ln}
              email={item.mail}
              message={item.m}
            />
          )
        })}
      </section>
    </main>
  )
}

export default App
