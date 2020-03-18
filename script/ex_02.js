window.onload = function () {
    var el = document.querySelector('footer').querySelector('div');
    var i = 1;
    el.addEventListener("click", function()
        {
            el.innerText = i++;
        }
    )
}