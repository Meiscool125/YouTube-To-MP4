const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const ytdl = require('ytdl-core');
const fs = require('fs');
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/download', async (req, res) => {
    const { link } = req.body;
    console.log(link)

    if (!ytdl.validateURL(link)) {
        console.log("Backend invalid URL")
        return res.status(400).send('Invalid YouTube URL');
    }

    res.header('Content-Disposition', 'attachment; filename="video.mp4"');

    ytdl(link).pipe(fs.createWriteStream('video.mp4'));
    console.log("Backend Success")
});

app.listen(5000, () => {
    console.log('listening on port 5000')
});
