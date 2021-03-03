import React from "react";
import Cards from "./Cards";
import officeImage from "./pub/home-office-336373.jpg";
import myPic from "./pub/ProfilePic.jpg";
import "./home.css"

function Home() {

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
                </div>
            </div>
        </div>
    );
}

export default Home;