import React, { useEffect, useState } from 'react'
import Squares from './Squares';


const winningPossibilities=[
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [6,4,2],
  [3,4,5],
  [6,7,8]
]
for(let a of winningPossibilities)console.log(a);


const Box = () => {

  const [isGameOver , setIsGameOver]=useState(false);
  const [squareText , setSquareText]=useState(Array(9).fill(""));
  const [winner , setWinner]=useState("Yet to be decided");
  const [playerX , setPlayerX]=useState(true);


  const resetTheGame=()=>{
    setSquareText((prevState)=>{
      const newText=[...squareText]

      newText.fill("");
      setIsGameOver(false);
      setPlayerX(true);
      setWinner("Yet to be decided")
      return newText;
    })
  }

  const handleToggle= (index)=>{
      
    if(!isGameOver){
       setSquareText((prevState)=>{
        const newText=[...squareText]
        if(newText[index]===""){
          newText[index]=playerX ? "X" : "O";
          
        
        setPlayerX(!playerX);
        }
       checkWinner(newText);
        return newText;
         
       })
       
    }
  }

      

 const checkWinner=(newText)=>{
   
  for(let i=0;i< winningPossibilities.length;i++){
   
     const[x,y,z]=winningPossibilities[i];
     if(newText[x]!=="" && newText[x]===newText[y] && newText[y]===newText[z]){
      setIsGameOver(true);
      setWinner(newText[x]);
     }


  }






 }




 const renderItems = () => {
        
      return Array.from({ length: 9 }, (_, index) => (
        <Squares onClick={()=>handleToggle(index)}
        key={index}
        ind={index}
        squareText={squareText[index]}
         />
      ));
        
      };
    





  return (
    <>
    <h1 className='text-xl ml-10 mt-6 font-bold'>{`Winner of this match is: ${winner}`}</h1>
    <p className='p-6 ml-2 mt-4 text-lg font-medium'>{playerX  ? `Player X turn` : `Player O turn`}</p>
         
    <div className='w-[45%]  h-2/4 border border-black flex  flex-row flex-wrap absolute mx-40 my-40 '>
        {renderItems()}
        <button onClick={resetTheGame}
        className='mt-10 ml-20 border border-green-600 p-5'>Reset</button>
    </div>
    </>
    
  )
        }

export default Box ;