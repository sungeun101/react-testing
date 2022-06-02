import { render, screen } from "@testing-library/react";
import Jumbotron from "./Jumbotron";

it("displays the heading", () => {
  render(<Jumbotron />);
  // screen.getByText(/welcome to our site!/i);
  screen.getByRole("heading", { name: /welcome to our site!/i });
});
