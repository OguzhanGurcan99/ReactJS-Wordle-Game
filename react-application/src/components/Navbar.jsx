import React, { useRef, useEffect } from 'react';
import './Navbar.css';



    const Navbar = (props) => {
        const letterRefs = useRef({});
    
        useEffect(() => {
            props.animatedLetters.forEach((letter) => {
                const div = letterRefs.current[letter];
                if (div) {
                    div.classList.add('fall');
                }
            });
        }, [props.animatedLetters]);


    return (

        <div className='navbar_root'>
            <div className="navbar">
                <div id="A"  ref={(el) => (letterRefs.current[letter] = el)} >{props.view[0]} </div>
                <div id="B">{props.view[1]}</div>
                <div id="C">{props.view[2]}</div>
                <div id="Ç">{props.view[3]}</div>
                <div id="D">{props.view[4]}</div>
                <div id="E" >{props.view[5]}</div>
                <div id="F">{props.view[6]}</div>
                <div id="G">{props.view[7]}</div>
                <div id="Ğ">{props.view[8]}</div>
                <div id="H">{props.view[9]}</div>
                <div id="I">{props.view[10]}</div>
                <div id="İ">{props.view[11]}</div>
                <div id="J">{props.view[12]}</div>
                <div id="K">{props.view[13]}</div>
                <div id="L">{props.view[14]}</div>
                <div id="M">{props.view[15]}</div>
                <div id="N">{props.view[16]}</div>
                <div id="O">{props.view[17]}</div>
                <div id="Ö"> {props.view[18]}</div>
                <div id="P">{props.view[19]}</div>
                <div id="R">{props.view[20]}</div>
                <div id="S">{props.view[21]}</div>
                <div id="Ş">{props.view[22]}</div>
                <div id="T">{props.view[23]}</div>
                <div id="U">{props.view[24]}</div>
                <div id="Ü"> {props.view[25]}</div>
                <div id="V">{props.view[26]}</div>
                <div id="Y">{props.view[27]}</div>
                <div id="Z">{props.view[28]}</div>
            </div>
        </div>

    )
};

export default Navbar;