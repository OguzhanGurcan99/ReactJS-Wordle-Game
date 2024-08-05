import './WordleBox.css';

const WordleBox = (props) => {
    return <div className="main_box">
        <li>
            <div className={props.colorList[0][0]}>{props.content[0][0]}</div>
            <div className={props.colorList[0][1]}>{props.content[0][1]}</div>
            <div className={props.colorList[0][2]}>{props.content[0][2]}</div>
            <div className={props.colorList[0][3]}>{props.content[0][3]}</div>
            <div className={props.colorList[0][4]}>{props.content[0][4]}</div>
        </li>
        <li>
            <div className={props.colorList[1][0]}>{props.content[1][0]}</div>
            <div className={props.colorList[1][1]}>{props.content[1][1]}</div>
            <div className={props.colorList[1][2]}>{props.content[1][2]}</div>
            <div className={props.colorList[1][3]}>{props.content[1][3]}</div>
            <div className={props.colorList[1][4]}>{props.content[1][4]}</div>
        </li>
        <li>
            <div>{props.content[2][0]}</div>
            <div>{props.content[2][1]}</div>
            <div>{props.content[2][2]}</div>
            <div>{props.content[2][3]}</div>
            <div>{props.content[2][4]}</div>
        </li>
        <li>
            <div>{props.content[3][0]}</div>
            <div>{props.content[3][1]}</div>
            <div>{props.content[3][2]}</div>
            <div>{props.content[3][3]}</div>
            <div>{props.content[3][4]}</div>
        </li>
        <li>
            <div>{props.content[4][0]}</div>
            <div>{props.content[4][1]}</div>
            <div>{props.content[4][2]}</div>
            <div>{props.content[4][3]}</div>
            <div>{props.content[4][4]}</div>
        </li>


    </div>;
};
export default WordleBox;