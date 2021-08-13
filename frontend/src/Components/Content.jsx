import React, {useEffect, useState} from 'react'
import '../Components/Styles/Content.css'
import { Switch, Route } from 'react-router-dom'
import Colleges from '../Components/content_components/Colleges'
import Students from '../Components/content_components/Students'
import Student from '../Components/content_components/Student'
import axios from './axios'
import Home from './content_components/Home'


function Content({query}) {

    useEffect(() => {
        async function fetchData() {
            setLoading(true)
            const request = await axios.get(`/college/similar/${query}`)
            //console.log(request)
            setCollegeList(request.data)
            setLoading(false)
        }
        fetchData();
    }, [query])


    const [collegeList, setCollegeList] = useState([]);
    const [loading, setLoading] = useState(true)
    return (
        <div className="content">
           

            <Switch>
                <Route path='/' exact>
                    <Home></Home>
                </Route>
                <Route path="/collegeslist" exact>
                   <Colleges city = {query} list={collegeList} loading={loading}></Colleges>     
                </Route>

                <Route path='/studentlist' component={Students} />
                    
                

                <Route path='/studentinfo' component={Student}>
                    
                </Route>

                
            </Switch>


        </div>
    )
}

export default Content
