//side bar

const menuItems = document.querySelectorAll('.menu-item');

// messages
const messagesNotifications = document.querySelector('#messages-notifications')
const messages = document.querySelector('.messages')

//theme 
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
let root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span')


//remove active class from menu items when one is clicked
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active')
    })
}

//active class for sidebar
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem()
        item.classList.add('active')

        if (item.id != 'notifications') {
            document.querySelector('.notification-popup').
            style.display = 'none'
        }else {
            document.querySelector('.notification-popup').
            style.display = 'block'

            document.querySelector('#notifications .notification-count').
            style.display = 'none'
        }
    })
})


//messages
messagesNotifications.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)'
    setTimeout(() => {
        messages.style.boxShadow = 'none'
},2000);
document.querySelector('#messages-notifications .notification-count').
style.display = 'none'
})


//Theme
//open theme modal
const openThemeModal = () => {
    themeModal.style.display ='grid'
}

//close theme modal
const closeThemeModal = (e) => {
    if (e.target.classList.contains('customize-theme')) {
        themeModal.style.display = 'none'
    }
}
themeModal.addEventListener('click', closeThemeModal);
theme.addEventListener('click', openThemeModal);

//Remove active class from font size whenever one is clicked
const removeSizesSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}





//fontSizes
fontSizes.forEach(size => {
    size.addEventListener('click', () => {
        removeSizesSelector();
        let fontSizes;
        size.classList.toggle('active');
        if(size.classList.contains('font-size-1')) {
            fontSizes = '10px';
            root.style.setProperty(' --sticky-top-left', '5.4rem')
            root.style.setProperty(' --sticky-top-left', '5.4rem')
        }else if(size.classList.contains('font-size-2')) {
            fontSizes = '13px'
            root.style.setProperty(' --sticky-top-left', '5.4rem')
            root.style.setProperty(' --sticky-top-left', '-7rem')
        }else if(size.classList.contains('font-size-3')) {
            fontSizes = '16px';
            root.style.setProperty(' --sticky-top-left', '-2rem')
            root.style.setProperty(' --sticky-top-left', '-17rem')
        }else if(size.classList.contains('font-size-4')) {
            fontSizes = '19px';
            root.style.setProperty(' --sticky-top-left', '5rem')
            root.style.setProperty(' --sticky-top-left', '-25rem')
          
        }else if (size.classList.contains('font-size-5')) {
            fontSizes = '22px';
            root.style.setProperty(' --sticky-top-left', '-12rem')
            root.style.setProperty(' --sticky-top-left', '-25rem')
        }
        // change font size of the root html element
        document.querySelector('html').style.fontSize = fontSizes;
    })
})


//remove active class from color
// const changeActiveColor = () => {
//     colorPalette.forEach(colorpicker => {
//         color
//     })
// }




//color
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primary;

        if(color.classList.contains('color-1')) {
            primary = '252'
        }else if(color.classList.contains('color-2')){
            primary = '52'
        }else if(color.classList.contains('color-3')) {
            primary = '352'
        }else if(color.classList.contains('color-4')) {
            primary = '152'
        }else if(color.classList.contains('color-5')) {
            primary = '202';
        }
        color.classList.add('active');
        root.style.setProperty('--primary-color-hue', primary)
    })
})