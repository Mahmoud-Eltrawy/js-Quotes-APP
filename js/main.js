var Quote={};
var arr=[];
var  Quotes_one={
    QuoteText:"“A woman is like a tea bag; you never know how strong it is until it's in hot water.” ",
    writerName:" ― Eleanor Roosevelt ",

}
arr.push(Quotes_one);


var quotes_two={
    QuoteText:"“The man who does not read has no advantage over the man who cannot read.”",
    writerName:" ― Mark Twain "
}
arr.push(quotes_two);


var quotes_three={
    QuoteText:" “If you judge people, you have no time to love them.” ",
    writerName:" ― Mother Teresa "
}

arr.push(quotes_three);



var quotes_four={
    QuoteText:"“Sometimes the questions are complicated and the answers are simple.”",
    writerName:" ― Dr. Seuss "

}

arr.push(quotes_four);


var quotes_five={
    QuoteText:"“Folks are usually about as happy as they make their minds up to be.” ",
    writerName:" ― Abraham Lincoln "
}

arr.push(quotes_five);




function addQuote(){
    Quote={
        QuoteText:window.prompt("enter your quote"),
        writerName:window.prompt("enter writer name"),

    }
    arr.push(Quote);
}
var prevQuote;
function displayQuotes(){
    
    var PresentQuote=Math.floor(Math.random()*arr.length);
    
    if(PresentQuote==prevQuote&&PresentQuote!=0){
        PresentQuote--;
        prevQuote= PresentQuote;
        document.getElementById("Quote").innerHTML=arr[PresentQuote].QuoteText;
        document.getElementById("Quote-name").innerHTML=arr[PresentQuote]. writerName;


    }
    else if(PresentQuote==prevQuote&&PresentQuote==0){
        PresentQuote++;
        prevQuote= PresentQuote;
        document.getElementById("Quote").innerHTML=arr[PresentQuote].QuoteText;
        document.getElementById("Quote-name").innerHTML=arr[PresentQuote]. writerName;

    }
    else{
        prevQuote= PresentQuote;
        document.getElementById("Quote").innerHTML=arr[PresentQuote].QuoteText;
        document.getElementById("Quote-name").innerHTML=arr[PresentQuote]. writerName;
    }
    



}
