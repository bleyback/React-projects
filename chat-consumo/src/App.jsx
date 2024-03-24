import React from 'react';
import { BrowserRouter,Routes,Route,HashRouter} from 'react-router-dom';
import Chat from './pages/chat.jsx';
import Login from './pages/login.jsx';
import Register from './pages/register.jsx';
import { AuthProvider } from './context/AuthContext.jsx';

function App  (){
    return (
    <AuthProvider>
        <HashRouter>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/chat" element={<Chat/>} />
                <Route path='*' element={<Login/>}/>
            </Routes>
        </HashRouter>
    </AuthProvider>
    );
};

export default App;
