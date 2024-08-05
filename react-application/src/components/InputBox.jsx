import { useState } from 'react';
import './InputBox.css';

const InputBox = (props) => {
    return <div className='inputBox'>
        <input type='text' value={props.currentVal} onChange={(e) => props.callOnChange(e)} placeholder='Kelime giriniz...' />
        <button onClick={() => props.submitAnswer()}> ENTER </button>
    </div>;
}

export default InputBox;