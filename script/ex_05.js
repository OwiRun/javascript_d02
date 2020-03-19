window.onload = function () 
{
    var el = document.querySelector('footer').querySelector('div');
    // var plus = document.getElementById("plus");
    var plus = document.querySelector('footer').querySelector('div').querySelector("button");
    var plus2 = plus.textContent("+");
    plus2.onclick = function(){plus.innerText = 'click';}

    function myInput()
    {
        if(plus.innerHTML == "<button>+</button>")
        {
            plus.innerText = 'plus';
            document.style.fontSize += '10px';
        }
        if(plus.innerHTML == "<button>-</button>")
        {
            plus.innerText = 'moins';
            document.style.fontSize -= '10px';
        }
    }
}