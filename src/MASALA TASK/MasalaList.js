import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import { Fetchexact, listing } from './Arrayvalues';
import { Button } from 'react-bootstrap';
import { MasalaRead } from './MasalaValues'
import { RegMasala } from './homepageR';

export let Masalalist=()=>
{

    const[temporary,settemporary]=useState([])
    const[createpage,setcreatepage]=useState(false);
    const[readpage,setreadpage]=useState(false);
    const[pos,setpos]=useState(0);
    const[updatepage,setUpdatepage]=useState(false);
    const[object,setObject]=useState({});

    const Gettingvalue=()=>
    {
        settemporary(listing());
    }
    useEffect(()=>
    {
        Gettingvalue()
    })

    return(
         <>
         <div className='container row justify-content-center'>
            {
                (createpage)?
                <>
                <RegMasala/>
                <Button className='btn btn-outline-light text-dark col-2 mt-2 mb-2'
                onClick={()=>
                {
                    setcreatepage(false)
                }}
                >BACK</Button>
                </>
                :
                (readpage)?
                <>
                <Readpage who={pos}/>
                <button className='btn btn-outline-light text-dark col-2 mt-2 mb-2'
                onClick={()=>
                {
                   setreadpage(false)
                }}
                >BACK</button>
                </>
                :
                (updatepage)?
                <>
                <updatepage who={pos} studentdet={object} />
                <button 
                onClick={()=>
                {
                   setUpdatepage(false)
                }}
                >BACK</button>
                </>
                :
                <>
                <Button className='btn btn-outline-light text-dark col-2 mt-2 mb-2'
                onClick={()=>
                {
                    setcreatepage(true)
                }}
                >RegMasala</Button>
               
            <table className='table table-striped table-secondary col-lg-8 col-md-10 col-sm-12'>
                <thead>
                    <tr>
                        <th>Masala SINO</th>
                        <th>Masala NAME</th>
                        <th>Masala QTY</th>
                        <th>Masala RATE</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        temporary.map((data,index)=>
                        (
                            <>
                            <tr>
                                <td onClick={()=>
                                {
                                    setreadpage(true);
                                    setpos(index)

                                }}>{data.masalano}</td>
                                <td>{data.masalaname}</td>
                                <td>{data.masalaqty}</td>
                                <td>{data.masalarate}</td>
                                <td>
                                        <button
                                        className='btn btn-outline-primary'
                                        onClick={()=>
                                        {
                                            setUpdatepage(true)
                                            setpos(index)
                                            const temp=Fetchexact(data.masalaname);
                                            setObject(temp);
                                        }}
                                        >UPDATE</button>
                                        <button
                                         className='btn btn-outline-primary'
                                         onClick={()=>
                                         {
                                             settemporary(Removing(index))
                                         }}
                                        >DELETE</button>
                                </td>
                            </tr>
                            </>
                        ))
                        
                    }
                </tbody>

            </table>
            </>

}
         </div>
         </>
    );
} 