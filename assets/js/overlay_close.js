

function overlay_close(e_name)
{   
    var overlay = document.getElementById(e_name)
    overlay.style.display = 'none';
}

function overlay_open(e_name)
{   
    var overlay = document.getElementById(e_name)
    overlay.style.display = 'unset';
}
