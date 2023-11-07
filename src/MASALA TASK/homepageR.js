import 'bootstrap/dist/css/bootstrap.min.css'
import { creation } from '../Arrayvalues'
import { useState } from 'react'

export let RegMasala=()=>
{
    const[myvalues,setMyvalues]=useState({
        "masalano":0,
        "masalaname":"",
        "masalaqty":"",
        "masalarate":0
    })
    const track=(inputs)=>
    {
        const{name,value}=inputs.target

        setMyvalues((getting)=>
        {
            return{
                ...getting,
                [name]:value
            }
        })
    }
    const register=()=>
    {
        alert(" Welcome to Sakthi Masala"+JSON.stringify(myvalues))
        return creation();
    }
    return(
        <>
        <div className='container text-center'>
            <div className='row justify-content-center'>
                <h1 className='text-center text-bold'>MASALA VARITIES</h1>
                <div className='col-lg-8 col-md-10 col-sm-12'>
                        <div className='form-group'>
                            <label className='form-label'>Enter SI-No</label>
                            <input
                            placeholder='Enter the product sino'
                            type='number'
                            name='masalano'
                            onChange={track}
                            value={myvalues.masalano}
                            className='form-control'
                             />
                        </div>
                        <div className='form-group mt-2'>
                            <label className='form-label'>Enter Product Name</label>
                            <input
                            placeholder='Enter your Masala Name'
                            type='text'
                            name='masalaname'
                            onChange={track}
                            value={myvalues.masalaname}
                            className='form-control'
                             />
                        </div>
                        <div className='form-group mt-2'>
                            <label className='form-label'>Enter Quantity</label>
                            <input
                            placeholder='How much quantity do you want'
                            type='text'
                            name='masalaqty'
                            onChange={track}
                            value={myvalues.masalaqty}
                            className='form-control'
                             />
                        </div>
                        <div className='form-group mt-2'>
                            <label className='form-label'>Enter MRP Rate</label>
                            <input
                            placeholder='Product Rate'
                            type='number'
                            name='masalarate'
                            onChange={track}
                            value={myvalues.masalarate}
                            className='form-control'
                             />
                        </div>
                        <div className='row justify-content-center mt-5'>
                            <button className='btn btn-outline-success col-5 me-3' onClick={register}>Submit</button>
                            <button className='btn btn-outline-danger col-5 ms-3'>Cancel</button>
                        </div>
                </div>
            </div>
        </div>
     </>
    );
}