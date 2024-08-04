import { useState } from "react";

const Counter = () => {
    const [value, setValue] = useState(0);

    const increase = () => {
        setValue(value + 1);
    };

    const decrease = () => {
        setValue(value - 1);
    };

    return (<div >
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
        <div>{value}</div>
    </div>);
};

export default Counter;