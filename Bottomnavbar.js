import './Bottomsty.css'
import React, { Component } from 'react'

export default class Bottomnavbar extends Component {
    render() {
        return (

<div className="Boxsz">

            <div  className="boxsc">
                
             <ul>
               <li><a href="business">Business</a></li>

 <li><a href="business">Entertainment</a></li>

 <li><a href="business">General</a></li>

 <li><a href="business">Health</a></li>

<li><a href="business">Science</a></li>

<li><a href="business">Sports</a></li>

<li><a href="business">Technology</a></li>




             </ul>
<div className="contact">

    <h2>Contact Us</h2>


<p><i class='fas fa-map-marker-alt'></i>Shubhas Nagar Pagara road Sagar Madhya Pradesh</p>


</div>

<div className="search">

<p>Subscribe</p>

<input type="text" placeholder="Enter Email"/>
</div>




    

            </div>
            <hr></hr>
            <div className="desc">
       <p>Create & Developer By Pavan8518</p>
         </div>
            </div>

        )
    }
}
