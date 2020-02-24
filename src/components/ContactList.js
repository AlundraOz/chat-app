import React from 'react'
import Contact from './Contact'

let contacts = [{
    name:"Rene Arnold",
    avatar:"https://randomuser.me/api/portraits/men/60.jpg",
    status:true,},
    {
    name:"Zack Phillips",
    avatar:"https://randomuser.me/api/portraits/men/45.jpg",
    status:false,},
    {
    name:"Billy Foster",
    avatar:"https://randomuser.me/api/portraits/men/61.jpg",
    status:true,},
    {
    name:"Irene Ward",
    avatar:"https://randomuser.me/api/portraits/women/94.jpg",
    status:true,},
    {
    name:"Loretta Allen",
    avatar:"https://randomuser.me/api/portraits/women/17.jpg",
    status:true,},
  ]

 const ContactList = () => (
       <div>
        {contacts.map(
            (item,i) =>
                <Contact 
                    key={i}
                    image={item.avatar}
                    name={item.name} 
                    status={item.status}
                />
            )
        }
        </div>
                )
            
        
    

export default ContactList

// https://rogerdudler.github.io/git-guide/index.es.html //