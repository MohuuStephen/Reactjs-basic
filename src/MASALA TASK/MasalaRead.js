import { useEffect, useState } from "react"
import { reading } from "./Arrayvalues"

export let Readpage=(indexvalue)=>
{
    const[myvalues,setmyvalues]=useState({
        "masalano":0,
        "masalaname":"",
        "masalaqty":"",
        "masalarate":0
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
                    <div className="bg-Warning">
                        <h2>Sorted by SINO</h2>
                        <tr>
                            <td>Masala SINO-<span className="ms-5">{myvalues.masalano}</span></td>
                        </tr>
                        <tr>
                            <td>Masala NAME-<span className="ms-5">{myvalues.masalaname}</span></td>
                        </tr>
                        <tr>
                            <td>Masala QUANTITY-<span className="ms-5">{myvalues.masalaqty}</span></td>
                        </tr>
                        <tr>
                            <td>Masala RATE-<span className="ms-5">{myvalues.masalarate}</span></td>
                        </tr>

                    </div>

                </div>

            </div>

          </div>
        </>

    );
}