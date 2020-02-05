import React from 'react';


function Contact(props) {  
    
    return (<div className="Contact">
    <h1 className="name">{props.name}</h1>
    <img className="avatar" src={props.image}/>
    {
        props.status === true
            ? <h3 className="status-online">Online</h3>
            : <h3 className="status-offline">Offline</h3> 
    }
    <h3 className="status">{props.status}</h3>
    </div>)

}

export default Contact