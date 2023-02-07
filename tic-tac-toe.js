var playO="O";
var curplayer=""
var winningCombo = [
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 5, 9],
  [3, 5, 7]
];


let PlayerX=[]
let PlayerO=[]
let cells=document.querySelectorAll('.cell');
let displaywinner=document.querySelector('.winner');
let text=document.querySelector('.text')
let restartbtn=document.querySelector('.btn')

cells.forEach(cell=>cell.addEventListener('click',(e)=>{
  const ids=e.target.id
 
  
  if(e.target.innerHTML===""){
     curplayer=curplayer==="X"?playO:"X" 
    e.target.innerHTML=curplayer 
  }else{
    return 
  }
    if(curplayer=="X"){
     PlayerX.push(ids)
     console.log(PlayerX) 
      text.innerHTML="Its O's turn"
     
     }  
     else if(curplayer=="O"){
      PlayerO.push(ids)
      console.log(PlayerO)
      text.innerHTML="Its X's turn"
      
     }
       restartbtn.addEventListener('click',()=>{
  PlayerX.length=0
  PlayerO.length=0
  cell.innerHTML=""
  cells.forEach(id=>{id.style.color='black'})
 
  displaywinner.classList.remove("show-winner")
 })
     chekwin() 
  
  }
))

 function chekwin(){
  for(var i = 0; i < winningCombo.length; i++) {
    if (PlayerX.some(el=>el==winningCombo[i][0]) ) {
        if (PlayerX.some(el=>el==winningCombo[i][1]) ) {
            if ( PlayerX.some(el=>el==winningCombo[i][2]) ) {
              let sty1=winningCombo[i][0].toString()
              let sty2=winningCombo[i][1].toString()
              let sty3=winningCombo[i][2].toString()
             
              if(PlayerX.includes(sty1) && PlayerX.includes(sty2) && PlayerX.includes(sty3)){
                document.getElementById(sty1).style.color='green'
                document.getElementById(sty2).style.color='green'
                document.getElementById(sty3).style.color='green'
                                              }
                                            
              text.innerHTML='Player X won'
              displaywinner.classList.add('show-winner')
        
            }
          }
        }
          
        if ( PlayerO.some(el=>el==winningCombo[i][0]) ) {
        if (PlayerO.some(el=>el==winningCombo[i][1]) ) {
            if (PlayerO.some(el=>el==winningCombo[i][2]) ) {
              let style1=winningCombo[i][0].toString()
              let style2=winningCombo[i][1].toString()
              let style3=winningCombo[i][2].toString()

        
              if(PlayerO.includes(style1) && PlayerO.includes(style2) && PlayerO.includes(style3)){
                document.getElementById(style1).style.color='green'
                document.getElementById(style2).style.color='green'
                document.getElementById(style3).style.color='green'
                                              }
              text.innerHTML='Player O won'
  displaywinner.classList.add('show-winner')
  
            }
  
       }
      }
    }
  }


   
              /*else if(PlayerX.includes("1") && PlayerX.includes("4") && PlayerX.includes("7")){
     document.getElementById("1").style.color='green'
     document.getElementById("4").style.color='green'
     document.getElementById("7").style.color='green'
                                    }
   if(PlayerX.includes("2") && PlayerX.includes("5") && PlayerX.includes("8")){
      document.getElementById("2").style.color='green'
      document.getElementById("5").style.color='green'
      document.getElementById("8").style.color='green'
                                    }
 if(PlayerX.includes("4") && PlayerX.includes("5") && PlayerX.includes("6")){
     document.getElementById("4").style.color='green'
     document.getElementById("5").style.color='green'
   document.getElementById("6").style.color='green'
 }
   if(PlayerX.includes("7") && PlayerX.includes("8") && PlayerX.includes("9")){
    document.getElementById("7").style.color='green'
    document.getElementById("8").style.color='green'
  document.getElementById("9").style.color='green' 
 }
 if(PlayerX.includes("3") && PlayerX.includes("6") && PlayerX.includes("9")){
  document.getElementById("3").style.color='green'
  document.getElementById("6").style.color='green'
document.getElementById("9").style.color='green' 
}                                                */