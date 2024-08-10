import React, { useState, useEffect } from 'react';
import './InputBox.css';

const InputBox = (props) => {
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Enter') {
                document.getElementById('enterButton').click();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div
            className='inputBox'
            id="parentBox"
            style={{ backgroundColor: isHovered ? 'gray' : 'white' }}
        >
            <input
                type='text'
                value={props.currentVal}
                onChange={(e) => props.callOnChange(e)}
                placeholder='Kelime giriniz...'
            />
            <button
                id="enterButton"
                onClick={() => props.submitAnswer()}
                onMouseOver={() => setIsHovered(true)}
                onMouseOut={() => setIsHovered(false)}
            >
                ENTER
            </button>
        </div>
    );
}

export default InputBox;
