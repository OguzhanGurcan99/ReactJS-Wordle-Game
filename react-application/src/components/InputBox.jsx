import { useState } from 'react';
import './InputBox.css';

const InputBox = (props) => {
    return <div className='inputBox'>
        <input type='text' value={props.currentVal} onChange={(e) => props.callOnChange(e)} placeholder='Kelime giriniz...' />
        <button id="enterButton" onClick={() => props.submitAnswer()}> ENTER </button>
    </div>;
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('enterButton').click();
    }
});



export default InputBox;