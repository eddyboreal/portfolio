const express = require('express');
const app = express();
const _PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile('./pages/index.html', { root: __dirname });
});

app.get('/temp-page.html', (req, res) => {
    res.sendFile('./pages/temp-page.html', { root: __dirname });
});

app.get('/resume', (req, res) => {
    //request(__dirname + req.params.file).pipe(res);
   res.set( 'Content-Type', 'application/pdf' );
    res.sendFile('./public/ABADA_Eddy_EN_RESUME.pdf', { root: __dirname });
    //res.send(new Buffer('./public/Eddy_ABADA_Resume.pdf', 'binary'));
});

app.listen(_PORT, () => console.log(`listening on port ${_PORT}`));