import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import DarkModeToggle from "./DarkModeToggle";

describe("DarkModeToggle", () => {
  beforeEach(() => {
    document.documentElement.removeAttribute("data-theme");
    document.documentElement.removeAttribute("data-mode");
  });

  it("renders both toggle buttons", () => {
    render(<DarkModeToggle />);
    expect(screen.getByRole("button", { name: /toggle dark mode/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /toggle mode/i })).toBeInTheDocument();
  });

  it("toggles dark mode and sets data-theme", () => {
    render(<DarkModeToggle />);
    const darkButton = screen.getByRole("button", { name: /toggle dark mode/i });
    expect(document.documentElement.getAttribute("data-theme")).toBe("light");
    fireEvent.click(darkButton);
    expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
    fireEvent.click(darkButton);
    expect(document.documentElement.getAttribute("data-theme")).toBe("light");
  });

  it("toggles mode and sets data-mode", () => {
    render(<DarkModeToggle />);
    const modeButton = screen.getByRole("button", { name: /toggle mode/i });
    expect(document.documentElement.getAttribute("data-mode")).toBe("editorial");
    fireEvent.click(modeButton);
    expect(document.documentElement.getAttribute("data-mode")).toBe("party");
    fireEvent.click(modeButton);
    expect(document.documentElement.getAttribute("data-mode")).toBe("editorial");
  });

  it("shows correct button labels", () => {
    render(<DarkModeToggle />);
    expect(screen.getByText(/☀️ Light/i)).toBeInTheDocument();
    expect(screen.getByText(/📰 Editorial/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /toggle dark mode/i }));
    expect(screen.getByText(/🌙 Dark/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /toggle mode/i }));
    expect(screen.getByText(/🎉 Party/i)).toBeInTheDocument();
  });
});