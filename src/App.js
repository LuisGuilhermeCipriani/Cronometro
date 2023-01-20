import React, {useState} from 'react';
import './estilo.css';

function App(){

    return(
        <div className='container'>
            <h1>Cronômetro</h1>
            <img src={require('./assets/cronometro.png')} className='img'/>
            <strong className='timer'>0.0</strong>
            <div className='acaoBtn'>
                <a className='botao'>INICIAR</a>
                <a className='botao'>LIMPAR</a>
            </div>
        </div>
    );
}

export default App;