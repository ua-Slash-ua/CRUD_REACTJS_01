import { useEffect, useState } from 'react';
import type {Book} from "../../../types.ts";
import {getBooks} from "../../../api/books/getBooks.ts";
import './home.css'


export function Home() {
    const [loading, setLoading] = useState(true);
    const [books, setBooks] = useState<Book[]>([]); // або просто []

    useEffect(() => {
        getBooks()
            .then(data => {
                setBooks(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Помилка:', error);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Завантаження...</p>;

    return (
        <div>
            <h1>Бібліотека книг</h1>
            {books.map((book: Book) => (
                <div key={book.id} className="book-item">
                    <h3>{book.title}</h3>
                    <p>Автор: {book.author}</p>
                    <p className={book.available ? '' : 'unavailable'}>
                        {book.available ? 'Доступна' : 'Недоступна'}
                    </p>
                </div>
            ))}

        </div>
    );
}
