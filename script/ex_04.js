window.onload = function () 
{
    var el = document.querySelector('footer').querySelector('div');
    window.addEventListener('keypress', logKey);

    var myArr = "";
    function logKey(event)
    {
        let nb = myArr.length;
        let str = event.key;
        
        if((nb + 1) > 42)
        {
            myArr = myArr.substr(1);
        }
        myArr += str;
        el.innerText = myArr;
    }
}