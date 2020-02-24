import React from 'react';
import './Contact.css' 


class Contact extends React.Component {  
    constructor(props) {
        super(props);
        this.state = {
            online: true,
        change : () => {                      
        const newStatus = !this.state.online
        this.setState({online : newStatus})
        },
    }
    }

    render() {
    return (
    <div className="Contact">
        <img className="avatar" src={this.props.image}/>
        <h1 className="name">{this.props.name}</h1>
        <span className="status" 
         onClick={this.state.change}> 
         {this.state.online ? <div><div className="status-online"></div> <span className="status-text">Online</span>
          </div>
            :
          <div> <div className="status-offline"></div>
          <span className="status-text">Offline</span>
          </div>
        }
        >
        
        </span>
    
    </div>)

    }
}
export default Contact