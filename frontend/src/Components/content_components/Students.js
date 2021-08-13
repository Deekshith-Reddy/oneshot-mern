import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import SortIcon from '@material-ui/icons/Sort'

function Students(props) {
    
    var single = null;
    var clgName = null;
    if(props.location.props){
        const idx = props.location.props.idx;
        const list = props.location.props.list;

        clgName = props.location.props.clgName;
        single = list[idx].students
    
    }
    
    const [currentSort, setCurrentSort ] = useState('default')


    const sortTypes = {
        up: {
            class: 'sort-up',
            fn: (a, b) => a.year - b.year
        },
        down: {
            class: 'sort-down',
            fn: (a, b) => b.year - a.year
        },
        default: {
            class: 'sort',
            fn: (a, b) => a
        }
    };
    

    const onSortChange = () => {
		
		let nextSort;

		if (currentSort === 'down') nextSort = 'up';
		else if (currentSort === 'up') nextSort = 'default';
		else if (currentSort === 'default') nextSort = 'down';

		setCurrentSort(nextSort)
    };


    return (
        <div className="students">
            {clgName? <h1>{clgName}</h1> : <h1>Random Institute of Technology</h1>}
            <div className="students__item students__item__head">
                <p>#</p>
                <p>name</p>
                <p>year</p>
                <SortIcon className="students__sort__icon" onClick={onSortChange}></SortIcon>
                <p>skills</p>
            </div>
            <div className="students__item__wrapper">
            {single? [...single].sort(sortTypes[currentSort].fn).map((item, idx) => (
                <div className="students__item" key={idx}>
                    <p>{idx+1}</p>
                    <p>
                        <Link to={{
                            pathname: '/studentinfo',
                            props: {
                                idx: idx,
                                list: single,
                            }
                        }}>
                        {item.name}</Link>
                    </p>
                    <p>{item.year}</p>
                    <p>{item.skills.toString()}</p>
                </div>
            )): <Link to='/collegesList'>Go  Home</Link>}
            </div>
        </div>
    )
}

export default Students
