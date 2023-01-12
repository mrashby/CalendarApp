To start:

1) run npm install in the extracted folder

2) run npm start to start the development server

-- this should be fixed -------------
3) IF ERROR for csstools/normalize.css perform following steps:

npm remove csstools/normalize.css

npm install csstools/normalize.css

npm install sanitize.css
---------------------------------

TYPESCRIPT:
npm install --save typescript @types/node @types/react @types/react-dom @types/jest

npx tsc --init


MATERIAL UI:
npm install @mui/material @emotion/react @emotion/styled

npm install @fontsource/roboto

ADD TO FILE:
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

npm install @mui/icons-material


https://mui.com/material-ui/getting-started/usage/