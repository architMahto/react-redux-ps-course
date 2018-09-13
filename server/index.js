import express from 'express'
import path from 'path';

const PORT = process.env.PORT || 3000;

const app = express();

const pathToBuild = path.join(__dirname, '..', 'build');

app.use(express.static(pathToBuild));

app.get('*', function (req, res) {
	res.sendFile(path.join(pathToBuild, 'index.html'));
});

app.listen(PORT, () => {
	console.log(`Server running at http://127.0.0.1:${PORT}/`)
});
