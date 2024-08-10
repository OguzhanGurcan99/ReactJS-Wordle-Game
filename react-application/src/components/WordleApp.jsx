import { useState } from 'react';
import './WordleApp.css';
import WordleBox from './WordleBox';
import InputBox from './InputBox';
import Table from './Table';
import LetterTable from './LetterTable';

const WordleApp = (props) => {

    const answerWord = props.random;
    const [allColorList, setAllColorList] = useState([["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""]]);
    const [inputList, setInputList] = useState([["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""]]);
    const [currentRow, setCurrentRow] = useState(0);
    const [temp, setTemp] = useState("");

    const [reveal, setReveal] = useState("");

    const [usedLetters, setUsedLetters] = useState([["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""]]);

    const handleInputOnChange = (e) => {
        const newTemp = e.target.value;
        setTemp(newTemp);

        const newInputList = [...inputList];
        for (let i = 0; i < 5; i++) {
            newInputList[currentRow][i] = newTemp[i] || "";
        }
        setInputList(newInputList);
    };

    const submitAnswer = () => {
        const newColorList = [...allColorList];
        const answerCharCount = {};

        for (let i = 0; i < 5; i++) {
            if (inputList[currentRow][i] === answerWord[i]) {
                newColorList[currentRow][i] = "correct";
            }
            else {
                answerCharCount[answerWord[i]] = (answerCharCount[answerWord[i]] || 0) + 1;
            }
        }

        for (let i = 0; i < 5; i++) {
            if (newColorList[currentRow][i] !== "correct") {
                if (answerWord.includes(inputList[currentRow][i]) && answerCharCount[inputList[currentRow][i]] > 0) {
                    newColorList[currentRow][i] = "nearby";
                    answerCharCount[inputList[currentRow][i]] += -1;
                }
                else {
                    newColorList[currentRow][i] = "false";
                }
            }
        }

        setAllColorList(newColorList);



        for (let i=0; i<5; i++){
            usedLetters[currentRow][i] = inputList[currentRow][i]
        }




        setTemp("");
        setCurrentRow(currentRow + 1);

        if (currentRow === 4) {
            setReveal(answerWord);
        }
    };

    return (<div className='full_page'>

        <div className='left_panel'>
            <LetterTable isUsed= {usedLetters}></LetterTable>

        </div>

        <div className='center_panel'>

            <div className='upper_text'>
                <h1> Welcome To Wordle</h1>
                <h3>{reveal}</h3>

            </div>

            <WordleBox content={[
                [inputList[0][0], inputList[0][1], inputList[0][2], inputList[0][3], inputList[0][4]],
                [inputList[1][0], inputList[1][1], inputList[1][2], inputList[1][3], inputList[1][4]],
                [inputList[2][0], inputList[2][1], inputList[2][2], inputList[2][3], inputList[2][4]],
                [inputList[3][0], inputList[3][1], inputList[3][2], inputList[3][3], inputList[3][4]],
                [inputList[4][0], inputList[4][1], inputList[4][2], inputList[4][3], inputList[4][4]]
            ]} colorList={allColorList} ></WordleBox>

            <InputBox currentVal={temp} callOnChange={(e) => handleInputOnChange(e)} submitAnswer={() => submitAnswer()}></InputBox>

        </div>

        <div className='right_panel'> </div>


    </div>);
};

export default WordleApp; 
