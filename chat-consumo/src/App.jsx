import React from 'react';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Chat from './pages/chat.jsx';
import Login from './pages/login.jsx';
import Register from './pages/register.jsx';
import { AuthProvider } from './context/AuthContext.jsx';

function App  (){
    return (
    <AuthProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/chat" element={<Chat/>} />
            </Routes>
        </BrowserRouter>
    </AuthProvider>
    );
};

export default App;
