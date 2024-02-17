import { useState,useRef } from 'react'
import {io} from "socket.io-client"
import './App.css'



const socket = io("https://chat-nodejs-dev-xfqa.2.us-1.fl0.io")
socket.on("message",(body)=>{
  const ul =document.getElementById('messages')
  ul.insertAdjacentHTML("beforeend",`<li>${body.body}</li>`)
  console.log(body)
})

function App() {

  socket.on("connect", () => {
    console.log(socket.id);
  });

  const handleSubmit=(event)=>{
    event.preventDefault()
    if(!socket.connected) return
    const msg=document.getElementById('msg').value
    socket.emit('message',msg)
  }

  return (
    <>
      <div className='chat'>
        <ul id="messages">
        </ul>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" id="msg" placeholder='Type a message'/>
          <button>Enviar</button>
        </form>
      </div>
    </>
  )
}

export default App
