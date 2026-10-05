const chain = document.getElementById("chain");

const loginForm = document.querySelector(".login");

const registerForm = document.querySelector(".register");

const registerLink =
    document.getElementById("registerLink");

const loginLink =
    document.getElementById("loginLink");


let lightOn = false;

let registerMode = false;


chain.addEventListener("click", function () {

  
    chain.classList.add("pulling");


    setTimeout(function () {

        chain.classList.remove("pulling");

        lightOn = !lightOn;

        document.body.classList.toggle(
            "light-on",
            lightOn
        );


        

        if (lightOn) {

            registerMode = !registerMode;

            updateForm();

        }

    }, 150);

});



function updateForm() {

    if (registerMode) {

        loginForm.classList.remove("active");

        registerForm.classList.add("active");

    }

    else {

        registerForm.classList.remove("active");

        loginForm.classList.add("active");

    }

}




registerLink.addEventListener(
    "click",
    function (event) {

        event.preventDefault();

        registerMode = true;

        lightOn = true;

        document.body.classList.add(
            "light-on"
        );

        updateForm();

    }
);


loginLink.addEventListener(
    "click",
    function (event) {

        event.preventDefault();

        registerMode = false;

        lightOn = true;

        document.body.classList.add(
            "light-on"
        );

        updateForm();

    }
);


document
    .querySelectorAll("form")
    .forEach(function (form) {

        form.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                alert(
                    registerMode
                    ? "Registration successful! (Demo)"
                    : "Login successful! (Demo)"
                );

            }
        );

    });