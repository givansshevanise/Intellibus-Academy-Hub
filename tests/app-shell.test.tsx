import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, it } from "vitest";

import { AppShell } from "../src/app/AppShell";

function renderShell(path = "/") {
  render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route element={<AppShell />}>
          <Route index element={<p>Home route</p>} />
          <Route path="/community/cohort" element={<p>Cohort route</p>} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
}

describe("AppShell", () => {
  it("renders shared landmarks and real navigation links", () => {
    renderShell("/community/cohort");

    expect(
      screen.getByRole("link", { name: /intellibus academy hub home/i })
    ).toHaveAttribute("href", "/");
    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
    expect(screen.getByText("Cohort route")).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: "Community" })[0]).toHaveClass(
      "text-primary"
    );
    expect(screen.getByRole("link", { name: /cohort 2026/i })).toHaveAttribute(
      "href",
      "/community/cohort"
    );
  });

  it("opens the keyboard-accessible mobile navigation dialog", () => {
    renderShell();

    fireEvent.click(screen.getByRole("button", { name: /open navigation menu/i }));

    expect(screen.getByRole("heading", { name: "Navigation" })).toBeInTheDocument();
    expect(screen.getByRole("navigation", { name: /mobile navigation/i }));
  });
});
