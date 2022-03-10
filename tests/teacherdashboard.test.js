import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Classlist from "../src/teacherComponents/classlist/classlist";

const testClassListProps = {
  moreThanFour: [
    { count: "6", name: "Anita Percival", student_id: "s24", weekly: 9 },
  ],
  lessThanFour: [
    { count: "3", name: "Axel Foley", student_id: "s22", weekly: 9 },
  ],
  changeStudentSelected: jest.fn(),
};


describe("Class list renders", () => {
  it("the class list should render", () => {
    render(<Classlist {...testClassListProps} />);
  });

  it("the class list should display students who have read less than 4 times at the top", () => {
    const { getByTestId } = render(<Classlist {...testClassListProps} />);
    const actual = getByTestId("lessthan4");
    expect(actual).toHaveTextContent("Axel Foley");
  });

  it("the class list should display students who have read more than 4 times at the bottom", () => {
    const { getByTestId } = render(<Classlist {...testClassListProps} />);
    const actual = getByTestId("morethan4");
    expect(actual).toHaveTextContent("Anita Percival");
  });

  it("clicking a name calls the changeStudentSelected function", () => {
    const { getByTestId } = render(<Classlist {...testClassListProps} />);
    const actual = getByTestId("morethan4");
    fireEvent.click(actual);
    expect(testClassListProps.changeStudentSelected).toHaveBeenCalled();
  });
});


import PagesRead from "../src/teacherComponents/Graphs/pagesread";

const testPagesReadProps = {
   pagesRead: [50, 30, 70, 45, 12,45, 78]
  };

describe("Pages read graph renders", () => {

  it("the graph should render", () => {
    render(<PagesRead {...testPagesReadProps} />);
  });
    
    it("the graph should access the correct data from the pagesRead state", () => {
        render(<PagesRead {...testPagesReadProps} />);
        expect(testPagesReadProps.pagesRead[2]).toBe(70);
    })
});

import MinutesRead from "../src/teacherComponents/Graphs/minutesread";

const testMinutesReadProps = {
  pagesRead: [50, 30, 70, 45, 12, 45, 78],
};

describe("Minutes read graph renders", () => {
  it("the graph should render", () => {
    render(<MinutesRead {...testMinutesReadProps} />);
  });

  it("the graph should access the correct data from the minutesRead state", () => {
    render(<MinutesRead {...testMinutesReadProps} />);
    expect(testMinutesReadProps.pagesRead[2]).toBe(70);
  });
});

import BooksCompleted from "../src/teacherComponents/Graphs/booksfinished";

const testBooksCompletedProps = {
  pagesRead: [0, 5, 3, 10, 2, 2, 54],
};

describe("Books completed graph renders", () => {
  it("the graph should render", () => {
    render(<BooksCompleted {...testBooksCompletedProps} />);
  });

  it("the graph should access the correct data from the booksCompletedRead state", () => {
    render(<BooksCompleted {...testBooksCompletedProps} />);
    expect(testBooksCompletedProps.pagesRead[2]).toBe(3);
  });
});


