import React, {useEffect, useState} from "react";
import {Bar,Line} from 'react-chartjs-2'

function Luongdientieuthu(){
    const [list, setList] = useState([]);
    useEffect(()=>{
        let mounted = true;
        fetch('http://localhost:3000')
        .then(results => results.json())
      .then(data => {
        setList(data)
      });
        return () => mounted = false;
      },[])

 console.log(list);
    return(
        <div className="chart-electron">
            <Line
            data={{
                labels:['Jan', 'feb','Mar' ,'Apr','May', 'Jun', 'July','Aug','Sep', 'Oct', 'Nov', 'Dec'],
                datasets:[{
                    data:list,
                    backgroundColor:"orange",
                    borderColor:"black",
                    

                }]
            }}
            options ={{
                scales:{
                    xAxes:[
                        {
                            scaleLabel:{
                                lableString : 'Month',
                                display : true,


                            }
                        }
                    ],
                    yAxes:[
                        {
                            scaleLabel:{
                                labelString : 'dien nang tieu thu',
                                display : true,

                            },
                            ticks:{
                                beginAtZero: true
                            }
                        }
                    ]
                }
            }}
            >
            </Line>
        </div>
       
    )
}
export default Luongdientieuthu;