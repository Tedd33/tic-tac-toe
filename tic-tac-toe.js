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
              let winnerX1=winningCombo[i][0].toString()
              let winnerX2=winningCombo[i][1].toString()
              let winnerX3=winningCombo[i][2].toString()
             
              if(PlayerX.includes(winnerX1) && PlayerX.includes(winnerX2) && PlayerX.includes(winnerX3)){
                document.getElementById(winnerX1).style.color='green'
                document.getElementById(winnerX2).style.color='green'
                document.getElementById(winnerX3).style.color='green'
                                              }
                                            
              text.innerHTML='Player X won'
              displaywinner.classList.add('show-winner')
        
            }
          }
        }
          
        if ( PlayerO.some(el=>el==winningCombo[i][0]) ) {
        if (PlayerO.some(el=>el==winningCombo[i][1]) ) {
            if (PlayerO.some(el=>el==winningCombo[i][2]) ) {
              let winnerO1=winningCombo[i][0].toString()
              let winnerO2=winningCombo[i][1].toString()
              let winnerO3=winningCombo[i][2].toString()

        
              if(PlayerO.includes(winnerO1) && PlayerO.includes(winnerO2) && PlayerO.includes(winnerO3)){
                document.getElementById(winnerO1).style.color='green'
                document.getElementById(winnerO2).style.color='green'
                document.getElementById(winnerO3).style.color='green'
                                              }
              text.innerHTML='Player O won'
  displaywinner.classList.add('show-winner')
  
            }
  
       }
      }
    }
  }

