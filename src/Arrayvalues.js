let studentdetails=[
    {
        "studid":1001,
        "studname":"Ajith",
        "studmark":460,
        "studsalary":"5"
    },
    {
        "studid":1002,
        "studname":"Bharath",
        "studmark":450,
        "studsalary":"6"
    },
    {
        "studid":1003,
        "studname":"Chinna",
        "studmark":470,
        "studsalary":"7"
    },
    {
        "studid":1004,
        "studname":"Dinesh",
        "studmark":480,
        "studsalary":"5"
    }
]

export let creation=(studentdetail1)=>
{
    studentdetails.push(studentdetail1);
}
export let listing=()=>
{
    return studentdetails;
}
export let reading=(index)=>
{
    return studentdetails[index];
}
export let Fetchexact=(name)=>
{
    const temp=studentdetails.filter((data)=>
    {
        return data.studname===name
    })
    return temp[0];
}
export let Altervalue=(newvalues,index)=>
{
    studentdetails[index]=newvalues;
}
export const Removing=(ind)=>
{
    const ques=prompt("if you want to delete (yes/no)");

    if(ques==="yes")
    {
        studentdetails=studentdetails.filter((values,pos)=>
        {
            return pos!==ind;
            
        })
        return studentdetails;
    }
    else if(ques==="no")
    {
        alert(" your value is not deleted in my database")
        return studentdetails;
    }
    else{
        alert(" Pooda Mairu")
    }
}