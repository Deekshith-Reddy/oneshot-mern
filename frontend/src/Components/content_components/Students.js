import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import SortIcon from '@material-ui/icons/Sort'
import {Input} from 'antd'

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

    const [input, setInput] = useState("");
    const [tempList, setTempList] = useState(single);

    const updateInput = (e) => {
        var target = e.target.value;
        const filtered = single.filter(item => {
         return item.name.toLowerCase().includes(target.toLowerCase())
        })
        setInput(target);
        setTempList(filtered);
     }


    return (
        <div className="students">
            <div className="students__head">
                {clgName? <h1>{clgName}</h1> : <h1 className="students__head__name">Random Institute of Technology</h1>}
                <Input className="students__head__input" placeholder="Search for students" value={input} onChange={updateInput} />
                <Link to='/collegeslist'><h4>Home</h4></Link>
            </div>
            
            <div className="students__item students__item__head">
                <p>#</p>
                <p>Name</p>
                <p>Year</p>
                <SortIcon className="students__sort__icon" onClick={onSortChange}></SortIcon>
                <p>Skills</p>
            </div>
            <div className="students__item__wrapper">
            {single? [...tempList].sort(sortTypes[currentSort].fn).map((item, idx) => (
                <div className="students__item" key={idx}>
                    <p>#{idx+1}</p>
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
            )): ""}
            </div>
        </div>
    )
}

export default Students
