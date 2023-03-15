import React,{useState} from "react";
import AppHeader from "../components/common/AppHeader";
import AppSearch from "../components/common/AppSearch";
import AppList from "../components/common/AppList";


/* homework 
        1. 뉴스 검색어를 입력받는 컴포넌트
         - State.js 컴포넌트 참조
         - 통신 : Axios.js 컴포넌트를 참조
        2. 해당 검색 결과를 출력하는 컴포넌트
         - List 컴포넌트를 참조
*/

const NewsSearch = () => {
  const [news,setNews]=useState('');

  return (
    <div>
      <AppHeader title={"뉴스 검색"}></AppHeader>
      <AppSearch getData={setNews}></AppSearch>
      <AppList sendData={news}></AppList>
    </div>
  );
};

export default NewsSearch;
