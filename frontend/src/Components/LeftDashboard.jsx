import React, { useEffect } from 'react'
import '../Components/Styles/LeftDashboard.css'
import EmbedSDK from '@mongodb-js/charts-embed-dom'


function LeftDashboard({setQuery}) {

    useEffect(() => {
        const sdk = new EmbedSDK({
            baseUrl: 'https://charts.mongodb.com/charts-colleges-vxiqa',
        })
    
        const chart = sdk.createChart({
            chartId: '32c26b2f-bb7a-4130-b26f-2709fd1fafe5',
            width: 300,
            height: 300
        })
    
        chart.render(document.getElementById('chart'))
            .then(() => {
                chart.addEventListener('click', (e) => {
                    setQuery(e.data.label.value)
                })
            })
            .catch((e) => console.log(e.message));
    }, [setQuery])


    const style = {
        background: "#FFFFFF",
        border: "none",
        borderRadius: "2px",
        boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
        marginTop: "5%"
    }

    

    return (
        <div className="leftDashBoard">
            
           
           
           <div id="chart" style={style}></div>
           <div className="leftDashBoard__instructions">
               <p>Click the cities on the above chart to get colleges by city</p>
           </div>
            
        </div>
    )
}

export default LeftDashboard
