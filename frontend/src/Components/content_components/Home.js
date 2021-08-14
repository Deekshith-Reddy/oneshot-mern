import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from '../axios'
import '../Styles/Home.css'

function Home() {

    const [fullList, setFullList] = useState([])
    const [cities, setCities] = useState([]);
    const [count, setCount] = useState(0);

    const [loading, setLoading] = useState(true)


    useEffect(() => {
        setLoading(true)
        async function fetchData() {
            
            const request = await axios.get(`/college`)
            //console.log(request)
            setFullList(request.data)

            // get cities 
            var distinct = new Set()
            for(let i=0; i<fullList.length; i++){
                distinct.add(fullList[i].city)
            }
            setCities([...distinct])

            //countstudents
            var val = 0
            for(let i=0; i<fullList.length; i++){
                //console.log(fullList[i].students)
                val += fullList[i].students.length
            }
            setCount(val)
            setLoading(false)
        }

        fetchData();
    }, [fullList])
    

    

    return (
        <div className="home">
             <h1 className="home__display">Welcome to College Explorer</h1>
             {loading ? <img alt="loading..." src='/Spinner-1s-200px.gif'></img> : 
             
             (<div className="home__info">
                <h2>From a list of {fullList.length} Colleges</h2>
                <h3 className="home__info__sub">Including Colleges from cities {cities.toString()}</h3>
                <h3 className="home__info__sub">With around {count} students and many number of courses</h3>
             </div>)
             
             }
             

             <h3 class="home__search"><Link to='/collegeslist'>Start Searching</Link></h3>
        </div>
    )
}

export default Home
