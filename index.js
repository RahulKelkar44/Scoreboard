let homescore = document.getElementById("homescore");
/*let guestscore = document.getElementById("guestscore");*/
let result=0;
let score;
let resulta;
let btnh1=document.getElementById("btnh1");
let btnh2=document.getElementById("btnh2");
let btnh3=document.getElementById("btnh3");
let btng1=document.getElementById("btng1");
let btng2=document.getElementById("btng2");
let btng3=document.getElementById("btng3");





function myFunction1()
{
    resulta=parseInt(homescore.textContent);
    resulta+=1;
    homescore.textContent=resulta;
}
function myFunction2()
{
    resulta=parseInt(homescore.textContent);
    resulta+=2;
    homescore.textContent=resulta;
}
function myFunction3()
{
    resulta=parseInt(homescore.textContent);
    resulta+=3;
    homescore.textContent=resulta;
}


function myFunction4()
{
    resulta=parseInt(guestscore.textContent);
    resulta+=1;
    guestscore.textContent=resulta;
}
function myFunction5()
{
    resulta=parseInt(guestscore.textContent);
    resulta+=2;
    guestscore.textContent=resulta;
}

function myFunction6()
{
    resulta=parseInt(guestscore.textContent);
    resulta+=3;
    guestscore.textContent=resulta;
}
