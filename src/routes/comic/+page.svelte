<script lang="ts">
    import { formatDistanceToNow } from "date-fns"
    import { onMount } from "svelte"

    export const prerender = true

    let comic: Comic = {
        title: "",
        imageSrc: "",
        alt: "",
        date: "",
    }

    async function getComic(): Promise<Comic> {
        let comic: Comic = {
            title: "",
            imageSrc: "",
            alt: "",
            date: "",
        }

        let rawComic = await fetchComic()

        comic.title = rawComic.safe_title
        comic.imageSrc = rawComic.img
        comic.alt = rawComic.alt

        const date = new Date(rawComic.year, rawComic.month, rawComic.day)
        const dateLocale = date.toLocaleString()
        const relativeTime = buildRelativeTime(date)

        comic.date = `Published: ${dateLocale} (${relativeTime}))`

        return comic
    }

    onMount(async () => {
        comic = await getComic()
    })

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
        return formatDistanceToNow(dayJsString, { addSuffix: true })
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

    interface Comic {
        title: string,
        imageSrc: string,
        alt: string,
        date: string
    }
</script>

<main>
    <div id="comic-part" class="structure-part">
        <h1 id="comic-title">{comic.title}</h1>
        <img id="comic-image" src={comic.imageSrc} alt={comic.alt}>
        <p id="upload-date">{comic.date}</p>
    </div>
</main>