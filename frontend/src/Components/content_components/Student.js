import React, { useState, useEffect } from 'react'
import Avatar from '@material-ui/core/Avatar'
import {Link} from 'react-router-dom'

function Student(props) {

    var single = null;
    if(props.location.props){
        const idx = props.location.props.idx;
        const students = props.location.props.list;

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
            <div className="student">
                <Avatar className="student__avatar" src={`https://avatars.dicebear.com/api/human/${seed}.svg`}>D</Avatar>
                <h1>{single.name}</h1>
                <h3>{single.year}</h3>
                <div className="student__skills">
                {single.skills.map((item) => (
                    <p>{item}</p>
                ))}
                </div>
            </div>
            : ""}
            <Link to='/'>Go  Home</Link>
        </div>
    )
}

export default Student
