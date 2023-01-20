import React, {useState} from 'react';
import './estilo.css';

function App(){

    const [contador, setContador] = useState(0);
    const [timer, setTimer] = useState(null);
    const [botao, setBotao] = useState('INICIAR');

    return(
        <div className='container'>
            <h1>Cronômetro</h1>
            <img src={require('./assets/cronometro.png')} className='img'/>
            <strong className='timer'>{contador.toFixed(1)}</strong>
            <div className='acaoBtn'>
                <a className='botao'>{botao}</a>
                <a className='botao'>LIMPAR</a>
            </div>
        </div>
    );
}

export default App;