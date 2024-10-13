
# Star Wars Character Viewer

<!-- ABOUT THE PROJECT -->
## About The Project

This project is a web application that allows users to explore character details from the Star Wars universe using the swapi.dev API. The application features two main views: a character list view and a character details view. It is built using React, React Query and tailwindcss.

## Demo
[A demo is worth a thousand words](https://allica-assignment.vercel.app/)

### Built With
* [React](https://react.dev/)<br />
* [ReactQuery](https://tanstack.com/query/v3)<br />
* [Tailwindcss](https://tailwindcss.com/)<br />
* [vite](https://vite.dev/)<br />


<!-- GETTING STARTED -->
## Getting Started
To run this project locally, follow these steps:

1. **Clone the repository** <br />
   ```sh
   git clone https://github.com/rraghav123/allica-assignment.git
   ```
2. **Install dependencies:** <br />
    ```sh
   npm i --force
   ```
   we need to run ```--force``` because 
   ``` "react": "^18.3.1",``` doesn't support
   ```@testing-library/react-hooks```
   
3. **Run the Application** <br />
    ```sh
   npm run dev
   ```
4. **Run test cases** <br />
    ```sh
   npm run test
   ```
## Features

1. Character list view
2. List characters from the Star Wars universe (name, gender &amp; DOB).
3. Clicking a list item will navigate to the character details page
4. Character details page will include 
   * Hair Color
   * Eye Color
   * Gender
   * Home Planet
   * Movies List
5. Characters Card at home page has edit button that allows user to edit character gender.
6. Loading Screens
7. Error Screens
8. Retry functionality if api fails


## Unit Tests
Unit tests have been implemented for the components to ensure they work as expected. The tests cover:

1. Character list rendering
2. Character details rendering
3. Loading states
4. Unit Test cases for all the components
5. Integration testing between different components
   