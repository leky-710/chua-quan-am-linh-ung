const menu = document.querySelector(".dau-trang");

function capNhatChieuCaoMenu() {
    const chieuCao = menu.offsetHeight;
    document.documentElement.style.setProperty(
        "--chieu-cao-menu",
        chieuCao + "px"
    );
}

capNhatChieuCaoMenu();
window.addEventListener("resize", capNhatChieuCaoMenu);