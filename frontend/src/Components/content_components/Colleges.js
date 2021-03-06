import React, {useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SortIcon from '@material-ui/icons/Sort'
import {Input} from 'antd'

function Colleges( {list, city, loading} ) {

    const [currentSort, setCurrentSort ] = useState('default')

    useEffect(() => {
        setTempList(list)
    },[list])

    const sortTypes = {
        up: {
            class: 'sort-up',
            fn: (a, b) => a.founded - b.founded
        },
        down: {
            class: 'sort-down',
            fn: (a, b) => b.founded - a.founded
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
    const [tempList, setTempList] = useState(list);

    const updateInput = (e) => {
        var target = e.target.value;
        const filtered = list.filter(item => {
         return item.name.toLowerCase().includes(target.toLowerCase())
        })
        setInput(target);
        setTempList([...filtered]);
     }
    
    

    return (
        <div className="colleges">
            <div className="colleges__head">
                {loading? "" : <h1>Colleges in {city}</h1>}
                <Input className="colleges__head__input" placeholder="Search for Colleges" value={input} onChange={updateInput} />
            </div>
             
             <div className="colleges__item colleges__item__head" key={-1}>
                 
                 <p>Name</p>
                 <p>Founded </p>
                 <SortIcon className="sort__icon" onClick={onSortChange}></SortIcon>
                 <p>City</p>
                 <p>Country</p>
                 <p>Strength</p>
             </div>
             {loading ? <img className="loading" src='/Spinner-1s-200px.gif' alt='loading...'></img> :
             <div className="colleges__item__wrapper">
           {[...tempList].sort(sortTypes[currentSort].fn).map((item, idx) => (
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
                    <p>{item.students.length}</p>
               </div>
           ))}
           </div> }
        </div>
    )
}

export default Colleges
