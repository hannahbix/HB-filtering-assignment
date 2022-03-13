//no notes
const select = document.querySelector(".filter");

select.addEventListener("change", function (e){
    const chosen_immigrants = e.target.value;
    const currently_visible = document.querySelectorAll(".item.active");
    const make_visible = document.querySelectorAll(`.item.${chosen_immigrants}`);
    
    currently_visible.forEach(function (immigrants){
        immigrants.classList.remove("active");
    });

    make_visible.forEach(function(immigrants){
        immigrants.classList.add("active")
    });
});