import {json} from '@sveltejs/kit';
import {formatDistanceToNow} from 'date-fns';
import type {Comic} from './Comic'

export async function GET() {
    let comic: Comic = await getComic()
    return json(comic)
}

async function getComic(): Promise<Comic> {
    let comic: Comic = {
        title: "",
        imageSrc: "",
        alt: "",
        date: ""
    }

    let rawComic = await fetchComic();

    comic.title = rawComic.safe_title;
    comic.imageSrc = rawComic.img;
    comic.alt = rawComic.alt;

    const date = new Date(rawComic.year, rawComic.month, rawComic.day)
    const dateLocale = date.toLocaleString()
    const relativeTime = buildRelativeTime(date)

    comic.date = `Published: ${dateLocale} (${relativeTime})`;

    return comic;
}

async function fetchComic(): Promise<RawComic> {
    const numberUrl = new URL("https://fwd.innopolis.university/api/hw2")
    numberUrl.searchParams.append("email", "s.dementev@innopolis.university")
    const number = await fetch(numberUrl).then(response => response.json())
    console.log(number)

    const comicUrl = new URL("https://fwd.innopolis.university/api/comic")
    comicUrl.searchParams.append("id", number)
    return await fetch(comicUrl).then(response => response.json())
}

function buildRelativeTime(date: Date): string {
    const dayJsString = buildDayJsString(date)
    return formatDistanceToNow(dayJsString, {addSuffix: true});
}

function buildDayJsString(date: Date): string {
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`
}

interface RawComic {
    safe_title: string,
    img: string,
    alt: string,
    year: number,
    month: number,
    day: number
}