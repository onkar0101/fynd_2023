

function outerScope()
{
    const result=[];
    function innerScope()
    {
        for(let i=0;i<5;i++)
        {
            result[i]=(function inner(x)
            //additional enclosing context
            {
                return function()
                {
                    console.log(x);  // x is reference
                };
            })(i);
        }
    } 
    innerScope();
        for(let i=0;i<5;i++)
        {
            result[i]();
        }
}
outerScope();