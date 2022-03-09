// const dbBuild = require('/database/config/build');
// const connection = require('../database/config/connection');
// const getData = require('../database/queries/getData');
// const addUser = require('../database/queries/postData');


// beforeEach(() => dbBuild());

// afterAll(() => connection.end());


// test('TEST INSERTION', () => {
//   return addUser('mostafa', 'gaza',34)
//     .then((data) => {
//       expect(data.rows[0].name).toBe('mostafa');
//     })
// });

// test('TEST get users', () => {
//   return getData()
//     .then((data) => {
//        expect(data.rows.length).toBe(2);
//     })
// });