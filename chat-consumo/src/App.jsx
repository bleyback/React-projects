
import {io} from "socket.io-client"
import './App.css'



const socket = io("https://chat-nodejs-dev-xfqa.2.us-1.fl0.io/chat")
socket.on("message",(body)=>{
  const ul =document.getElementById('messages')
  ul.insertAdjacentHTML("beforeend",`<li>${body.body}</li>`)
  console.log(body)
})

function App() {

  const handleSubmit=(event)=>{
    event.preventDefault()
    if(!socket.connected) return
    const input =document.getElementById('msg')
    const msg=input.value
    if(msg=='')return
    socket.emit('message',msg)
    const ul =document.getElementById('messages')
    ul.insertAdjacentHTML("beforeend",`<li class="lime">${msg}</li>`)
    input.value=""
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
