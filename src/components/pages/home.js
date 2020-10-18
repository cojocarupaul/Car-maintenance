import React,{Component} from 'react';
import './home.css';
import oil from './images/oil.png';
import battery from './images/battery.png';
import brake from './images/brake.png';
import engine from './images/engine.png';
import ignition from './images/ignition.png';
// import shockAbsorber from './images/shock-absorber.png';
import wheel from './images/wheel.png';

class Home extends Component{
    render(){
        return[
            <div className="topnav">
                <div className="left-nav">
                    <button>My cars</button>
                </div>
                <h1>Car maintenance</h1>
                <div className="right-nav">
                    <button>Log Out</button>
                </div>
            </div>,
            <div className="container">
                <div className="card">
                    <img src={oil} alt="Oil"></img>
                    <div className="details">
                        <p>Details about oil and filters revision.</p>
                        <button>&#10140;</button>
                    </div>
                </div>
                <div className="card">
                    <img src={battery} alt="Battery"></img>
                    <div className="details">
                        <p>Details about battery revision.</p>
                        <button>&#10140;</button>
                    </div>
                </div>
                <div className="card">
                    <img src={brake} alt="Brake"></img>
                    <div className="details">
                        <p>Details about brake revision.</p>
                        <button>&#10140;</button>
                    </div>
                </div>
                <div className="card">
                    <img src={engine} alt="Engine"></img>
                    <div className="details">
                        <p>Details about Engine revision.</p>
                        <button>&#10140;</button>
                    </div>
                </div>
                <div className="card">
                    <img src={ignition} alt="Ignition"></img>
                    <div className="details">
                        <p>Details about ignition revision.</p>
                        <button>&#10140;</button>
                    </div>
                </div>
                <div className="card">
                    <img src={wheel} alt="Wheel"></img>
                    <div className="details">
                        <p>Details about wheel revision.</p>
                        <button>&#10140;</button>
                    </div>
                </div>
            </div>
        ];
    }
}

export default Home;