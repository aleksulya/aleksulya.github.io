$(document).ready(function()
{
    $(".photo").hover(function()
    {	
        $(this).attr("src", "photo1.jpg");
    }, function()
    { 
        $(this).attr("src", "photo.jpg");
    });
});

document.getElementById('clicker').onclick = function() 
{
    var p = document.getElementById('hidden-text');
    var text = document.getElementById('clicker');
    if(p.style.display == 'block') 
    {
        p.style.display = 'none';
        text.innerText = "Кликните сюда, чтобы узнать меня подробнее"
    }
    else 
    {
        p.style.display = 'block';
        text.innerText = "Кликните сюда, чтобы скрыть информацию"
    }
    return false;
};
    