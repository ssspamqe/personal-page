<script lang="ts">
    import "../styles.css"
    import type { Comic } from "../api/comic/Comic"

    export const prerender = true
    export let data: Comic
</script>

<main>
    <div id="comic-part" class="structure-part">
        <h1 id="comic-title">{data.title}</h1>
        <img id="comic-image" src={data.imageSrc} alt={data.alt}>
        <p id="upload-date">{data.date}</p>
    </div>
</main>