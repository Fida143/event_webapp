
import Card from './Card';

function Home ({events}){
    
    // console.log(events);

    return(
        <>
            {events.map(d => <Card key={d.user_id}  event_name={d.event_name} date ={d.date} location={d.location} time={d.time} image_url={d.image_url} is_liked={d.is_liked} />)}
        
        </>
    )
}
export default Home;