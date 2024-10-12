import { URLS } from "./config/urlConfig.js";
import { makeApiGetCall } from "./utils/index.js";
import { useQuery, useQueries } from "@tanstack/react-query";

export const useGetCharactersList = (pageNo = 1) =>
  useQuery(
    ["people", pageNo],
    async () => {
      try {
        const { data } = await makeApiGetCall({
          url: URLS.PEOPLE({ pageNo }),
        });
        return data;
      } catch (e) {
        console.log({ e });
      }
    },
    {
      staleTime: Infinity,
    },
  );

export const useGetCharacterDetails = (id) =>
  useQuery([["people", id]], async () => {
    try {
      const { data } = await makeApiGetCall({
        url: URLS.DETAILS({ id }),
      });
      return data;
    } catch (e) {
      throw new Error(e);
    }
  });

export const useGetCharacterHomePlanet = (id) =>
  useQuery([["homePlanet", id]], async () => {
    try {
      const { data } = await makeApiGetCall({
        url: URLS.HOME_PLANET({ id }),
      });
      return data;
    } catch (e) {
      throw new Error(e);
    }
  });

export const useGetCharacterFilms = (id) =>
  useQuery([["films", id]], async () => {
    try {
      const { data } = await makeApiGetCall({
        url: URLS.FILMS({ id }),
      });
      return data;
    } catch (e) {
      throw new Error(e);
    }
  });

export const useGetFilms = (films) =>
  useQueries({
    queries: films.map((film) => {
      return {
        queryKey: ["film", film],
        queryFn: async () => {
          const { data } = await makeApiGetCall({
            url: film,
          });
          return data;
        },
      };
    }),
  });
