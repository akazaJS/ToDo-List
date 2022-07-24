import React from 'react';
import ReactDOM from "react-dom/client";
import App from "./components/My-app/my-app";
import './components/My-app/my-app.css'

function MyApp(){
    return(
        <App/>
    )
}



const conteiner=document.querySelector('#root');
const root = ReactDOM.createRoot(conteiner);
root.render(<MyApp/>)