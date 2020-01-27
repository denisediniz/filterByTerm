const filterByTerm = require("../src/filterByTerm.js");

describe("Filter function", () => {
  test("it should filter by a search term (google)", () => {
    // define a simple input
    const input = [
      { id: 1, url: "https://www.facebook.com/" },
      { id: 2, url: "https://www.google.com/" },
      { id: 3, url: "https://twitter.com/" }
    ];

    // define the expected result
    const output = [{ id: 2, url: "https://www.google.com/" }];

    // Tests
    // define the search term to return the expected output when the function is called
    expect(filterByTerm(input, "google")).toEqual(output);
    // define if an uppercase search term returns the same expected output
    expect(filterByTerm(input, "GOOGLE")).toEqual(output);
  });

  test("it should filter by a search term (fACEBOOK)", () => {
    const input = [
      { id: 1, url: "https://www.facebook.com/" },
      { id: 2, url: "https://www.google.com/" },
      { id: 3, url: "https://twitter.com/" },
      { id: 4, url: "https://developers.facebook.com/" }
    ];

    const output = [
      { id: 1, url: "https://www.facebook.com/" },
      { id: 4, url: "https://developers.facebook.com/" }
    ];

    expect(filterByTerm(input, "fACEBOOK")).toEqual(output);
  });

  test("it should throw an error when searchTerm is an empty string", () => {
    const input = [
      { id: 1, url: "https://www.facebook.com/" },
      { id: 2, url: "https://www.google.com/" },
      { id: 3, url: "https://twitter.com/" }
    ];

    const output = Error("searchTerm cannot be empty");

    // You must wrap the code in a function,
    // otherwise the error will not be caught and the assertion will fail.
    expect(()=>{
      filterByTerm(input, "");
    }).toThrowError(output);
  });
});