const BASE_URL = "https://swapi.dev/api";

export const URLS = {
  PEOPLE: ({ pageNo }) => `${BASE_URL}/people?page=${pageNo}`,
  DETAILS: ({ id }) => `${BASE_URL}/people/${id}`,
  HOME_PLANET: ({ id }) => `${BASE_URL}/planets/${id}`,
  FILMS: ({ id }) => `${BASE_URL}/films/${id}`,
};
