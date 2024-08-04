import './WordleApp.css';
import { useState } from 'react';

const WordleApp = () => {
    const [inputWord, setInputWord] = useState("");

    const handleInputOnChange = (e) => {
        setInputWord(e.target.value);
    }



    return (<div className='main_board'>

        <div className="wordle_box">
            <div className='first_row'>
                <li>
                    <button>{inputWord[0]}</button>
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                </li>
            </div>
            <div className='second_row'>
                <li>
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                </li>
            </div>
            <div className='third_row'>
                <li>
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                </li>
            </div>
            <div className='fourth_row'>
                <li>
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                </li>
            </div>
            <div className='fifth_row'>
                <li>
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                </li>
            </div>
        </div>

        <div className='inputBox'>
            <input type='text' value={0} onChange={(e) => handleInputOnChange(e)} placeholder='Kelime giriniz...' />
            <button> ENTER </button>

        </div>
    </div>);
};






export default WordleApp; 