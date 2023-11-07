import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import { Fetchexact, listing } from './Arrayvalues';
import { Registrationform } from './RegisterForm';
import { Button } from 'react-bootstrap';
import { Readpage } from './Readpage';

export let Listingpage=()=>
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
                <Registrationform/>
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
                >Registrationform</Button>
               
            <table className='table table-striped table-secondary col-lg-8 col-md-10 col-sm-12'>
                <thead>
                    <tr>
                        <th>Student ID</th>
                        <th>Student NAME</th>
                        <th>Student MARK</th>
                        <th>Student SALARY</th>
                        <th>Action</th>
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

                                }}>{data.studid}</td>
                                <td>{data.studname}</td>
                                <td>{data.studmark}</td>
                                <td>{data.studsalary}</td>
                                <td>
                                        <button
                                        className='btn btn-outline-primary'
                                        onClick={()=>
                                        {
                                            setUpdatepage(true)
                                            setpos(index)
                                            const temp=Fetchexact(data.studname);
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