import React,{useState} from "react";
import axios from "axios";
/*       
 1. 뉴스 검색어를 입력받는 컴포넌트
    - State.js 컴포넌트 참조
    - 통신 : Axios.js 컴포넌트를 참조
*/ 
const AppSearch = (props) =>{
    const[text, setText]=useState('');

    const onChange=(e)=>{
        const {value}= e.target;
        setText(value);        
    };
    //onclick 하면 value의 값을 쿼리를  get으로 통신하여 데이터 받아옴
    const handleClick=()=>{
        let url=`/v2/everything?q=${text}&apiKey=9a658327553e48059fa9060d21d86a03`;
        axios.get(url).then((response)=>{
            props.getData(response.data);
        });
      
    };

    return( 
        <div>
            <input onChange={onChange}></input>
            <button onClick={handleClick}>검색</button>
        </div>
    );
};

export default AppSearch;

