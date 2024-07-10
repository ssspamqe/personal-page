<script lang="ts">
    export let data: Comic;
</script>

<head>
    <meta name = "description" content = "Stepan Dementev's comic is Innopolis fwd course's API">
</head>

<main>
    <div id="comic-part" class="structure-part">
        <h1 id="comic-title">{data.title}</h1>
        <img id="comic-image" src={data.imageSrc} alt={data.alt}>
        <p id="upload-date">{data.date}</p>
    </div>
</main>