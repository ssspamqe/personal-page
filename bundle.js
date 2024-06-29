document.getElementById("comic-title");
document.getElementById("comic-image");
document.getElementById("upload-date");
async function fillComicData() {
    console.log("filling comic data");
    await fetchComic();
    //
    // comicTitle.textContent = comic.safe_title
    // comicImage.src = comic.img
    // comicImage.alt = comic.alt
    //
    // const date = new Date(comic.year, comic.month, comic.day)
    // const dateLocale = date.toLocaleString()
    // const relativeTime = buildRelativeTime(date)
    //
    // comicDate.textContent = `Published: ${dateLocale} (${relativeTime}))`
}
async function fetchComic() {
    console.log("in ethod");
    const numberUrl = new URL("https://fwd.innopolis.university/api/hw2");
    numberUrl.searchParams.append("email", "s.dementev@innopolis.university");
    const number = await fetch(numberUrl).then(response => response.json());
    console.log(number);
    //
    // const comicUrl = new URL("https://fwd.innopolis.university/api/comic")
    // comicUrl.searchParams.append("id", number)
    // return await fetch(comicUrl).then(response => response.json())
}
fillComicData();
