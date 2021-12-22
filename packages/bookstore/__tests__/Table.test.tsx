import { render, screen } from "@testing-library/react";
import TableCustome from "../components/Table/TableCustome";

describe("test Table component", () => {
  it("correctly rendered", () => {
    const books = [{ ISBN: "9971-5-0210-0", amount: 500 }];
    render(<TableCustome thead={books[0]} tbody={books} />);
    const tbody = screen.getByTestId("table-component-tbody");

    expect(screen.getByText("ISBN")).toBeInTheDocument();
    expect(screen.getByText("amount")).toBeInTheDocument();
    expect(tbody.querySelectorAll("tr").length).toBe(1);
    expect(tbody.querySelector("tr td").innerHTML).toEqual("9971-5-0210-0");
  });
});
