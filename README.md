# Note-Record

Note Record is a note recording application with a personalized interface, linked to a database.

Some technologies used:

* React;
* Html;
* CSS(Styled);
* TypeScript;
* Jest(Parically);
* SQLite;
* Node;
* Express.

## Routes

All routes are linked to the "localhost:3001/results ..." address. The backend runs on port 3001 and the frontend on port 3000. Below are some examples of shipping data and the routes themselves.

* Post: /results - Body: {"bimestre": "QUARTO", "disciplina": "ARTES","nota": 8.9};
* Get: /results - QueryParams: {"bimester"};
* Delete: /results/:bimester/:discipline - Params: {"bimester": "QUARTO", "discipline": "ARTES"};
* Put: /results/:id - Parms: {"id": "afa60b5e-6a1a-4038-bd71-23e29bdfef19"} - (Not much tested);

## Running the app

**Required**: It is necessary to have the SQLite database installed on your machine.

```bash
# Installation
$ npm install

# Running
# Open two terminals and go to "cd ./frontend" in one, and "cd ./backend" in the other. Then run on both:
$ npm run start

# Running Test - Just a rendering test for the application's Main component
# Go to "cd ./frontend". Then run:
$ npm run test
```

Remind: In the future, standardize yourself in English.