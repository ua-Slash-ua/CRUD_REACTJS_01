import './App.css'
import {Header} from './components/header/header.tsx'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./components/pages/home/home.tsx";
import {Manage} from "./components/pages/manage/manage.tsx";
import {useState} from "react";
import {AuthProvider} from "./api/context/auth.tsx";


export function App() {
    const [isAuth, setIsAuth] = useState(false);
    return (
        <AuthProvider>
            <BrowserRouter>
                <Header isAuth={isAuth} setIsAuth={setIsAuth}/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/manager" element={<Manage/>}/>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
}

