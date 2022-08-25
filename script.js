let buttons = document.querySelectorAll("button.number");
let inputStr = "";
let input = document.querySelector("input");
let reset = document.querySelector(".reset");
let del = document.querySelector(".del");
let equal = document.querySelector(".equal");


buttons.forEach((btn) => {
    btn.addEventListener("click", function(event) {

        inputStr += this.innerText;

        input.value = inputStr;
        equal.removeAttribute("disabled");
    });

});
reset.addEventListener("click", (e) => {
    inputStr = "";
    input.value = "";
    equal.setAttribute("disabled", "true");


});
equal.addEventListener("click", (e) => {
    try {
        inputStr = inputStr.replace("X", "*");

        let result = eval(inputStr).toFixed(2);
        let newResult = check(result);

        input.value = newResult;
        inputStr = "";
        equal.setAttribute("disabled", "true");
    } catch (e) {
        input.value = "Syntax Error";
        inputStr = "";

        setTimeout(() => {
            input.value = "";
        }, 1500);
    }


});

del.addEventListener("click", (e) => {
    let temp = inputStr.slice(0, inputStr.length - 1);
    inputStr = temp;
    input.value = inputStr;

});

let check = (number) => {

    internationalNumberFormat = new Intl.NumberFormat('en-US');

    return internationalNumberFormat.format(number);
}

let dots = document.querySelectorAll(".dot");
dots.forEach((dot, i) => {

    dot.addEventListener("click", (e) => {
        dots.forEach((j) => {
            j.classList.remove("active");
        });
        e.target.classList.add("active");

        document.querySelector("html").setAttribute("data-theme", `theme-${i+1}`)
    })

})