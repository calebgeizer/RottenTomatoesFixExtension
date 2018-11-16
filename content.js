
function addStyle(code) {
	var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = code;
	document.head.appendChild(style);
}


function editElement(){
    var x = document.getElementsByClassName("meter-value superPageFontColor");
    try{
        if(x[1] !== undefined || x[0].innerText.length < 5){
            x[0].innerHTML = x[0].innerHTML + " liked it";
            x[0].setAttribute("style","font-weight:normal;");
        }
    }
    catch(err){
        //error
    }

    var x2 = document.getElementsByClassName("meter-value superPageFontColor");
    try{
        if(x2[1] !== undefined || x2[1].innerText.length < 5){
            x2[1].innerHTML = x2[1].innerHTML + " liked it";
            x2[1].setAttribute("style","font-weight:normal;");
        }
    }
    catch(err){
        //error
    }

    var y = document.getElementsByClassName("meter-value");
    var y_want;
    var y_val;
    if(y[1] === undefined){
        y_want = y[0].innerText.search("want to see");
        y_val = 0;
    }else if(y[2] === undefined){
        y_want = y[1].innerText.search("want to see");
        y_val = 1;
    }else{
        y_want = y[2].innerText.search("want to see");
        y_val = 2;
    }

    if(y_want > 0){
        y[y_val].innerHTML = y[y_val].innerHTML + " want to see";
        y[y_val].setAttribute("style","font-weight:normal;margin-right:10px;");
        y = y[y_val];
    }else{
        y[y_val].innerHTML = y[y_val].innerHTML + " liked it";
        y[y_val].setAttribute("style","font-weight:normal;margin-right:10px;");
        y = y[y_val];
    }
    var z = document.getElementsByClassName("smaller bold hidden-xs superPageFontColor");
    z[0].remove();
    var a = document.getElementsByClassName("media-body");
    a[0].setAttribute("style","line-height:normal;");


    //GRAB TEXT FROM CRITICS
    var b = document.getElementById("scoreStats");
    console.log(b);
    console.log("THIS IS scoreStats");
    var text = b.innerText;
    var n = text.search(":");
    n = n+1;
    var m = text.search("Reviews Counted:");
    if(m < 0){
        m = text.search("Season Reviews:");
    }
    m = m-n;
    text = text.substr(n,m);
    //MATH
    var o = text.search("/");
    var len = text.length;
    var avgX = text.substr(0,o);
    var avgY = text.substr(o+1,len);
    var avg = (avgX/avgY)*100;
    avg = Math.round(avg * 100) / 100;
    var x = document.getElementsByClassName('meter-value superPageFontColor');
    if(isNaN(avg)){
        x[0].innerHTML = "<span style='font-size:22px;'>" + "No Rating </span> <br>" + x[0].innerHTML;
    }else{
        x[0].innerHTML = "<span style='font-size:22px;'>" + avg + "% Rating </span> <br>" + x[0].innerHTML;
    }

    //GRAB TEXT FROM TOP CRITICS
	var b2 = document.querySelectorAll("[id='scoreStats']");
    if (b2.length > 1) {
    	var text = b2[1].innerText;
    	var n = text.search(":");
    	n = n+1;
    	var m = text.search("Reviews Counted:");
    	if(m < 0){
    	    m = text.search("Season Reviews:");
    	}
    	m = m-n;
    	text = text.substr(n,m);
    	//MATH
    	var o = text.search("/");
    	var len = text.length;
    	var avgX = text.substr(0,o);
    	var avgY = text.substr(o+1,len);
    	var avg = (avgX/avgY)*100;
    	avg = Math.round(avg * 100) / 100;
    	var x = document.getElementsByClassName('meter-value superPageFontColor');
    	if(isNaN(avg)){
    	    x[1].innerHTML = "<span style='font-size:22px;'>" + "No Rating </span> <br>" + x[1].innerHTML;
    	}else{
    	    x[1].innerHTML = "<span style='font-size:22px;'>" + avg + "% Rating </span> <br>" + x[1].innerHTML;
    	}
    }
    


    //GRAB TEXT FROM AUDIENCE
    b = document.getElementsByClassName("audience-info hidden-xs superPageFontColor");
    b = b[0];
    text = b.innerText;
    n = text.search(":");
    n = n+1;
    m = text.search("User Ratings:");
    m = m-n;
    text = text.substr(n,m);
    //MATH
    o = text.search("/");
    len = text.length;
    avgX = text.substr(0,o);
    avgY = text.substr(o+1,len);
    avg = (avgX/avgY)*100;
    avg = Math.round(avg*100)/100;
    console.log(y);
    console.log(avg);
    console.log("THIS IS THE RATING");
    if(isNaN(avg)){
       y.innerHTML = "<span style='font-size:22px;'>" + "No Rating </span> <br>" + y.innerHTML;
    }else{
        y.innerHTML = "<span style='font-size:22px;'>" + avg + "% Rating </span> <br>" + y.innerHTML;
    }
}

addStyle(".meter-value{font-size:14px!important;}.icon.big{margin-left:50px;margin-right:50px!important;}.score_panel .meter, .score_panel .wts{text-align:center;font-weight:normal;}.rating_textbox .rating_textbox-textarea{text-transform: none;}");
editElement();