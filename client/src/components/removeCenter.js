import React, { useState } from 'react'
import st from "../styles/managebookings.module.css"
import RedIcon from "../assets/cross.png"

function RemoveCenter({comp,setComp}) {
    const [centers, setCenters] = useState([
            {
                cid: "123456789012",
                name: "Akshat Khaitan",
                number: "5647893210",
                vaccination_status: 0
            },
            {
                cid: "123456789412",
                name: "Nagadhanush KV",
                number: "5647893210",
                vaccination_status: 1
            },
            {
                cid: "123456712342",
                name: "Ankit Yadav",
                number: "5647893210",
                vaccination_status: 2
            },
            {
                cid: "123456758962",
                name: "Rishi Poddar",
                number: "5647893210",
                vaccination_status: 0
            }
    ])

    const handleCross = (id) => {
        var removed_center = centers.splice(id, 1);
        // var x = centers;
        // x.filter((_o, i) => id !== i);
        // setCenters(x)
        var x=centers.splice(0,id)+centers.splice(id+1);
        // setCenters(x)
        
        // // SEND removed_user to backend to update his record accordingly
        console.log(removed_center)
    }
    return (
        <>
        <div className={st.outer}>
            <div className={st.box}>
                <div className={st.title1}><a onClick={() => setComp(0)}
                                className={st.arrow1}>&#8592;</a>&nbsp;Remove Centers</div>
                <div>
            <table>

                <thead className={st.tableHead}>
                    <th className={st.theading}>Sl No.</th>
                    <th className={st.theading}>Center No.</th>
                    <th className={st.theading}>Center Name</th>
                    <th className={st.theading}>Address</th>
                    <th className={st.theading}>Manage</th>
                </thead>
                <tbody>
                    {centers.map((w, index) => {
                        return (
                            <tr className={st.trow}>


                                <td className={st.tcell1}>
                                    <div className={st.cells}>{index + 1}</div>
                                </td>
                                <td className={st.tcell}>
                                    <div className={st.cells}>{w.cid}</div>
                                </td>

                                <td className={st.tcell}><div className={st.cells}>{w.name}</div></td>
                                <td className={st.tcell}><div className={st.cells}>{w.number}</div></td>
                                <td className={st.tcell}>
                                    < div className={st.manageB}>
                                        <div className={st.icon}>
                                            <img className={st.bImgr} src={RedIcon} onClick={() => handleCross(index)} alt="React Logo" />
                                        </div>

                                    </div>
                                </td>

                            </tr>);
                    })}
                </tbody>
            </table>
            </div>
            </div>
            </div>

        </>
    )
}

export default RemoveCenter