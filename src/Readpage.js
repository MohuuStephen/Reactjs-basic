import { useEffect, useState } from "react"
import { reading } from "./Arrayvalues"

export let Readpage=(indexvalue)=>
{
    const[myvalues,setmyvalues]=useState({
        "studid":0,
        "studname":"",
        "studmark":0,
        "studsalary":""
    })

    const settingvalues=()=>
    {
        setmyvalues(reading(indexvalue.who))
    }
    useEffect(()=>
    {
        settingvalues()
    })
    return(
        <>
          <div className="container text-center mt-3">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8 col-sm-10">
                    <div className="bg-secondary">
                        <h2>Sorted By ID</h2>
                        <tr>
                            <td>Student ID-<span className="ms-5">{myvalues.studid}</span></td>
                        </tr>
                        <tr>
                            <td>Student NAME-<span className="ms-5">{myvalues.studname}</span></td>
                        </tr>
                        <tr>
                            <td>Student MARK-<span className="ms-5">{myvalues.studmark}</span></td>
                        </tr>
                        <tr>
                            <td>Student SALARY-<span className="ms-5">{myvalues.studsalary}</span></td>
                        </tr>

                    </div>

                </div>

            </div>

          </div>
        </>

    );
}