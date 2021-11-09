import React from 'react'

const Main = () => {

  const [value, setValue] = React.useState("")
  
  const changeLogo = ()=>{
    if(value !== ""){ 
      return <div  className = "textValue"><h2>{value}</h2></div>
    }else{
      return  <img src="/logo.png" alt=""/>
    }
  }

  return (
    <>
    <main>
    <div className="logo">
      
      {changeLogo()}
    </div>
    <div className="search-box">
      <i className="fas fa-search"></i>
      <input type="text" value = {value} onChange = {(e) => { 
        setValue(e.target.value)
        console.log(value)
      } }/>
      <i className="fas fa-microphone"></i>
    </div>

    <div className="btn">
      <button className="btn-black">Google Search</button>
      <button className="btn-white">I'm Feeling Lucky</button>
    </div>

    <div className="lang-options">
      <p className = "off">Google offered in:</p>
      <p> <span><a href="#"> Hausa</a></span>
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
