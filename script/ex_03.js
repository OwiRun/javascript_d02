window.onload = function ()
{
    var el = document.querySelector('footer').querySelector('div'); 
    el.addEventListener("click", userName = function()
    {    
        myPrompt = prompt("Entrez votre nom !");
        while(myPrompt == "")
        {
            myPrompt;
            myPrompt = prompt("Entrez votre nom !");
        }
        if(myPrompt != null)
        {
            el.innerText = myPrompt;
            if (confirm("Etes vous sûr que '" + myPrompt +"' est votre nom ?")) 
            {
                el.innerText = myPrompt;
                alert("Bonjour " + myPrompt +"!");
            } 
            else 
            {
                return userName(); 
            }
        }
    })
}