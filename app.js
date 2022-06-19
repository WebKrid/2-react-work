import '.App.css';
import useEnhancedEffect from '@mui/material/utils/useEnhancedEffect';
import {useState} from "react";


function App() {
   const [messageList,setMessageList] = useState([]);
   const [tatle,setName] = useState('');
   const [author,setAuthor] = useState('');
 
   const addMessage = () => {
    let random = Math.random()
    setMessageList(value [...messageList, {
      tatle: tatle,author: author, id: random
    }])
   };

   useEffect( ()=> {
   setTimeout( () => {
      if (messageList.length > 0) {
         alert('Собщение Отправленно')
      }
   }, 3000) 
   },[messageList])
   
   return(
      <div>
         <input value={tatle} onChange={(event :) => seTitle(event.target.value)} />
         <input value={author} onChange={(event :) => setAuthor(event.target.value)}/>
        <button onClick={addMessage}>Добавить сообщения</button>             
      {messageList.map((item) => {
         return(
         <div key={item.id} style={{ display: 'flex,justifyContent: 'space-between'}}>
               {item.tatle}
            </div>
            <div>
             {item.author}
            </div>
            </div>
         )
      })}
      <div></div>
   );
}