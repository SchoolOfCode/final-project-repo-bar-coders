import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Dictionary from '../pages/dictionary'


// Testing to see if dictionary page renders
// describe("Dictionary page", () => {
//     it("should render", () => {
//         render(<Dictionary />);
//     });
//   });


// The function that is being tested
// async function withFetch() {
//   const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/`)
//   const json = await res.json()
//   return json
// }

// Mock the fetch
// const unmockedFetch = global.fetch

// beforeAll(() => {
//   global.fetch = () =>
//     Promise.resolve({
//         json: () => Promise.resolve([]),
//     })
// })

// afterAll(() => {
//     global.fetch = unmockedFetch
// })

// // The test
// describe('withFetch', () => {
//     test('works', async () => {
//         const json = await withFetch()
//         expect(Array.isArray(json)).toEqual(true)
//         expect(json.length).toEqual(0)
//     })
// })

// describe("When the definition of a word is searched for", () => {
//     beforeEach(async () => {
//         definition = await getDefinition();
//     })
// })

// it("The correct definition should be returned", () => {
//     expect(affiliate).toEqual({""})
// })


// The function that is being tested
async function getDefinition(searchWord) {
    try {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`)
    const data = await response.json()
    const meanings = data[0].meanings[0].definitions[0].definition;
    console.log(meanings)
    return meanings

    } catch {
        return "failed"
    }
  }


//   test('the data is peanut butter', () => {
//     return getDefinition("affiliate").then(data => {
//       expect(data).toBe('peanut butter');
//     });
//   });

  
describe("When the definition of a word is searched", () => {
    let define;
    beforeEach(async () => {
        define = await getDefinition("affiliate");
    });

    it("The correct definition should be returned", () => {
        expect(define).toEqual("Someone or something, especially, a television station, that is associated with a larger, related organization, such as a television network; a member of a group of associated things.")
    })
})


// const MOCK_WORD = "affiliate"
// const MOCK_DEFINITION = "Someone or something, especially, a television station, that is associated with a larger, related organization, such as a television network; a member of a group of associated things."

// global.fetch = jest.fn(() => Promise.resolve({
//     json: () => Promise.resolve(MOCK_WORD)
// }));

// describe("Affiliate definition", () => {
//     let theDefinition;

// describe("When the definition of a word is searched for", () => {
//     beforeEach(async () => {
//         theDefinition = await getDefinition({"definition": "Someone or something, especially, a television station, that is associated with a larger, related organization, such as a television network; a member of a group of associated things."})
//     });

//     it("The correct definition should be returned", () => {
//         expect(theDefinition).toEqual(MOCK_DEFINITION)
//     });
// });
// });






