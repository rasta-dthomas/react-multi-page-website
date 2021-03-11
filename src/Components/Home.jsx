//import React from "react";
import React, { Component } from 'react';
import Cards from "./Cards";
import Counter from "./Counter";
import officeImage from "./pub/home-office-336373.jpg";
import myPic from "./pub/ProfilePic.jpg";
import "./home.css"

//function Home() {
export class Home extends Component {
    render() {
    return (
        <div className="home"
            style={{
                backgroundImage: 'url('+officeImage+')',
                backgroundSize: "cover",
                height: "175vh"
            }}>
            <div class="container">
                <div class="row align-items-center my-5">
                    <div class="col-lg-5">
                        <h1 class="font-weight-light" style={{color:"yellow"}}>Systems Engineer/Application Developer</h1>
                    </div>
                    <br />
                    <img class="smaller-image thick-black-border" style={{width: "300px"}} src={myPic} alt="Straw hat dred-lock man." />
                    <br />
                    <Cards />
                    <div className="Ctr">
                        <Counter/>
                    </div>
                </div>
            </div>
        </div>
    );
    }
}

export default Home;
