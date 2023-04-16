import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders app", () => {
    render(<App />);
});

test("renders heading", () => {
    render(<App />);
    expect(
        screen.getByRole("heading", { name: /Ben & Hellen's wedding/ })
    ).toBeInTheDocument();
});

test("renders image uploader", () => {
    render(<App />);
    expect(screen.getByText(/Upload your photos here!/)).toBeInTheDocument();
});
