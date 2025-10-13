console.log(db)


const containerChat = document.querySelector('#chat-container')
const bodyChat = containerChat.querySelector('#chat-body')
const boxChat = containerChat.querySelector('#chat-box')
const formChat = containerChat.querySelector('#form-chat-footer')
const chatToggle = containerChat.querySelector('#chatToggle')
const closeChat = containerChat.querySelector('#close-btn')

const messages = [
    {
        isBot: true,
        content: "Bonjour ! Comment puis-je vous aider ?"
    }
]



function updateMessBox() {
    bodyChat.innerHTML = ''
    messages.forEach(mess => {
        const div = document.createElement('div')
        div.classList.add('message')
        div.classList.add(mess.isBot ? "bot" : "user")
        div.innerText = mess.content ?? ''

        bodyChat.appendChild(div)
    })
}

formChat.addEventListener('submit', (e) => {
    e.preventDefault()
    const form = e.target
    const input = form.querySelector('input')
    const val = input.value.trim()
    if (val) {
        messages.push({
            isBot: false,
            content: val
        })
        updateMessBox()
    }
    form.reset()
})

closeChat.addEventListener('click', (e) => {
    if (!boxChat.classList.contains('hide-chat')) {
        boxChat.classList.add('hide-chat')
    }
})

chatToggle.addEventListener('click', (e) => {
    // if (!boxChat.classList.contains('hide-chat')) {
    //     boxChat.classList.add('hide-chat')
    // }
    if (boxChat.classList.contains('hide-chat')) {
        boxChat.classList.remove('hide-chat')
    }
})

updateMessBox()




// foction utils
const USER_CART_KEY = 'USER_CART'

function saveCartUser(cart) {
    localStorage.setItem(USER_CART_KEY, JSON.stringify(cart))
}

function getCartUser() {
    return JSON.parse(localStorage.getItem(USER_CART_KEY))
}


//fake
saveCartUser(db?.paniers[0])

