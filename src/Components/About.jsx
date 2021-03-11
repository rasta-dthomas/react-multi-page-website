import React from "react";
import officeImage from "./pub/offset_856455.jpg";
import "./home.css" 

function About() {
    return (
        <div className="about"
            style={{
                backgroundImage: 'url('+officeImage+')',
                backgroundSize: "cover",
                height: "175vh"
            }}>
            <div class="container">
                {/* <div class="row align-items-center my-5">
                    <div class="col-lg-5">
                        <h1 class="font-weight-light" style={{color:"yellow"}}>Systems Engineer/Application Developer</h1>
                    </div>
                    <br />
                    <img class="smaller-image thick-black-border" style={{width: "300px"}} src={myPic} alt="Straw hat dred-lock man." />
                    <br />
                </div> */}
            </div>
        </div>
        // <div className="about">
        //     <div class="container">
        //         <div class="row align-items-center my-5">
        //             <div class="col-lg-7">
        //                 <img
        //                     class="img-fluid rounded mb-4 mb-lg-0"
        //                     src="http://placehold.it/900x400"
        //                     alt=""
        //                 />
        //             </div>
        //             <div class="col-lg-5">
        //                 <h1 class="font-weight-light">About</h1>
        //                 <p>
        //                     Lorem Ipsum is simply dummy text of the
        //                     printing and typesetting industry. Lorem
        //                     Ipsum has been the industry's standard
        //                     dummy text ever since the 1500s, when an
        //                     unknown printer took a galley of type
        //                     and scrambled it to make a type specimen
        //                     book.
        //                 </p>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
}

export default About;