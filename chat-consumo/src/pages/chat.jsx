import {io} from "socket.io-client"
import '../styles/App.css'
import { useAuth } from '../context/AuthContext';


const socket = io("https://chat-nodejs-dev-xfqa.2.us-1.fl0.io")
socket.on("message",(body)=>{
  const ul =document.getElementById('messages')
  ul.insertAdjacentHTML("beforeend",`<li>${body.body}</li>`)
  console.log(body)
})

const  Chat= () =>{
  const {isAuthenticated,user}=useAuth()
  console.log(user,isAuthenticated)

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
    <main>
      <div className='chat'>
        <ul id="messages">
        </ul>
        <form className="chatform" onSubmit={handleSubmit}>
          <input type="text" id="msg" placeholder='Type a message'/>
          <button>Enviar</button>
        </form>
      </div>
    </main>
  )
}

export default Chat;
