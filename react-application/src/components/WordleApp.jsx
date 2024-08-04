import { useState } from 'react';
import './WordleApp.css';

import WordleBox from './WordleBox';
import InputBox from './InputBox';

const WordleApp = () => {
    
    const [inputWord, setInputWord] = useState("");

    const handleInputOnChange = (e) => {
        setInputWord(e.target.value);
    }


    return (<div>
        <WordleBox content={[
            [1,1,1,1,1],
            [1,1,2,1,1],
            [1,1,3,1,1],
            [1,1,4,1,1],
            [1,1,5,1,1]
        ]}></WordleBox>

        <InputBox currentVal={inputWord} callOnChange={(e) => handleInputOnChange(e)}></InputBox>
        
        </div>);








};


export default WordleApp; 