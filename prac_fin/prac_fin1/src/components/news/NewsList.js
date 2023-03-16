import React,{useState} from "react"

const NewsList=({news})=>{
    console.log(news);

    return(
        <div>
            {news.map((article)=>{
                return(
                    <div key={article.title}>
                        <>
                         <p>{article.author}</p>
                         <p>{article.title}</p>
                         <p>{article.description}</p>
                        </>
                    </div>
                );
             })}
        </div>
    );

};

export default NewsList;