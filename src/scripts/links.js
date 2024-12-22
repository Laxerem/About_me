const links = {
    "github": "https://github.com/Laxerem",
    "steam": "https://steamcommunity.com/id/Laxerem",
    "music": "https://music.yandex.ru/users/grishaMas/playlists"
}

const containers = document.querySelectorAll(".image")
containers.forEach((element) => {
    element.addEventListener('click', () => {
        const key = element.classList[1]
        const link = links[key]
        if (link) {
            window.location.href = link
        }
    })
})