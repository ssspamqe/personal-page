const comicTitle = document.getElementById("comic-title") as HTMLHeadingElement
const comicImage = document.getElementById("comic-image") as HTMLImageElement
const comicDate = document.getElementById("upload-date") as HTMLParagraphElement
async function fetchData() {
    const numberUrl = new URL("https://fwd.innopolis.university/api/hw2")
    numberUrl.searchParams.append("email", "s.dementev@innopolis.university")
    const number = await fetch(numberUrl).then(response => response.json())

    const comicUrl = new URL("https://fwd.innopolis.university/api/comic")
    comicUrl.searchParams.append("id", number)
    const comic = await fetch(comicUrl).then(response => response.json())

    comicTitle.textContent = comic.safe_title
    comicImage.src = comic.img
    comicImage.alt = comic.alt
    const dateLocale = new Date(comic.year, comic.month, comic.day).toLocaleString()
    comicDate.textContent = `Published: ${dateLocale}`
}

fetchData()
