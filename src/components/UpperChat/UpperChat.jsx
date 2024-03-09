import React from 'react';
import styles from './UpperChat.module.css';
// import SenderSection from '../SenderSection/SenderSection';
import logobot from '../../assesits/logobot.webp'
import logouser from '../../assesits/userlogo.png'
import { useState } from 'react';
import {getResponse} from '../../openai.js';
export default function UpperChat() {
 
  const [massage, setMassage] = useState('');
  const [response, setResponse] = useState([
    {
      messagee: 'Hi! I\'m your personal AI assistant. I can help you with a variety of topics. Just ask me anything!',
      isBot: true
    }
  ]);

  const handleClick = async () => {
    const  inputTxt=massage 
    setMassage('')
    setResponse((prev) => [...prev, { messagee: inputTxt, isBot: false }])
  const response = await getResponse(massage);
  setResponse((prev) => [...prev, { messagee: response, isBot: true }])
  }

  const handleClear = () => {
   let x= prompt("Are you sure you want to clear the chat?")
   if (x == 'yes'){
    setResponse([
      {
        messagee: 'Hi! I\'m your personal AI assistant. I can help you with a variety of topics. Just ask me anything!',
        isBot: true
      }
    ])
    setMassage('')
   }
   
   

  }
  return <>
    <div className="container">
    <div className="clearBtn">
      <button className={styles.clearBtn} onClick={() => handleClear() }>Clear</button>
    </div>
      <div className={styles.UpperChat}>
        {response.map((item, index) => {
          return (
            <div key={index} className={item.isBot ? styles.chatbot : styles.chatuser}>
              <img src={item.isBot ? logobot : logouser} className={item.isBot ? styles.logobot : styles.logouser} alt="" />
              <p>{item.messagee}</p>
            </div>
          )
        })}
      
      </div>
    
    </div>
    <div className="conatiner">
    <div className={styles.SenderSection}>
        <input type="text" placeholder="Ask me anything" value={massage? massage : ''} onChange={(e) => setMassage(e.target.value)}  className={'${styles.input} form-control'}  />
        <button className="btn" onClick={handleClick}><i className="fa-solid fa-paper-plane text-danger"></i></button>
      </div>
    </div>
    
  </>
}
