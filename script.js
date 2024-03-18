

function ToggleMenu()
{
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function ToggleExperience()
{
    var disp_list = ['none', 'block'];
    for (let index = 0; index < 4; index++) {
        document.getElementsByClassName('section__exp_tasks')[index].style.display = 'none';
        const btn = document.getElementsByClassName('section__exp_expand_button')[index];
        btn.addEventListener("click", function() {
            const lst = document.getElementsByClassName('section__exp_tasks')[index];
            if(lst.style.display == disp_list[0])
                lst.style.display = disp_list[1];
            else
                lst.style.display = disp_list[0];
    }
    );
}
}

ToggleExperience();

var text = ["Hello !", "Hallo !","नमस्ते !"];
var counter = 1;
var elem = $("#secion__text_p1");
setInterval(change, 3000);
function change() {
    elem.fadeOut(function(){
        elem.html(text[counter]);
        counter++;
        if(counter >= text.length) { counter = 0; }
        elem.fadeIn(700)
    });
}