import { error } from '@sveltejs/kit';
import type {Comic} from "../api/comic/Comic";

export async function load({ fetch }) {
    const res = await fetch('/api/comic').then();
    let comic:Comic = await res.json();
    if (res.ok) return comic
    throw error(500);
}