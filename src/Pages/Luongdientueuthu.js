import React, {useEffect, useState} from "react";
import {Bar,Line} from 'react-chartjs-2'

function Luongdientieuthu(){
    const [list, setList] = useState(undefined);
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
    return list ? (
        <div className="chart-electron">
            <Line
            data={{
                labels:[
                "SanVuon/Den", 
                "SanVuon/HoBoi",
                "PhongBep/BepDien",
                "PhongBep/TuLanh",   
                "KTTV/EC",          
            ],
                datasets:[{
                    data:list,
                    backgroundColor:"orange",
                    borderColor:"black",
                    

                },
            ],
            }}
            
            >
            </Line>
        </div>
    ) : (
        <></>   
    )
}
export default Luongdientieuthu;