import {render, screen} from "@testing-library/react";
import TableCustome from "../components/Table/TableCustome";

describe("test Table component", () => {
    it("render default page incase no book data avaliable", () => {
        const books = [{}];
        render(<TableCustome thead={books[0]} tbody={books}/>);
        const thead = screen.getByTestId("table-header");
        const tbody = screen.getByTestId("table-body");

        expect(thead.querySelectorAll("tr").length).toBe(1);
        expect(tbody.querySelectorAll("tr").length).toBe(1);
        expect(thead.querySelectorAll("tr th").length).toBe(0);
        expect(tbody.querySelectorAll("tr td").length).toBe(0);
    });

    it("render table component correctly incase multiplebook book data avaliable", () => {
        const books = [{
            id: 1,
            ISBN: "9971-5-0210-0",
            title: "Mock Book Name",
            authors: "Authors",
            amount: 500,
            price: 100,
            coverImage: "./image.jpg",
            description: "Lopem Lopem Lopem",
            categoryId: "123e4567-e89b-12d3-a456-426614174000",
            createdAt: null,
            updatedAt: null
        }];

        render(<TableCustome thead={books[0]} tbody={books}/>);
        const thead = screen.getByTestId("table-header");
        const tbody = screen.getByTestId("table-body");
        expect(thead.querySelectorAll("tr").length).toBe(1);
        expect(thead.querySelectorAll("tr th").length).toBe(11);
        expect(tbody.querySelectorAll("tr").length).toBe(1);
        expect(tbody.querySelectorAll("tr td").length).toBe(11);

        // check header value, table value
        thead.querySelectorAll("tr th").forEach((header_col, header_index) => {
            tbody.querySelectorAll("tr").forEach((row, book_index) => {
                const actual_value = row.querySelectorAll("td").item(header_index).textContent
                const expected_value = Object.values(books[book_index])[header_index]
                if (expected_value === null) {
                    expect(actual_value.toString()).toEqual("")
                } else {
                    expect(actual_value.toString()).toEqual(expected_value.toString())
                }
            })
        });
    });

    it("render table component correctly incase multiplebook book data avaliable", () => {
        const books = [{
            id: 1,
            ISBN: "9971-5-0210-0",
            title: "Mock Book Name",
            authors: "Authors",
            amount: 500,
            price: 100,
            coverImage: "./image.jpg",
            description: "Lopem Lopem Lopem",
            categoryId: "123e4567-e89b-12d3-a456-426614174000",
            createdAt: null,
            updatedAt: null
        }, {
            id: 2,
            ISBN: "9971-5-0210-1",
            title: "Mock 2 Book Name",
            authors: "Authors na ja",
            amount: 600,
            price: 1000,
            coverImage: "./image.jpg",
            description: "Lopem Lopem Lopem eiei",
            categoryId: "123e4567-e89b-12d3-a456-426614174111",
            createdAt: null,
            updatedAt: null
        }];

        render(<TableCustome thead={books[0]} tbody={books}/>);
        const thead = screen.getByTestId("table-header");
        const tbody = screen.getByTestId("table-body");
        expect(thead.querySelectorAll("tr").length).toBe(1);
        expect(thead.querySelectorAll("tr th").length).toBe(11);
        expect(tbody.querySelectorAll("tr").length).toBe(2);
        expect(tbody.querySelectorAll("tr td").length).toBe(22);

        // check header value, table value
        thead.querySelectorAll("tr th").forEach((header_col, header_index) => {
            tbody.querySelectorAll("tr").forEach((row, book_index) => {
                const actual_value = row.querySelectorAll("td").item(header_index).textContent
                const expected_value = Object.values(books[book_index])[header_index]
                if (expected_value === null) {
                    expect(actual_value.toString()).toEqual("")
                } else {
                    expect(actual_value.toString()).toEqual(expected_value.toString())
                }
            })
        });
    });
});
