import React, {useState}from 'react'

export default function User() {
    
    const [name,setName] = useState('');
    const [contect,setContect] = useState('');
    const [email,setEmail] = useState('');
    const [age,setAge] = useState('');
    const [formData, setFormData] = useState('');
    
    const onSubmit = (event)=>{
        event.preventDefault(); 
        const data ={
            name:name ,
            contect:contect,
            email:email,
            age:age
        };   
        setFormData(data);
        setName('');
        setContect('');
        setEmail('');
        setAge('');

    }
     return (
    <div>
    <form onSubmit = {onSubmit}>
        <label>  Name : {name}<input type='Text'value={name}
         onChange={(event )=>setName(event.target.value)}/></label><br/><br/>
       <label> Contect:{contect}<input type='int'value={contect} onChange={(event)=>setContect(event.target.value)}/></label><br/><br/>
        <label>Email:{email}<input type='Text'value={email} onChange={(event )=>setEmail(event.target.value)}/></label><br/><br/>
        <label>Age:{age}<input type='int'value={age} onChange={(event )=>setAge(event.target.value)}/></label><br/><br/>
        <button type="submit">Submit</button><br/><br/>
    </form>
    {formData && (
    <div>
          <h2>Submitted Data</h2>
          <p>Name: {formData.name}</p>
          <p>contect: {formData.contect}</p>
          <p>Email: {formData.email}</p>
          <p>Age: {formData.age}</p>
          
        </div>)}

    </div>
  
  )
}
