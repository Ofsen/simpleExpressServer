const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
	res.setHeader('Content-Type', 'Text/HTML');
	res.status(200).send('Welcome to the UMMTO API.');
});

app.get('/depinfo', (req, res) => {
	res.setHeader('Content-Type', 'Application/json');
	res.status(200).json({
		universite: 'Université Mouloud Mammeri Tizi-Ouzou',
		faculte: 'Génie électrique et informatique',
		departement: 'Informatique',
	});
});

app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});
