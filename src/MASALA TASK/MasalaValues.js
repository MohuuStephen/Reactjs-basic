let masaladetails=[
    {
        "masalano":9001,
        "masalaname":"Turmeric Powder",
        "masalaqty":"500g",
        "masalarate":50
    },
    {
        "masalano":9002,
        "masalaname":"Coriander Powder",
        "masalaqty":"500g",
        "masalarate":75
    },
    {
        "masalano":9003,
        "masalaname":"Garam Masala",
        "masalaqty":"500g",
        "masalarate":65
    },
    {
        "masalano":9004,
        "masalaname":"Curry Masala",
        "masalaqty":"500g",
        "masalarate":90
    }
]

export let creation=(studentdetail1)=>
{
    masaladetails.push(studentdetail1);
}
export let listing=()=>
{
    return masaladetails;
}
export let reading=(index)=>
{
    return masaladetails[index];
}
export let Fetchexact=(name)=>
{
    const temp=masaladetails.filter((data)=>
    {
        return data.masalaname===name
    })
    return temp[0];
}
export let Altervalue=(newvalues,index)=>
{
    masaladetails[index]=newvalues;
}
export const Removing=(ind)=>
{
    const ques=prompt("if you want to delete (yes/no)");

    if(ques==="yes")
    {
        masaladetails=masaladetails.filter((values,pos)=>
        {
            return pos!==ind;
            
        })
        return masaladetails;
    }
    else if(ques==="no")
    {
        alert(" your value is not deleted in my database")
        return masaladetails;
    }
    else{
        alert(" Pooda Mairu")
    }
}