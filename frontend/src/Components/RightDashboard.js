import React from 'react'
import '../Components/Styles/RightDashboard.css'

function RightDashboard() {

    const style = {
        background: "#FFFFFF",
        border: "none",
        borderRadius: "2px",
        boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
        marginTop: "5%"
    }

    return (
        <div className="rightDashBoard">
            <h3>Courses Frequency</h3>
            <iframe title="right-iframe" style={style} width="300" height="300" src="https://charts.mongodb.com/charts-colleges-vxiqa/embed/charts?id=0ccfba4d-7e94-43c3-a72e-560985ffa8a7&theme=light"></iframe>
        </div>
    )
}

export default RightDashboard
