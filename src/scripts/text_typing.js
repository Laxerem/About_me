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
    "A website about yourself? Is everyone really that interested? I don't think so..",
    "~Упс, извините, переводчик решил уйти в айти, ну и ладно, давайте же поддержим его!",
    "Yes, maybe I say this a lot, but God, I'm NOT A DESIGNER.",
    "I love my logo, it's mine! And I don't care that this is the logo of some CS-GO team, this logo has been with me for 4 years now, and I'm not going to change it in this life.",
    "Many people say that you need to jump over obstacles, but I say - it's better to get around them.",
    "An uninteresting fact: I was born in the year of the rat, no wonder why I like killing my teammates in the game so much.",
    "Don't be afraid to make mistakes - it's much scarier when there aren't any.",
    "I often run after people I find interesting, probably because I don't know how to attract them. I'm sorry if you were probably talking to me out of politeness.",
    "Oh, how do you like my photo? I rarely like my photos, but I liked this photo.",
    "I don't care about strangers. I'm not proud of it, in fact, it seems to me that we all lack a little empathy.", 
    "I'm thinking slowly. Many people say that this has its advantages, but it's not, I'm just slow.",
    "Wow, thanks for reading this far.",
    "'Nobody cares' is a word I love and hate. It's so simple, but it's so offensive. It's just that sometimes it's said too often, and not to the people who deserve it.  We're all human beings, and we want attention, you just feel good about him.",
    "It may seem to you that I am an optimist, but often, when I come home after class, I want to fall into the abyss. Sometimes I don't understand people..."
]

const element = document.querySelector(".about_description")
const description = new ElementTyping(element, text_array)
description.start_typing(7000)