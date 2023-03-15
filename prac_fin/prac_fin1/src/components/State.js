import React,{useState} from 'react';


const State=()=>{
    const [text,setText]=useState('');

    const onChange = (e) =>{
        const {value}=e.target;
        setText(value);
    };
    const onDelete=(e)=>{
        setText('');
    };


    return (
        <div>
            <p>{text}</p>
            <input onChange={onChange} value={text}></input>
            <button onClick={onDelete}>초기화</button>
        </div>
    );

};

export default State;