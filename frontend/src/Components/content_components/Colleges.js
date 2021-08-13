import React from 'react'
import { Link } from 'react-router-dom'


function Colleges( {list, city} ) {

    
    

    return (
        <div className="colleges">
             <h1>Colleges in {city}</h1>
             <div className="colleges__item colleges__item__head" key={-1}>
                 
                 <p>College Name</p>
                 <p>Founded</p>
                 <p>City</p>
                 <p>Country</p>
             </div>
             <div className="colleges__item__wrapper">
           {list.map((item, idx) => (
               <div className="colleges__item" key={idx}>
                   {/* <p>{item.id}</p> */}
                   <p >
                    <Link to={{
                        pathname:  `/studentlist`,
                        props: {
                            idx: idx,
                            list: list,
                            clgName: item.name
                        }
                    }}>{item.name ? item.name : "Random Institute of Technology"}</Link>
                    </p>
                    <p>{item.founded}</p>
                    <p>{item.city}</p>
                    <p>{item.country}</p>
               </div>
           ))}
           </div>
        </div>
    )
}

export default Colleges
