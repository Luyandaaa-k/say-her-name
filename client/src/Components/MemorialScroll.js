import React from 'react';
import './MemorialScroll.css';

function MemorialScroll() {

    const victims = [

       { id: 1, name: "Uyinene Mrwetyana", location: "Cape Town, South Africa", date: "2019" },
       { id: 2, name: "Tshegofatso Pule", location: "Johannesburg, South Africa", date: "2020" },
       { id: 3, name: "In memory of all whose names we don't know", location: "Worldwide", date: "" }
    ];

        return (
            <div className="scroll-container">
                <div className="scroll-content">
                    {victims.map(victim => (
                        <div key={victim.id} className="victim-card">
                            <h2>{victim.name}</h2>
                            <p>{victim.location}</p>
                            {victim.date && <p className="date">{victim.date}</p>}
                        </div>
                    ))}
                </div>
            </div>
        );

          <div className="end-message">
                 <h1>Let's End This List</h1>
                 <p>But we remember forever...</p>
          </div>
    }
    
    export default MemorialScroll;
     