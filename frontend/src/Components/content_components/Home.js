import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from '../axios'

function Home() {

    const [fullList, setFullList] = useState([])
    const [cities, setCities] = useState([]);
    const [count, setCount] = useState(0);

    const getCities = () => {
        var distinct = []
        for(var i=0; i<fullList.length; i++){
            distinct.push(fullList[i].city)
        }
        distinct = [...new Set(distinct)]
        setCities(distinct)
    }

    const countStudents = () => {
        var val = 0
        for(var i=0; i<fullList.length; i++){
            //console.log(fullList[i].students)
            val += fullList[i].students.length
        }
        setCount(val)
        //console.log(count)
    }

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(`/college`)
            //console.log(request)
            setFullList(request.data)
        }
        fetchData();
        getCities();
        countStudents();
    }, [fullList])

    return (
        <div className="Home">
             <h1>Welcome to College Explorer</h1>

             <h2>From a list of {fullList.length} Colleges</h2>
             <h2>Including Colleges from cities {cities.toString()}</h2>
             <h3>With around {count} students and many number of courses</h3>

             <h3><Link to='/collegeslist'>Start Searching</Link></h3>
        </div>
    )
}

export default Home
