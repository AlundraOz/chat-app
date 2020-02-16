import React from 'react';


function Contact(props) {  
    
    return (
    <div className="Contact">
        <h1 className="name">{props.name}</h1>
        <img className="avatar" src={props.image}/>
        <span className="status">
        {
            props.status === true
                ? <h3 className="status-online">
                    <span className="status-text">Online</span>
                  </h3>
                : <h3 className="status-offline">
                    <span className="status-text">Offline</span>  
                  </h3> 
        }
        </span>
    
    </div>)

}

export default Contact