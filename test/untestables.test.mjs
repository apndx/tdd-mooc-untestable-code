import { expect } from "chai";
import { Untestables } from "../src/untestables.mjs";

describe("Global variable", () => {
  const untestables = new Untestables();

  it("returns an expected initial value", () => {
    expect(untestables.getGlobalVariable()).equal(0);
  });

  it("returns new added value", () => {
    untestables.addToGlobal();
    expect(untestables.getGlobalVariable()).equal(1);
  });
});

describe("A file", () => {
  const untestables = new Untestables();
  untestables.deleteFile("testfile.json");

  it("can be created and read", () => {
    untestables.createJsonFile("testfile.json", {"testContent": "This is test"});
    const text = untestables.readJsonFile("testfile.json");
    expect(text.testContent).equal("This is test");
  });

  it("can be named using time as a variable", () => {
    const now = Date().toString();
    console.log('Now:', now)
    untestables.createJsonFile(`${now}.json`, {"time": now});
    const text = untestables.readJsonFile(`${now}.json`);
    expect(text.time).equal(now);
    untestables.deleteFile(`${now}.json`);
  });
});

describe("Random number generator", () => {
  const untestables = new Untestables();
  it("gives different number series", () => {
    const first = untestables.giveTenRandomNumbersBetween0And100();
    const second = untestables.giveTenRandomNumbersBetween0And100();
    expect(first).to.not.equal(second);
  });

});