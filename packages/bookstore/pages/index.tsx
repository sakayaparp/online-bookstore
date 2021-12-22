import type { NextPage } from "next";
import { useEffect, useState } from "react";
import TableCustome from "../components/Table/TableCustome";

const Home: NextPage = () => {
  const [books, setBook] = useState([]);

  useEffect(() => {
    const url = "http://localhost:3001/api/books";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setBook(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  if (books.length > 0) {
    return (
      <div>
        <TableCustome thead={books[0]} tbody={books} />
      </div>
    );
  } else {
    return <></>;
  }
};

export default Home;
