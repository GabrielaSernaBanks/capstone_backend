//Remember to npm i these modules.
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 8080;

const therapistsRoute = require('./routes/therapists');

app.use(express.json())
app.use(cors());

app.use('/api/therapists', therapistsRoute);

app.listen(PORT, () => { console.log("Listening on port " + PORT)})
