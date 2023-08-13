import Header from './components/Header';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './components/Login';
import Register from  './components/Register'
import Home from  './components/Home'
import Create from './components/Create';
import { useState } from 'react';

function App() {

  const eventsDB = [
    {
      user_id:1,
      event_name:"Pre-Game Grill & Chill.",
      data:'2023-08-12'  ,
      time:'12:30 Am' ,
      location: 'india',
      image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHKEBak-4eVMbinGqXuaH_TJKFQuePXrpixg&usqp=CAU',
      is_liked: false

    },
    {
      user_id:2,
      event_name:"Go Go Gophers! Gameday Get Together",
      data:'2023-08-12'  ,
      time:'12:30 Am' ,
      location: 'india',
      image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAlZpVGoOekMHL3Z9sGBbcwYWzAcAavnqfXdbnrr5a_7c5ptukr9-2ftqXqaNy0kVc9qs&usqp=CAU',
      is_liked: false

    },
    {
      user_id:3,
      event_name:"The 2022 Gophers Fans Ice Cream Social.",
      data:'2023-08-12',
      time:'12:30 Am' ,
      location: 'india',
      image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDlddq2OmOpp_Xpder58pyxH4dFJgQuoItjF2UnIMVdt3_6qTIkfCSuaWLHmp_7BxJWRM&usqp=CAU',
      is_liked: false

    }
  ]

  const [events,SetEvents] =useState(eventsDB);

  function add(sendData){
    console.log('add',sendData);
    SetEvents([...events,{...sendData,user_id:Date.now()}]);
  }



  return (
   <Router>
    <Header />
    <Routes>
    <Route path='/' element= {<Home events={events}/>} />
    <Route path='/create' element= {<Create  add={add} />} />
    <Route path='/login' element= {<Login />} />
    <Route path='/register' element= {<Register />} />
    </Routes>
   </Router>
  );
}

export default App;
