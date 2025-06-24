import './App.css'
import {Header} from './components/header/header.tsx'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./components/pages/home.tsx";
import {Manage} from "./components/pages/manage.tsx";



export function App()  {

  return (
      <BrowserRouter>
          <Header />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/manager" element={<Manage />} />
          </Routes>
      </BrowserRouter>
  )
}

