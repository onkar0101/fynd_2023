var alert=require('alert');
//init:Outer function
function init()
{
    var name='Chrome';
    function displayName()
    {
        alert(name);

    }
    displayName();
}
init();