const menuBtn = document.getElementById('menu-btn')
const mobileMenu = document.getElementById('mobile-menu')

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active')

    if (mobileMenu.classList.contains('closed')) {
        mobileMenu.classList.remove('closed')
        mobileMenu.classList.add('open')
    } else {
        mobileMenu.classList.remove('open')
        mobileMenu.classList.add('closed')
    }
})

mobileMenu.addEventListener('click', () => {
    menuBtn.classList.remove('active')
    mobileMenu.classList.remove('open')
    mobileMenu.classList.add('closed')
})