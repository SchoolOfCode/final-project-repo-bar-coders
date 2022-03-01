import useFetch from "../src/CustomHooks/usefetch";
import { renderHook, act } from "@testing-library/react-hooks";
import "@testing-library/jest-dom/extend-expect";

const json = jest.fn();
const fetch = jest.fn(async () => {
  return { json };
});

window.fetch = fetch;

describe("the useFetch hook works as expected", () => {
  it("calls the API", async () => {
    renderHook(() => {
      return useFetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/affiliate`
      );
    });
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it("is called with the correct arguments", async () => {
    renderHook(() => {
      return useFetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/affiliate`
      );
    });
    expect(fetch).toHaveBeenCalledWith(
      `https://api.dictionaryapi.dev/api/v2/entries/en/affiliate`,
      { headers: { Accept: "application/json" } }
    );
  });

  it("the returned data should have the correct shape", async () => {
    const datashape = [
      {
        meanings: [
          {
            definitions: [
              {
                definition: expect.any(String),
                //   "Someone or something, especially, a television station, that is associated with a larger, related organization, such as a television network; a member of a group of associated things.",
              },
            ],
          },
        ],
      },
    ];

    json.mockResolvedValueOnce(datashape);
    const { result, waitForNextUpdate } = renderHook(() => {
      return useFetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/affiliate`
      );
    });
    await waitForNextUpdate();

    console.log(result.current);
    expect(
      result.current.data[0].meanings[0].definitions[0].definition
    ).toStrictEqual(datashape[0].meanings[0].definitions[0].definition);
  });
    
 
    it("returns undefined if an invalid url is passed in", async () => {
        const { result, waitForNextUpdate } = renderHook(() => {
          return useFetch(
            `https://api.dictionaryapi.dev/api/v2/entries/en/asldfjisd`
          );
        });
        await waitForNextUpdate();
        console.log(result.current);
        expect(result.current.data).toEqual(undefined);
    })
    
});
