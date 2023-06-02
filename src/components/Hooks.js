import React,{ useState} from 'react'
export default function Hooks() {

  let newTime = new Date().toLocaleTimeString();
const [ctime,setCtime] = useState(newTime);

const updateTime= () => {
  let newCTime = new Date().toLocaleTimeString();
 setCtime(newCTime);
}
const[count,setCount] =useState(0);
 
const IncNum = () =>{
  setCount(count+1); 
  console.log('1 Count '+ (count+1));
}

  return (
    <>
    <button onClick={updateTime}><h1 style={{color:'white',backgroundColor:'black'}}>{ctime}</h1></button><br/>
    <button onClick={IncNum} style={{backgroundColor:'black'}}><h1 style={{color:'greenyellow'}}>{count}</h1></button>
    </>
  )
}

