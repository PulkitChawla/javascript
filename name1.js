
//name.js
//=========

//var p1name="player 1",p2name="player 2";  
var playerobj={"player1":"player 1","player2":"player 2"};
var curr="X";
var array=[-1,-1,-1,-1,-1,-1,-1,-1,-1];
var counter=0;
var winner="";
window.addEventListener('load',function(){
    
    //console.log("now html page is loaded");
        getname();
        show();
        tictactoe();
       
})

function getname(){
    //var input=document.getElementById('name');
    document.getElementById('p1name').addEventListener('change',(event)=>{
      // p1name=event.target.value;
      // console.log(p1name);
      playerobj[event.target.name]=event.target.value;
    })
    document.getElementById('p2name').addEventListener('change',(event)=>{
       // p2name=event.target.value;
       // console.log(p2name);
       playerobj[event.target.name]=event.target.value;
     })
}

function show(){
    var showbutton=document.getElementById('show');

    showbutton.addEventListener('click',function(){
		console.log(playerobj);
        var player1disp=document.getElementById('display1');
        var player2disp=document.getElementById('display2');
            player1disp.innerText=playerobj.player1;
            player2disp.innerText=playerobj.player2;
    
    })
}
function isitwincond(curr){
//either return a true or a false
//var flag=false;
//horizontal cases
var a=0;
//loop is representing 3 rows
for(let i=0;i<3;i++){
    if(array[a]===curr&& array[a+1]===curr && array[a+2]===curr)
    {
        return true;
    }
    a=a+3;
}
//represent columns 036   147  258
a=0
for(let i=0;i<3;i++){
    if(array[a]===curr&& array[a+3]===curr && array[a+6]===curr)
    {
        return true;
    }
    a=a+1;
}
//diagnol  0,4,8   2,4,6
    if(array[0]===curr && array[4]===curr&& array[8]===curr)
    return true;
    else if(array[2]===curr && array[4]===curr&& array[6]===curr)
    return true;

return false;
}
function tictactoe(){
    var tictactoe=document.getElementsByClassName('tictactoe');
    //console.log(tictactoe[0]);
    for(var i=0;i<9;i++){
        tictactoe[i].addEventListener('click',(event)=>{
           // console.log("value of i ::",i);
            var val=event.target.innerText;
            if(val==='-'){
               console.log(counter);
                if(counter<=9 && winner===""){
                event.target.innerText=curr;
                counter=counter+1;
                array[event.target.id]=curr;
                console.log(array);
                }
                if(counter>=5 && counter<=9){
                    
                    var flag=isitwincond(curr);
                    if(curr==='X' && flag===true)
                    {
                        winner=playerobj.p1name;
                        alert(`${winner} has won the game`);
                        counter=10;
                    }
                    else if(curr==='0' && flag===true)
                    {
                        winner=playerobj.p2name;
                        alert(`${winner} has won the game`)
                        counter=10;
                    }
                    else if(flag ===false){

                    }
                }
                else if(counter>9 && winner!==''){
            
                    alert(`${winner} has won the game`);
             }

                 if(counter>9){
            
                       alert("game has been drawn")
                }
                if(counter<=9 && winner===""){
                    if(curr==='X')
                    curr='0';
                    else if(curr==='0')
                    curr='X';
                }
            }
            else{

            }
        });
    }
}