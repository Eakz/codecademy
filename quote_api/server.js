const express = require('express');
const app = express();

// routes
const {quoteRouter} = require('./routes/quoteRoute');
const PORT = process.env.PORT || 4001;
app.use(express.static('public'));
app.use('/api/quotes',quoteRouter);
app.listen(PORT)

