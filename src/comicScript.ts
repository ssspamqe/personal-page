import {formatDistanceToNow} from 'date-fns';


const comicTitle = document.getElementById("comic-title") as HTMLHeadingElement
const comicImage = document.getElementById("comic-image") as HTMLImageElement
const comicDate = document.getElementById("upload-date") as HTMLParagraphElement

async function fillComicData() {
    const comic = await fetchComic()

    comicTitle.textContent = comic.safe_title
    comicImage.src = comic.img
    comicImage.alt = comic.alt

    const date = new Date(comic.year, comic.month, comic.day)
    const dateLocale = date.toLocaleString()
    const relativeTime = buildRelativeTime(date)

    comicDate.textContent = `Published: ${dateLocale} (${relativeTime})`
}

async function fetchComic(): Promise<Comic> {
    const numberUrl = new URL("https://fwd.innopolis.university/api/hw2")
    numberUrl.searchParams.append("email", "s.dementev@innopolis.university")
    const number = await fetch(numberUrl).then(response => response.json())
    console.log(number)

    const comicUrl = new URL("https://fwd.innopolis.university/api/comic")
    comicUrl.searchParams.append("id", number)
    return await fetch(comicUrl).then(response => response.json())
}

fillComicData()

function buildRelativeTime(date: Date): string {
    const dayJsString = buildDayJsString(date)
    return formatDistanceToNow(dayJsString, {addSuffix:true});
}

function buildDayJsString(date: Date): string {
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`
}

interface Comic {
    safe_title: string,
    img: string,
    alt: string,
    year: number,
    month: number,
    day: number
}