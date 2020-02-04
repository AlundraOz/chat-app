import React from 'react';

const name = "Alundra Ozono";
const avatar = "https://scontent.fbcn9-1.fna.fbcdn.net/v/t1.0-9/p720x720/40056635_545439302556318_6961266852869701632_o.jpg?_nc_cat=111&_nc_ohc=eC7GZUAvSWcAX_iDeVr&_nc_ht=scontent.fbcn9-1.fna&_nc_tp=6&oh=66da40d7285d2b0e38ec582f01d8726f&oe=5ECD98BC";
const online = true;

function Contact() {
  <div class="contact">
    <img src={avatar} class="avatar"/>
    <div class="about">
      <div class="name"><h4>{name}</h4></div>
            <div class="status">
              
            </div>
          </div>
  </div>
}

export default Contact