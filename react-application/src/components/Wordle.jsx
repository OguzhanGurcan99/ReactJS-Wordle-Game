import React from 'react';
import './Wordle.css';


class Wordle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputWord: "",
            answerWord: "PAPER"
            
        };

    }

    handleInputOnChange= (e) =>  {
        this.setState({
            inputWord: e.target.value
        });
    }

    saveUserInput= () =>  {
        this.setState({
            inputWord: this.state.inputWord
            
        });
    }


    render() {
        return <div className='main_board'>
            
            <div className="wordle_box">
                <div className='first_row'>
                    <li>
                        <button className='correct'>{this.state.inputWord[0]}</button>
                        <button>{this.state.inputWord[1]}</button>
                        <button>{this.state.inputWord[2]}</button>
                        <button>{this.state.inputWord[3]}</button>
                        <button>{this.state.inputWord[4]}</button>
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
                <input type='text' value={this.state.inputWord} onChange={(e) => this.handleInputOnChange(e)} placeholder='Kelime giriniz...' />
                <button onClick={() => this.saveUserInput()}> ENTER </button>

            </div>
        </div>

    }
}

export default Wordle;
