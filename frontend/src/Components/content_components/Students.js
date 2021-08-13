import React from 'react'
import { Link } from 'react-router-dom';

function Students(props) {
    
    var single = null;
    var clgName = null;
    if(props.location.props){
        const idx = props.location.props.idx;
        const list = props.location.props.list;

        clgName = props.location.props.clgName;
        single = list[idx].students
    
    }
    

    return (
        <div className="students">
            {clgName? <h1>{clgName}</h1> : <h1>Random Institute of Technology</h1>}
            <div className="students__item students__item__head">
                <p>name</p>
                <p>year</p>
                <p>skills</p>
            </div>
            <div className="students__item__wrapper">
            {single? single.map((item, idx) => (
                <div className="students__item">
                    <p key={idx}>
                        <Link to={{
                            pathname: '/studentinfo',
                            props: {
                                idx: idx,
                                list: single
                            }
                        }}>
                        {item.name}</Link>
                    </p>
                    <p>{item.year}</p>
                    <p>{item.skills.toString()}</p>
                </div>
            )): <p>keep searching</p>}
            </div>
        </div>
    )
}

export default Students
