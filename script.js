const menu = document.querySelector(".dau-trang");
function capNhatChieuCaoMenu() {
    const chieuCao = menu.getBoundingClientRect().height;
    document.documentElement.style.setProperty(
        "--chieu-cao-menu",
        `${chieuCao}px`
    );
}
capNhatChieuCaoMenu();

const theoDoiMenu = new ResizeObserver(capNhatChieuCaoMenu);
theoDoiMenu.observe(menu);