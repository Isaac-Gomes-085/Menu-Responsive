const toggle_btn = document.querySelector('.toggle_btn')
const toggle_btn_icon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.mostrar_menu')

toggle_btn.onclick = function (params) {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggle_btn_icon.classList = isOpen 
    ? 'fa-solid fa-xmark' 
    : 'fa-solid fa-bars'

}
