import type {NextPage} from 'next'
import {useEffect, useState} from "react";

const Home: NextPage = () => {
    const [books, setBook] = useState([]);

    useEffect(() => {
        const url = "http://localhost:3001/api/books";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json);
                setBook(json);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    const renderRow = () => {
        return books.map(book => {
            return (
                // eslint-disable-next-line react/jsx-key
                <tr key={book.ISBN}>
                    <td>{book.ISBN}</td>
                    <td>{book.title}</td>
                    <td>{book.authors}</td>
                    <td>{book.amount}</td>
                    <td>{book.price}</td>
                    <td>{book.description}</td>
                </tr>)
        })
    }

    return (
        <div>
            <table>
                <th>
                    <th>ISBN</th>
                    <th>title</th>
                    <th>authors</th>
                    <th>amount</th>
                    <th>price</th>
                    <th>description</th>
                </th>
                {renderRow()}
            </table>
        </div>
    )
}

export default Home
