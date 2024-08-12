import { useState } from 'react';
import './WordleApp.css';
import WordleBox from './WordleBox';
import InputBox from './InputBox';

import Navbar from './Navbar';

const WordleApp = (props) => {

    const [animatedLetters, setAnimatedLetters] = useState([]);
    const [updatedLetters, setUpdatedLetters] = useState(["A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z"])
    let letters = [...updatedLetters];




    const answerWord = props.random;
    const [allColorList, setAllColorList] = useState([["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""]]);
    const [inputList, setInputList] = useState([["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""]]);
    const [currentRow, setCurrentRow] = useState(0);
    const [temp, setTemp] = useState("");

    const [reveal, setReveal] = useState("");



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

        const animatedLettersList = [];


        // 1. Doğru harfleri işaretle
        for (let i = 0; i < 5; i++) {
            if (inputList[currentRow][i] === answerWord[i]) {
                newColorList[currentRow][i] = "correct";
            }
            else {
                answerCharCount[answerWord[i]] = (answerCharCount[answerWord[i]] || 0) + 1;
            }


            let empty_let_index = letters.indexOf(inputList[currentRow][i]);
            if (empty_let_index === -1) {
                continue;
            }
            else {
                animatedLettersList.push(letters[empty_let_index]);
                letters[empty_let_index] = "";
            }


            setUpdatedLetters(letters);
            setAnimatedLetters(animatedLettersList);





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


        setTemp("");
        setCurrentRow(currentRow + 1);

        if (currentRow === 4) {
            setReveal(answerWord);
        }
    };




    return (<div className='full_page'>

        <Navbar view={updatedLetters}  animatedLetters= {animatedLetters}> </Navbar>

        <div className='mainbar'>

            <div className='left_panel'>
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
        </div>

    </div>);
};

export default WordleApp; 
