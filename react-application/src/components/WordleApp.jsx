import { useState } from 'react';
import './WordleApp.css';
import WordleBox from './WordleBox';
import InputBox from './InputBox';

const WordleApp = (props) => {

    const [success, setSuccess] = useState("noSuccess");
    const [message, setMessage] = useState("");
    const [success2, setSuccess2] = useState("");


    const answerWord = "KAVUN";
    const [allColorList, setAllColorList] = useState([["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""]]);
    const [inputList, setInputList] = useState([["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""]]);
    const [currentRow, setCurrentRow] = useState(0);
    const [temp, setTemp] = useState("");

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

        let checkMe = 0;
        for (let i = 0; i < 5; i++) {
            if (newColorList[currentRow][i] === "correct") {
                checkMe += 1;
            }
        }
        if (checkMe === 5) {
            setSuccess("congratulations");
            setMessage("TEBRİKLER")
            setSuccess2("congra_2");
        }

        setTemp("");
        setCurrentRow(currentRow + 1);
    };

    return (<div className='full_page'>
        <WordleBox content={[
            [inputList[0][0], inputList[0][1], inputList[0][2], inputList[0][3], inputList[0][4]],
            [inputList[1][0], inputList[1][1], inputList[1][2], inputList[1][3], inputList[1][4]],
            [inputList[2][0], inputList[2][1], inputList[2][2], inputList[2][3], inputList[2][4]],
            [inputList[3][0], inputList[3][1], inputList[3][2], inputList[3][3], inputList[3][4]],
            [inputList[4][0], inputList[4][1], inputList[4][2], inputList[4][3], inputList[4][4]]
        ]} colorList={allColorList} ></WordleBox>

        <InputBox currentVal={temp} callOnChange={(e) => handleInputOnChange(e)} submitAnswer={() => submitAnswer()}></InputBox>


        




    </div>);

};

export default WordleApp; 
