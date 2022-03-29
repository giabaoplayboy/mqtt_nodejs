import React, {useState, useEffect} from "react";
import {Bar,Line} from 'react-chartjs-2'
import Chart from 'chart.js/auto'
function TongLuongdientieuthu(){
    const [power, setPower] = useState(0);
    const [list, setList] = useState([]);
    const sum_power = (arr) => {
        return arr.reduce((num_a, num_b) => {
            return parseFloat(num_a)+parseFloat(num_b);
        })
    }
    useEffect(() => {
        let mounted = true;
        fetch('http://localhost:3000')
        .then(results => results.json())
        .then(data => {
            setList(data)
            setPower(sum_power(data))
        });
        return () => mounted = false;
    }, [])
    let d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    let day = d.getDate();
    const [months, setMonths] = useState(['Jan', 'feb','Mar' ,'Apr','May', 'Jun', 'July','Aug','Sep', 'Oct', 'Nov', 'Dec'])
    const [monthsPower, setMonthsPower] = useState([1392.95,300,300,400,500,500,100,300,300,400,500,600])
    return(
        <div className="chart-electron">
            <span>Tổng lượng điện tiêu thụ của tất cả thiết bị điện {' ngày '+ day + '/' + month+ '/'+ year} : {power} kwh</span>
            <Line
            data={{
                labels:months,
                datasets:[{
                    data:monthsPower,
                    backgroundColor:"orange",
                    borderColor:"black",
                    

                }]
            }}
            
            >
            </Line>
        </div>
       
    )
}
export default TongLuongdientieuthu;