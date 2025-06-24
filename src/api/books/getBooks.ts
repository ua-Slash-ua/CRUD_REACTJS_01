import type {Book} from "../../types.ts";
import {booksUrl} from "../../sourse/url.ts";

export async function getBooks():Promise<Book[]>{
    const response = await fetch(booksUrl);
    if (!response.ok) {
        throw new Error('Помилка при завантаженні книг');
    }
    return response.json();
}