import { render, screen } from "@/test-utils";
import Page from "./page";

describe("Page", () => {
  it("should render successfully", () => {
    render(<Page />);
    expect(screen.getByText(/Hello world/)).toBeTruthy();
  });
});
