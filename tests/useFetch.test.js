import useFetch from "../src/CustomHooks/usefetch";
import { renderHook, act } from '@testing-library/react-hooks';
import fetch from "node-fetch";


// it("Should return data", () => {

//     const actual = useFetch(`https://api.dictionaryapi.dev/api/v2/entries/en/affiliate`)
//     const definition = actual[0].meanings[0].definitions[0].definition
//     expect(definition).toBe("Someone or something, especially, a television station, that is associated with a larger, related organization, such as a television network; a member of a group of associated things.")
// })

describe('useFetch', () => {
    it('Should return', () => {
      const { result } = renderHook(() => {useFetch(`https://api.dictionaryapi.dev/api/v2/entries/en/affiliate`)});
      expect(typeof result.current.data).toBe('object')
    });
})