import React from "react";
import "./css/faq.css";

export default function faq() {
    return (
        <>
            <div className="container container_column">
                <div className="faq">
                    <h1>Bem-Vindo ao FAQ!</h1>
                    <h2>Qual é forma de entrega?</h2>
                    <p>Sedex e PAC no correio</p>
                    <h2>Qual é a quantidade mínima para compra?</h2>
                    <p>12 peças</p>
                    <h2>Qual horário comercial?</h2>
                    <p>7:30 às 17:30, segunda a sexta</p>
                    <h2>Eu consigo comprar pelo o whatsapp?</h2>
                    <p>
                        Sim pelo o Whatsapp ou pelo <a href="">site</a>
                    </p>
                    <h2>Qual pe o método de pagamento aceito?</h2>
                    <p>
                        Cartão de crédito, boleto, transferência bancária e pix
                    </p>
                </div>
            </div>
        </>
    );
}
