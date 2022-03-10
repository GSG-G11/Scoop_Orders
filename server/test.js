const dbBuild = require("../server/database/config/build.js");
const connection = require("../server/database/config/connection");
const getData = require("../server/database/queries/getData");
const addUser = require("../server/database/queries/postData");

beforeEach(() => dbBuild());

afterAll(() => connection.end());

test("TEST INSERTION", () => {
  return addUser("mostafa", "gaza", 34).then((data) => {
    expect(data.rows[0].name).toBe("mostafa");
  });
});

test("TEST get users", () => {
  return getData().then((data) => {
    expect(data.rows.length).toBe(2);
  });
});
