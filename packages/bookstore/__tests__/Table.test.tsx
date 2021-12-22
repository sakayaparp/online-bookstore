import { render, screen } from "@testing-library/react";
import TableCustome from "../components/Table/TableCustome";

describe("test Table component", () => {
  it("correctly rendered", () => {
    const books = [{ ISBN: "9971-5-0210-0", amount: 500 }];
    render(<TableCustome thead={books[0]} tbody={books} />);

    expect(screen.getByText("ISBN")).toBeInTheDocument();
  });
});
