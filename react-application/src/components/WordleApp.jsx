import { useState } from 'react';
import './WordleApp.css';
import WordleBox from './WordleBox';
import InputBox from './InputBox';


const WordleApp = (props) => {

    const answerWord = "KAVUN";
    const [allColorList, setAllColorList] = useState([["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""]]);
    const [inputList, setInputList] = useState([["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""]]);
    const [currentRow, setCurrentRow] = useState(0);

    const [temp, setTemp] = useState("");

    const handleInputOnChange = (e) => {
        setTemp(e.target.value);
        
        //todo update input list with (temp)
    }

    for (let i=0; i<5; i++){
        inputList[currentRow][i] = temp[i];
    }

    


    const submitAnswer = () => {
        console.log(currentRow);
        for (let i=0; i<5; i++){
            if(inputList[currentRow][i] === answerWord[i]){
                allColorList[currentRow][i] = "correct";
            }else{
                allColorList[currentRow][i] = "false";
            }
        }

        setTemp("");
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

        <InputBox currentVal={temp} callOnChange={(e) => handleInputOnChange(e)} submitAnswer={() => submitAnswer()}></InputBox>

    </div>);


};

export default WordleApp; 
