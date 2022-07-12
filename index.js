const router = require('./src/routes/route');
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const {engine} = require('express-handlebars');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources', 'views'));

app.use(helmet());
app.use(morgan('combined'));

router(app);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})