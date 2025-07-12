document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const formType = urlParams.get("form");

    const registerForm = document.getElementById("Register");
    const loginForm = document.getElementById("Login");
    const loginLink = document.getElementById("login-link");
    const registerLink = document.getElementById("register-link");

    function showLoginForm() {
        registerForm.style.display = "none";
        loginForm.style.display = "block";
        document.title = "Đăng nhập Shopee";
    }

    function showRegisterForm() {
        loginForm.style.display = "none";
        registerForm.style.display = "block";
        document.title = "Đăng ký Shopee";
    }

    // Xử lý khi vào trang từ index.html
    if (formType === "login") {
        showLoginForm();
    } else {
        showRegisterForm();
    }

    // Chuyển form khi nhấn nút trong authen.html
    loginLink.addEventListener("click", function (event) {
        event.preventDefault();
        showLoginForm();
    });

    registerLink.addEventListener("click", function (event) {
        event.preventDefault();
        showRegisterForm();
    });
});
