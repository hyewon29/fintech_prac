import React,{useState} from 'react';

const AppList=(props)=>{
    console.log(props.sendData.articles);
    const [articles, setArticles]=  useState(props.sendData.articles);
    const change=()=>{
      
    };
    return(
     <div>

        {
          articles && articles.map((article)=>{
            return(
                <>
                 <p>{article.author}</p>
                 <p>{article.title}</p>
                 <p>{article.description}</p>
                </>

            );
          })
        }
     </div>
    )
}

export default AppList;

