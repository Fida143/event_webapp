import { useState } from 'react';
import './Create.css'
function Create({add}){

    const initialValue = {
        event_name:'',
        date:'',
        time:'',
        location:'',
        image_url:''
    }

    const [event,setEvent] = useState(initialValue);
    const [check,setCheck] = useState(false);

    function handleChange(e){
        e.stopPropagation();

        setEvent({...event,[e.target.name]:e.target.value});
    }

    function handleClick(e){
        e.stopPropagation();
        if(check===true){
        }
        setCheck(!check)
        

    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(event);
        const sendData = 
        {
            event_name:event.event_name,
            date:event.date,
            time:event.time,
            location:event.location,
            image_url:event.image_url,
            is_liked:check
        }
        console.log(sendData);
        add(sendData);
        setEvent(initialValue);
        alert('Successfully Created ');
        
    }
    return(
        <>
        <h1>New Event</h1>
         <form onSubmit={handleSubmit}>
            <div className="container">

            <label htmlFor="event_name">Event name</label>
            <input type="text" id="event_name" placeholder='event_name' name='event_name'  onChange={handleChange} value={event.event_name}/>

            <label htmlFor="date">Date</label>
            <input type="date" id="date" placeholder='Date' name='date' value={event.date} onChange={handleChange}/>
            
            <label htmlFor="time">Time</label>
            <input type="time" id="time" placeholder='Time' name='time' value={event.time} onChange={handleChange}/>

            <label htmlFor="location">Location</label>
            <input type="text" id="location" placeholder='Location'name='location' value={event.location} onChange={handleChange}/>

            <label htmlFor="image_url">Image Url</label>
            <input type="url" id="image_url" placeholder='Image url' name='image_url' value={event.image_url} onChange={handleChange}/>

            <label htmlFor="checkbox"><input type="checkbox" id='checkbox'name='checkbox' onClick={handleClick} /><strong>Is_liked</strong></label>
            
            
            
            
            <button type='submit' onSubmit={handleSubmit}>Create</button>
            

            </div>
        </form>
        </>
    )
}
export default Create;