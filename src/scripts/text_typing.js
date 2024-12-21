class Typing {
    constructor(element) {
        this.element = element
        this.stream = null
        this.is_work = false
    }

    typing(text, delay = 65) {
        return new Promise((resolve) => { // Возвращаем промис
            this.is_work = true;
            let i = 0;
            this.stream = setInterval(() => {
                if (i < text.length) {
                    this.element.innerHTML += text.charAt(i);
                    i++;
                } else {
                    this.stop();
                    resolve(); // Резолвим промис, когда работа завершена
                }
            }, delay);
        });
    }

    stop() {
        clearInterval(this.stream)
        this.is_work = false
        console.log("DONE")
    }
}
class ElementTyping extends Typing {
    constructor(element, text_array) {
        super(element)
        this.element = element
        this.text_array = text_array
    }

    start_typing(change_delay=1000) {
        let i = 0;
        const func = () => {
            const text = text_array[i]
            if (i < text_array.length) {
                this.element.innerHTML = ''
                this.typing(text)
                .then(res => {
                    setTimeout(func, change_delay)
                })
                i++
            }
            else {
                i = 0
                setTimeout(func, change_delay)
            }
        }
        func()
    }
}

const text_array = [
    "A simple person who wants to be significant in the eyes of others.", 
    "Don't be afraid to make mistakes - it's much scarier when there aren't any.", 
    "I don't care about strangers. I'm not proud of it, in fact, it seems to me that we all lack a little empathy.", 
    "I'm thinking slowly. Many people say that this has its advantages, but it's not, I'm just slow.", 
    "Wow, thanks for reading this far."
]

const element = document.querySelector(".about_description")
const description = new ElementTyping(element, text_array)
description.start_typing(10000)