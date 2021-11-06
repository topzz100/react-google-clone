import React from 'react'

const Main = () => {

  const [value, setValue] = React.useState("")
  
  const changeLogo = ()=>{
    if(value !== ""){ 
      return <h2 className = "textValue">{value}</h2>
    }else{
      return  <img src="/logo.png" alt=""/>
    }
  }

  return (
    <>
    <main>
    <div class="logo">
      
      {changeLogo()}
    </div>
    <div class="search-box">
      <i class="fas fa-search"></i>
      <input type="text" value = {value} onChange = {(e) => { 
        setValue(e.target.value)
        console.log(value)
      } }/>
      <i class="fas fa-microphone"></i>
    </div>

    <div class="btn">
      <button class="btn-black">Google Search</button>
      <button class="btn-white">I'm Feeling Lucky</button>
    </div>

    <div class="lang-options">
      <p>Google offered in: <span><a href="#"> Hausa</a></span>
        <span><a href="#"> Igbo</a></span>
        <span><a href="#"> Ede Yoruba</a></span>
        <span><a href="#">Nigerian Pidgin</a></span>
        </p>
    </div>
  
  </main>
    </>
  )
}

export default Main
