const express = require('express')
const router = express.Router()
const uuid = require('uuid');



const events=[
    {
        id:1,
        remaining_places:"12",
        organizer:"Mohammed Mahrous",
        location:"Mall of arabia hall 2, 6 october city, cairo, Egypt",
        about:"event that helps ict startups",
        price:"60",
        speakers:["Elon Musk","Hassan Soubra"],
        topics:["technology","Java","Programming"],
        type:"hobba",
        attendees_ids:["1","2"]
    },
    {
        id:2,
        remaining_places:"12",
        organizer:"Mohammed Mahrous",
        location:"Mall of arabia hall 2, 6 october city, cairo, Egypt",
        about:"event that helps ict startups",
        price:"60",
        speakers:["Elon Musk","Hassan Soubra"],
        topics:["technology","Java","Programming"],
        type:"hobba",
        attendees_ids:["1","2"]
    }

];



router.get('/:id', (req,res) => {
    const found = events.some(event => event.id == req.params.id);
    if(found) {
        res.json(events.filter(event => event.id == req.params.id));
    } else {
        res.status(400).json({msg: `ID ${req.params.id} not found`});
    }
});

router.get('/location/:location', (req,res) => {
    //const updateTask = req.body;
    //const foundlocation=updateTask.id?true:false; 
    
    events.forEach(event => {
        if(event.location === req.params.location) {
            res.json(event);
        }
    });

});
router.get('/basedescription/:des', (req,res) => {
     
    events.forEach(event => {
        if(event.description === req.params.des) {
            res.json(event);
        }
    });
});
router.get('/registerationprice/:price', (req,res) => {
     
    events.forEach(event => {
        if(event.price === req.params.price) {
            res.json(event);
        }
    });
});
router.get('/places/:place', (req,res) => {
     
    events.forEach(event => {
        if(event.remaining_places === req.params.place) {
            res.json(event);
        }
    });
});
router.get('/speakers/:speakers', (req,res) => {
     
    events.forEach(event => {
        if(event.speakers === req.params.speakers) {
            res.json(event);
        }
    });
});
router.get('/topics/:topics', (req,res) => {
     
    events.forEach(event => {
        if(event.topics === req.params.topics) {
            res.json(event);
        }
    });
});



//get all events in database
router.get('/',(req,res)=> res.json({ data: events }));

//get all events with a type "task 2.3"
router.get('/:type',(req,res)=> {
    const found= events.some(event =>event.type===req.params.type)
    if (found){
        res.json(events.filter(event => event.type===req.params.type));
    }
    else{
      res.status(400).json({msg: 'No events with this type'})  
    }

});

//delete event
router.delete('/delete/:id',(req,res)=> {
    const found= events.some(event =>event.id===parseInt(req.params.id));
    if (found){
        res.json({msg:'Event deleted', 
        events : events.filter(event=>event.id!==parseInt(req.params.id))});
    }
    else{
      res.status(400).json({msg: 'No events with this type'})  
    }

});

//update event
router.put('/update/:id',(req,res)=> {
    const found= events.some(event =>event.id===parseInt(req.params.id));
    if (found){
        const updatedEvent=req.body;
        events.forEach(event =>{
            if (event.id===parseInt(req.params.id))
            {
                event.remaining_places= updatedEvent.remaining_places ? updatedEvent.remaining_places : event.remaining_places;
                event.organizer= updatedEvent.organizer?updatedEvent.organizer:event.organizer;
                event.location= updatedEvent.location?updatedEvent.location:event.location;
                event.about= updatedEvent.about?updatedEvent.about:event.about;
                event.price= updatedEvent.price?updatedEvent.price:event.price;
                event.speakers= updatedEvent.speakers?updatedEvent.speakers:event.speakers;
                event.topics=updatedEvent.topics?updatedEvent.topics:event.topics;
                event.type=updatedEvent.type?updatedEvent.type:event.type;
                event.attendees_ids=updatedEvent.attendees_ids?updatedEvent.attendees_ids:event.attendees_ids;
                res.json({msg: 'event updated', event});
            }
        })
    }
    else{
      res.status(400).json({msg: 'No events with this type'})  
    }

});

//create event with post
router.post('/addEvent',(req,res)=>
    {
          //event id
        
        const remaining_places= req.body.remaining_places
        const organizer= req.body.organizer
        const location= req.body.location
        const about= req.body.about
        const price= req.body.price
        const speakers= req.body.speakers
        const topics=req.body.topics
        const type=req.body.type
        const attendees_ids=[]
        

        const event1={
            id:uuid.v4(),
            remaining_places:remaining_places,
            organizer:organizer,
            location:location,
            about:about,
            price:price,
            speakers:speakers,
            topics:topics,
            type:type,
            attendees_ids:attendees_ids
        }
        events.push(event1)
        res.send(events)
    })

module.exports=router 
