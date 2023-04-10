import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppLayout from './components/App/AppLayout/AppLayout'
import './App.css'
import './assets/navbar.css'


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <AppLayout/>
            </BrowserRouter>
        </div>
    )
}

export default App