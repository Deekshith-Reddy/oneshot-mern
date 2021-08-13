import React, {useEffect, useState} from 'react'
import '../Components/Styles/Content.css'
import { Switch, Route } from 'react-router-dom'
import Colleges from '../Components/content_components/Colleges'
import Students from '../Components/content_components/Students'
import Student from '../Components/content_components/Student'
import axios from './axios'


function Content({query}) {

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(`/college/similar/${query}`)
            //console.log(request)
            setCollegeList(request.data)
        }
        fetchData();
    }, [query])


    const [collegeList, setCollegeList] = useState([]);

    return (
        <div className="content">
           

            <Switch>
                <Route path="/" exact>
                   <Colleges city = {query} list={collegeList}></Colleges>     
                </Route>

                <Route path='/studentlist' component={Students} />
                    
                

                <Route path='/studentinfo' component={Student}>
                    
                </Route>

                
            </Switch>


        </div>
    )
}

export default Content
