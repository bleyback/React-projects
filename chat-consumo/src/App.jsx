import React from 'react';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Chat from './pages/chat.jsx';
import Login from './pages/login.jsx';
import Register from './pages/register.jsx';

function App  (){
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/" element={<Chat/>} />
        </Routes>
    </BrowserRouter>
    );
};

export default App;
