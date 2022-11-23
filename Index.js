myFunction();

function myFunction() 
{
    let i;
    for(i = 0; i < 11; i++)
    {
        if(i%2 == 0)
        {
            console.log(i +" : " + i);
        }
        else
        {
            console.log(i +" : "+ i * 2);
        }
    }
}