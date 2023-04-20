import { useState, useEffect } from 'react';
import './App.css'


function App() {
  return (
    <div className="App">
      <QuoteBox />
      <Acknowledgement />
     
    </div>
  );
}
function QuoteBox(){
    const [fullQuote,setFullQuote] =useState({quote:'',author:'',qURL:''})
    const [quoteKey,setQuoteKey]=useState(1);
    console.log(quoteKey);


    
    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key':'bb7f51e52emshca3bf77ccc80d6ep10b1b7jsn8b751f6ad383' ,
                'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
            }
        };
        
        fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
            .then(response => response.json())
            .then(jsonResponse =>{
                console.log(jsonResponse);
                setFullQuote({
                    quote:jsonResponse.content,
                    author:jsonResponse.originator.name,
                    qURL:jsonResponse.originator.url
                })

                // setQuote(jsonResponse.content);
                // setAuthor(jsonResponse.originator.name);
                // setQURL(jsonResponse.originator.url);
            } )
            .catch(err => console.warn(err));
            
            // .catch(err => console.error(err))

    }
        
        ,[quoteKey])



    return(
        <div id="quote-box" key={quoteKey}>
        <Quote Quote={fullQuote.quote}/>
        <Author Author={fullQuote.author} url={fullQuote.qURL}/>
     
        <NewQuote onClick={()=>{setQuoteKey(quoteKey+1);console.log(quoteKey)}} />

       
<Socials />
           
        </div>
    )
}
function Socials(){
    return(
        <div>
          <a className="socialLink" id="tweet-quote" href="http://www.twitter.com/intent/tweet"><i class="fab fa-twitter"></i>
             {/*<FontAwesomeIcon icon={faTwitter} />*/} 
          </a>

          
        </div>
    )
}
function Quote(props){
    return(
        <div id="text">
            <h2>{props.Quote}</h2>
        </div>
    )
}
function Author(props){
    return(
        <div id="author">
            <a href={props.url}>
                <h3>   -{props.Author}</h3>
            </a>
            </div>
         
    )
}
function Acknowledgement(props){
    return(
        <div id="Acknowledgement">Quote Machine Powered by <a href="https://quotepark.com">Quotes Park</a></div>
    )
}
function NewQuote(props){
    return(
        <div id="new-quote">
            
            <button onClick={props.onClick}  >New Quote {/*<FontAwesomeIcon icon={faArrowRotateRight} /> */} 
        </button>
        </div>
    )
}

export default App;
