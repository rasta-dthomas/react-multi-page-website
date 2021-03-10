import React, { Component } from 'react';
// import React, { useState } from 'react';
import './home.css';
 
class Cards extends Component {
    render() {
        return (
            <section>
                <h2 style={{color:"yellow"}}>Skill Cards</h2>

                <div className="row">
                    <div className="column">
                        <div className="card">
                            <h3>Frontend Development</h3>
                            <a href="HTML">HTML</a>
                            <a href="CSS">CSS</a>
                            <a href="Javascript">Javascript</a>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <h3>Backend Development</h3>
                            <h3>Servers:</h3>
                            <a href="MongoDB">MongoDB</a>
                            <a href="MySQL">MySQL</a>
                            <a href="PostgreSQL">PostgreSQL</a>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <h3>Programming Languages</h3>
                            <a href="C/C++">C/C++</a>
                            <a href="Java">Java</a>
                            <a href="Python">Python</a>
                            <a href="Perl">Perl</a>
                            <a href="Ruby">Ruby</a>
                            <a href="C#">C#</a>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <h3>Development Frameworks</h3>
                            <a href="Node.js">Node.js</a>
                            <a href="Rails">Rails</a>
                            <a href="ASP.NET">ASP.NET</a>
                            <a href="Bootstrap">Bootstrap</a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Cards;