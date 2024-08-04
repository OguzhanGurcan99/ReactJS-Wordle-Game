import './WordleBox.css';

const WordleBox = (props) => {
    return <div className="main_box">
        <li>
            <div>{props.content[0][0]}</div>
            <div>{props.content[0][1]}</div>
            <div>{props.content[0][2]}</div>
            <div>{props.content[0][3]}</div>
            <div>{props.content[0][4]}</div>
        </li>
        <li>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </li>
        <li>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </li>
        <li>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </li>
        <li>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </li>


    </div>;
};
export default WordleBox;