import React, {useState} from 'react';
import './App.css';
import styled from 'styled-components';
import ChatBot from "react-simple-chatbot";
const ChatBotContainer = styled.div`
  max-width: 500px; /* Adjust the maximum width as needed */
  margin: 0 auto; /* Center the chatbot horizontally */
  padding: 20px; /* Add padding to the chatbot container */
  border: 1px solid #ccc; /* Add a border for visual separation */
  border-radius: 5px; /* Add border radius for rounded corners */
`;

function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  const steps = [
     {
      id : 'Great',
      message: 'Hello, welcome to our websites',
      trigger: 'Ask Name'
     },
     {
      id: 'Ask Name',
      message: 'Please enter your name',
      trigger: 'waiting'
     },
     {
      id: 'waiting',
      user: true,
      trigger:'Name'
     },
     {
      id: 'Name',
      message: 'Hi {previousValue}, Please select your issues',
      trigger: 'informations'
     },
     {
      id: "informations",
      options: [
 
                 { 
                   value: "Who founded Babycare",
                   label: "Who founded Babycare",
                   trigger: "Who founded"
                 },
                 {
                   value: "Contact",
                   label: "Contact",
                   trigger: "Contact"
                 }
                 
               ]
   },
   {
    id: "Who founded",
    message: "ERWAN",
    trigger: "informations"
 },

 
   {
      id: "Contact",
      message: "Ok, first, enter your adress-mail",
      trigger: "Ask email"
   },
   {
      id: "Ask email",
      user: true,
      trigger: "get-email"
   },
 
   {
     id: "get-email",
     message: "ok, {previousValue} !! Type your value now, please be fair",
     trigger: "your question"
   },
 
   // {
   //   id: "your question",
   //   message: "Ok. Now, enter your message to the staff. Please be fair !!",
   //   trigger: "your message"
   // },
   {
     id: "your question",
     user: true,
     trigger: "send mail"
   },
 
   
   {
     id: "send mail",
     message: "ok,  there is your message : {previousValue} !! The support team will answer you as possible",
     
     trigger: "thelast"
   },
 
   
   {
     id: "thelast",
    message:'thanks for chat',
   
     end: true
   },
 
    
  ];
  return(
  <ChatBotContainer>
      <ChatBot steps={steps} />
    </ChatBotContainer>
  )
};

export default App;
