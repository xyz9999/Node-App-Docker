const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.get('/',(req, res) => res.send('Hello World Docker-12'));
app.listen(PORT,'0.0.0.0', () => console.log(`Server listening in port ${PORT}`));
