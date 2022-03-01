import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";


import BookProgressBar from "../src/studentcomponents/bookprogressbar";

const testProps = {
    currentBook: {
        percentagecomplete: "20",
        
    }
};

describe("Book progress bar", () => {
  it("the progress text should display the correct percentage", () => {
    const { getByTestId } = render(<BookProgressBar {...testProps} />);
    const actual = getByTestId("progress-text");
    expect(actual).toHaveTextContent("This book is 20% completed!");
  });
 
});
