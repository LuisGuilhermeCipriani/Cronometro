import React, { useState } from 'react';
import './estilo.css';

function App() {

    const [contador, setContador] = useState(0);
    const [timer, setTimer] = useState(null);
    const [botao, setBotao] = useState('INICIAR');

    function iniciar() {
        if (timer !== null) {
            clearInterval(timer);
            setTimer(null);
            setBotao('CONTINUAR');
        } else {
            setTimer(setInterval(() => {
                setContador(contador => contador + 0.1);
            }, 100));
            setBotao('PAUSAR');
        }
    }

    function limpar() {

    }

    return (
        <div className='container'>
            <h1>Cronômetro</h1>
            <img src={require('./assets/cronometro.png')} className='img' />
            <strong className='timer'>{contador.toFixed(1)}</strong>
            <div className='acaoBtn'>
                <a className='botao' onClick={iniciar}>{botao}</a>
                <a className='botao' onClick={limpar}>LIMPAR</a>
            </div>
        </div>
    );
}

export default App;