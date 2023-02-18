import React from 'react'
import Home from './Home';
import img from "../images/disc1.jpg"
import im1 from "../images/ab1.jpeg"
import im2 from "../images/ab2.jpeg"
import im3 from "../images/ab3.jpeg"
import im4 from "../images/ab4.jpeg"
import { Link } from 'react-router-dom';
import "./css/homePage.css";
const HomePage = () => {
    const observer = new IntersectionObserver((enteries)=>{
        enteries.forEach((entry)=>{
            console.log(entry);
            if(entry.isIntersecting){
                entry.target.classList.add('show');
            }
            else{
                entry.target.classList.remove('show');
            }
        });
    });
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el)=> observer.observe(el));    
    return (
        <div>
            <div className='header'>
                Operating System Project
            </div>
            <div className='section_2'>
                <img src={img} />
                <div className='text'>
                    <div className='into'> Disk Scheduling Algorithms</div>
                    <p>Disk scheduling is done by operating systems to schedule I/O requests arriving for the disk. Disk scheduling is also known as I/O scheduling. </p>
                    <p>Disk scheduling is important because: </p>
                    <ul>
                        <li> Multiple I/O requests may arrive by different processes and only one I/O request can be served at a time by the disk controller. Thus other I/O requests need to wait in the waiting queue and need to be scheduled.</li>
                        <li>
                            Two or more request may be far from each other so can result in greater disk arm movement.</li>
                        <li> Hard drives are one of the slowest parts of the computer system and thus need to be accessed in an efficient manner.</li>
                    </ul>

                </div>
            </div>
            <section className="show">
            <h2>Algorithms</h2>
            <div className="logos">
                <div className="logo show">
                    <h3><Link to="/">Round Robin</Link></h3>
                </div>
                <div className="logo show">
                <h3><Link to={Home}>Banker's Algorithm</Link></h3> 
                </div>
                <div className="logo show">
                <h3><Link to={Home}>Scan/C-Scan</Link></h3>
                </div>
                <div className="logo show">
                <h3><Link to={Home}>MRU</Link></h3>
                </div>
            </div>
        </section>
        </div>
    )
}

export default HomePage;