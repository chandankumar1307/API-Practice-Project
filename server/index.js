const express = require('express')
const app = express();
const cors=require('cors');
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Api is running.')
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports=app;