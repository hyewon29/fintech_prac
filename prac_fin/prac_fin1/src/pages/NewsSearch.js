import React,{useState} from "react";
import AppHeader from "../components/common/AppHeader";
import SearchInput from "../components/news/SearchInput";
import NewsList from "../components/news/NewsList";
import axios from "axios";

/* homework 
        1. 뉴스 검색어를 입력받는 컴포넌트
         - State.js 컴포넌트 참조
         - 통신 : Axios.js 컴포넌트를 참조
        2. 해당 검색 결과를 출력하는 컴포넌트
         - List 컴포넌트를 참조
*/

const NewsSearch = () => {
  const [searchText,setSearchText]=useState('');
  const [news, setNews]=useState([]);

  const handleChange=(e)=>{
    const {value}=e.target;
    setSearchText(value);
  };
  
  const handleClick=(e)=>{
    let url=`https://newsapi.org/v2/everything?q=${searchText}&apiKey=9a658327553e48059fa9060d21d86a03`;
    axios.get(url).then((response)=>{
      setNews(response.data.articles);
      console.log(news);
    });

  };

  

  return (
    <div>
      <AppHeader title={"뉴스 검색"}></AppHeader>
      <SearchInput handleClick={handleClick} handleChange={handleChange}></SearchInput>
      <NewsList news={news}></NewsList>
    </div>
  );
};

export default NewsSearch;
