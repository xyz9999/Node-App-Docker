const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.get('/',(req, res) => res.send('\nExperience Lab - Hello World Docker-61\n'));
app.listen(PORT,'0.0.0.0', () => console.log(`Server listening in port ${PORT}`));
