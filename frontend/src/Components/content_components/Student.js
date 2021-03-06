import React, { useState, useEffect } from 'react'
import Avatar from '@material-ui/core/Avatar'
import {Link} from 'react-router-dom'

function Student(props) {

    var single = null;
    var students = []
    if(props.location.props){
        const idx = props.location.props.idx;
        students = props.location.props.list;

        single = students[idx]
        //console.log(single)
    }

    
    const [seed, setSeed] = useState("123");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [])

    return (
        <div className="student">

            {single? 
            <div className="student__section">
                <Avatar className="student__avatar" src={`https://avatars.dicebear.com/api/human/${seed}.svg`}>D</Avatar>
                <h1>{single.name}</h1>
                <h3>{single.year}</h3>
                <div className="student__skills">
                {single.skills.map((item, idx) => (
                    <p key={idx}>{item}</p>
                ))}
                </div>
            </div>
            : ""}
            <Link to='/collegeslist'>Go  Home</Link>
        </div>
    )
}

export default Student
