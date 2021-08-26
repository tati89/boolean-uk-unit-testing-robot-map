const { printPosition } = require("../print");

describe("Robot position", () => {
  it("Test that position doesn't go outside 10*10 grid", () => {
    const currentPosition = { x: 4, y: 5 };
    const output = `Robot is at { x: ${4}, y: ${5} }`;

    expect(printPosition(currentPosition)).toEqual(output);
  });
});

describe("Robot position", () => {
  it("Test that position doesn't go outside 10*10 grid", () => {
    const currentPosition = { x: 6, y: 5 };
    const output = `Robot is at { x: ${6}, y: ${5} }`;

    expect(printPosition(currentPosition)).toEqual(output);
  });
});

describe("Robot position", () => {
  it("Test that position doesn't go outside 10*10 grid", () => {
    const currentPosition = { x: 5, y: 6 };
    const output = `Robot is at { x: ${5}, y: ${6} }`;

    expect(printPosition(currentPosition)).toEqual(output);
  });
});
