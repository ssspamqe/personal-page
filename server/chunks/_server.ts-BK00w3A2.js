import { j as json } from './index-CvuFLVuQ.js';
import { formatDistanceToNow } from 'date-fns';

async function GET() {
  let comic = await getComic();
  return json(comic);
}
async function getComic() {
  let comic = {
    title: "",
    imageSrc: "",
    alt: "",
    date: ""
  };
  let rawComic = await fetchComic();
  comic.title = rawComic.safe_title;
  comic.imageSrc = rawComic.img;
  comic.alt = rawComic.alt;
  const date = new Date(rawComic.year, rawComic.month, rawComic.day);
  const dateLocale = date.toLocaleString();
  const relativeTime = buildRelativeTime(date);
  comic.date = `Published: ${dateLocale} (${relativeTime})`;
  return comic;
}
async function fetchComic() {
  const numberUrl = new URL("https://fwd.innopolis.university/api/hw2");
  numberUrl.searchParams.append("email", "s.dementev@innopolis.university");
  const number = await fetch(numberUrl).then((response) => response.json());
  console.log(number);
  const comicUrl = new URL("https://fwd.innopolis.university/api/comic");
  comicUrl.searchParams.append("id", number);
  return await fetch(comicUrl).then((response) => response.json());
}
function buildRelativeTime(date) {
  const dayJsString = buildDayJsString(date);
  return formatDistanceToNow(dayJsString, { addSuffix: true });
}
function buildDayJsString(date) {
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`;
}

export { GET };
//# sourceMappingURL=_server.ts-BK00w3A2.js.map
