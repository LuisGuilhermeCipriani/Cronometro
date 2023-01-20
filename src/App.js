import React, {useState} from 'react';

function App(){

    return(
        <div>
            <h1>Cronômetro</h1>
            <img src={require('./assets/cronometro.png')}/>
            <strong>0.0</strong>
            <div>
                <a>INICIAR</a>
                <a>LIMPAR</a>
            </div>
        </div>
    );
}

export default App;