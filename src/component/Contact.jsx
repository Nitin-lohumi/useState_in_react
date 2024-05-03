import { useState } from "react";

function Contact(){
  const [name,setName]=useState("name");
  const [email,setEmail] = useState("email");
  const [text,setText] = useState("text");
  const onSubmit =(e) =>{
    e.preventDefault();
     setName(e.target[3].value);
     setEmail(e.target[4].value);
     setText(e.target[5].value);
  }
  return (
    <>
    <div className="box1">
     <h1>
        contact us
     </h1>
     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, assumenda sequi velit officia nulla cum excepturi quos beatae! Consequatur sunt harum nisi quasi libero aliquid! Vitae impedit neque fugit accusantium? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta asperiores quidem obcaecati voluptatum saepe similique aperiam voluptates perspiciatis exercitationem vel, dolor aut eum consequatur, illo quibusdam doloribus nesciunt recusandae expedita!</p>
     <form onSubmit={onSubmit} className="form">
      <div className="wrap">
     <div className="calls">
        <button>via support chat</button>
        <button>via calls</button>
     </div>
     <button>
      via Email
     </button>
     <input type="text" placeholder="Enter name" />
     <input type="text"  placeholder="Enter email"/>
     <textarea name="text" id="text" rows={3} cols={10}/>
     <input type="submit" value="submit" />
     <div>
       <h3>{"name : "+name}</h3>
       <h3>{"email : " +email}</h3>
       <h3>{"text  : " +text}</h3>
     </div>
     </div>
    <div className="image">
      <img src="data:image/png;base64,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" alt="" />
    </div>
    </form>
    </div>
    </>
  )
}
export  default  Contact;