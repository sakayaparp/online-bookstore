import {render, screen} from "@testing-library/react";
import TableCustome from "../components/Table/TableCustome";

describe("test Table component", () => {
    it("render table component correctly incase no book data ", () => {
        const books = [];
        render(<TableCustome thead={books} tbody={books}/>);
        const thead = screen.getByTestId("table-header");
        const tbody = screen.getByTestId("table-body");

        expect(thead.querySelectorAll("tr").length).toBe(1);
        expect(tbody.querySelectorAll("tr").length).toBe(0);
        expect(thead.querySelectorAll("tr th").length).toBe(0);
        expect(tbody.querySelectorAll("tr td").length).toBe(0);
    });

    it("render table component correctly incase all book data are null", () => {
        const books = [{
            id: null,
            ISBN: null,
            title: null,
            authors: null,
            amount: null,
            price: null,
            coverImage: null,
            description: null,
            categoryId: null
        }];
        render(<TableCustome thead={books[0]} tbody={books}/>);
        const thead = screen.getByTestId("table-header");
        const tbody = screen.getByTestId("table-body");

        expect(thead.querySelectorAll("tr").length).toBe(1);
        expect(tbody.querySelectorAll("tr").length).toBe(1);
        expect(thead.querySelectorAll("tr th").length).toBe(9);
        expect(tbody.querySelectorAll("tr td").length).toBe(9);
    });

    it("render table component correctly incase has 1 book data", () => {
        const books = [{
            id: 1,
            ISBN: "9971-5-0210-0",
            title: "Mock Book Name",
            authors: "Authors",
            amount: 500,
            price: 100,
            coverImage: "./image.jpg",
            description: "Lopem Lopem Lopem",
            categoryId: "123e4567-e89b-12d3-a456-426614174000"
        }];

        render(<TableCustome thead={books[0]} tbody={books}/>);
        const thead = screen.getByTestId("table-header");
        const tbody = screen.getByTestId("table-body");

        expect(thead.querySelectorAll("tr").length).toBe(1);
        expect(thead.querySelectorAll("tr th").length).toBe(9);
        expect(tbody.querySelectorAll("tr").length).toBe(1);
        expect(tbody.querySelectorAll("tr td").length).toBe(9);
    });

    it("render table component with show header value correctly", () => {
        const books = [{
            id: 1,
            ISBN: "9971-5-0210-0",
            title: "Mock Book Name",
            authors: "Authors",
            amount: 500,
            price: 100,
            coverImage: "./image.jpg",
            description: "Lopem Lopem Lopem",
            categoryId: "123e4567-e89b-12d3-a456-426614174000"
        }];

        render(<TableCustome thead={books[0]} tbody={books}/>);
        const thead = screen.getByTestId("table-header");

        //loop to check each header column value
        thead.querySelectorAll("tr th").forEach((header_col, index) => {
            const actual_value = header_col.textContent
            const expected_value = Object.keys(books[0])[index]
            expect(actual_value.toString()).toEqual(expected_value.toString())
        })
    });

    it("render table component with show details value correctly", () => {
        const books = [{
            id: 1,
            ISBN: "9971-5-0210-0",
            title: "Mock Book Name",
            authors: "Authors",
            amount: 500,
            price: 100,
            coverImage: "./image.jpg",
            description: "Lopem Lopem Lopem",
            categoryId: "123e4567-e89b-12d3-a456-426614174000"
        }];

        render(<TableCustome thead={books[0]} tbody={books}/>);
        const tbody = screen.getByTestId("table-body");

        //loop to check each book value
        tbody.querySelectorAll("tr").forEach((row, index) => {
            const actual_value = row.querySelectorAll("td").item(index).textContent
            const expected_value = Object.values(books[0])[index]
            expect(actual_value.toString()).toEqual(expected_value.toString())
        });
    });

    it("render table component correctly incase multiplebook book data", () => {
        const books = [{
            id: 1,
            ISBN: "9971-5-0210-0",
            title: "Mock Book Name",
            authors: "Authors",
            amount: 500,
            price: 100,
            coverImage: "./image.jpg",
            description: "Lopem Lopem Lopem",
            categoryId: "123e4567-e89b-12d3-a456-426614174000"
        }, {
            id: 2,
            ISBN: "9971-5-0210-1",
            title: "Mock 2 Book Name",
            authors: "Authors na ja",
            amount: 600,
            price: 1000,
            coverImage: "./image.jpg",
            description: "Lopem Lopem Lopem eiei",
            categoryId: "123e4567-e89b-12d3-a456-426614174111"
        }];

        render(<TableCustome thead={books[0]} tbody={books}/>);
        const thead = screen.getByTestId("table-header");
        const tbody = screen.getByTestId("table-body");

        expect(thead.querySelectorAll("tr").length).toBe(1);
        expect(thead.querySelectorAll("tr th").length).toBe(9);
        expect(tbody.querySelectorAll("tr").length).toBe(2); //2 books
        expect(tbody.querySelectorAll("tr td").length).toBe(18);
    });

    it("render table component with show details value correctly incase multiplebook book data", () => {
        const books = [{
            id: 1,
            ISBN: "9971-5-0210-0",
            title: "Mock Book Name",
            authors: "Authors",
            amount: 500,
            price: 100,
            coverImage: "./image.jpg",
            description: "Lopem Lopem Lopem",
            categoryId: "123e4567-e89b-12d3-a456-426614174000"
        }, {
            id: 2,
            ISBN: "9971-5-0210-1",
            title: "Mock 2 Book Name",
            authors: "Authors na ja",
            amount: 600,
            price: 1000,
            coverImage: "./image.jpg",
            description: "Lopem Lopem Lopem eiei",
            categoryId: "123e4567-e89b-12d3-a456-426614174111"
        }];
        render(<TableCustome thead={books[0]} tbody={books}/>);
        const tbody = screen.getByTestId("table-body");

        tbody.querySelectorAll("tr").forEach((row, book_index) => {
            row.querySelectorAll("td").forEach((col, value_index) => {
                const actual_value = col.textContent
                const expected_value = Object.values(books[book_index])[value_index]
                expect(actual_value.toString()).toEqual(expected_value.toString())
            });
        })
    });
});
