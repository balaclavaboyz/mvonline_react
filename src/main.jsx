import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Faq from "./Faq";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from "./Gallery";
import Politica from "./Politica";
import Termos from './Termos'


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                  <Route path="/politica" element={<Politica/>}></Route>
                    <Route index element={<Gallery/>}></Route>
                    <Route path="/faq" element={<Faq />}></Route>
                    <Route path='/termos' element={<Termos/>}></Route>
                    <Route
                        path="*"
                        element={
                            <div>
                                <p>Não tem nada aqui nessa página.</p>
                            </div>
                        }
                    ></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
