import { useState } from 'react';
import './WordleApp.css';
import WordleBox from './WordleBox';
import InputBox from './InputBox';


const WordleApp = (props) => {

    const answerWord = "KAVUN";
    const [inputWord, setInputWord] = useState("");
    const [color, setColor] = useState([]);
    const [allColorList, setallColorList] = useState( [1,2,3,4,5],[6,7,8,9,10] ,[1,2,3,4,5] ,[1,2,3,4,5] ,[1,2,3,4,5]);
    const [inputList, setInputList] = useState([1,2,3,4,5])
    const [currentRow, setCurrentRow] = useState(0);

    
    const handleInputOnChange = (e) => {
        setInputWord(e.target.value);
        
    }

    const submitAnswer = () => {

        let cl = [];
        inputList[currentRow] = inputWord;
        for (let i = 0; i < 5; i++) {
            if (inputWord[i] === answerWord[i]) {
                cl[i] = "correct";
            }
            else {
                cl[i] = "false";
            }
        }
        setColor(cl);
        allColorList[currentRow] = color;
        
        setCurrentRow(currentRow + 1);

    }


    return (<div>
        <WordleBox content={[
            [inputList[0][0], inputList[0][1], inputList[0][2], inputList[0][3], inputList[0][4]],
            [inputList[1][0], inputList[1][1], inputList[1][2], inputList[1][3], inputList[1][4]],
            [inputList[2][0], inputList[2][1], inputList[2][2], inputList[2][3], inputList[2][4]],
            [inputList[3][0], inputList[3][1], inputList[3][2], inputList[3][3], inputList[3][4]],
            [inputList[4][0], inputList[4][1], inputList[4][2], inputList[4][3], inputList[4][4]]
        ]} colorList={allColorList} ></WordleBox>

        <InputBox currentVal={inputWord} callOnChange={(e) => handleInputOnChange(e)} submitAnswer={() => submitAnswer()}></InputBox>

    </div>);








};


export default WordleApp; 