import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Index from "../pages/index"


// Testing if login page renders
describe("Index page", () => {
  it("should render", () => {
      render(<Index />);
      const title = screen.getByText("Book Worms")
      expect(title).toBeInTheDocument()
  });
});

