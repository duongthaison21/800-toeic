const router = require('./src/routes/router');
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const handlebars = require('express-handlebars');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(helmet());
app.use(morgan('combined'));

router(app);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})