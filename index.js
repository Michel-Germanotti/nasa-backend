const express = require("express");
const cors = require("cors");
const axios = require('axios');

// const reverseDate = require('./utils/functions')
require('dotenv').config();

const app = express();
app.use(cors());


app.get('/planetary', async (req,res) => {

	// const tabTest = [];
	const {date, start_date, end_date, compter} = req.query;
	// console.log(req.query);
	// const test = date.split("-");
	// console.log(test);
	// for (let i = 0; i < test.length; i++) {
	// 	tabTest.push(test[i]);
	// 	return tabTest;
	// }
	// tabTest.push(test[0]);
	// tabTest.push(test[1]);
	// tabTest.push(test[2]);
	// const dateReverse = reverseDate(date);
	// const start_dateReverse = reverseDate(start_date);
	// const end_dateReverse = reverseDate(end_date);

	// console.log(dateReverse);
	// console.log(start_dateReverse);
	// console.log(end_dateReverse);

	if(date) {
	// 	// const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`, {params: {date: dateReverse, start_date: start_dateReverse, end_date: end_dateReverse}});
		const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}&date=${date}`);
	// 	const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}&date=${dateReverse}&start_date=${start_dateReverse}&end_date=${end_dateReverse}&compter=44`);
	// 	// const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`);
	// 	console.log(response);
		console.log(response.data);
		res.status(200).json(response.data);
	} else {
		
		const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`);
		console.log(response.data);
		res.status(200).json(response.data);
	}

	// try {
	// 	// const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`, {params: {date: dateReverse, start_date: start_dateReverse, end_date: end_dateReverse}});
	// 	// const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}&date=${dateReverse}&start_date=${start_dateReverse}&end_date=${end_dateReverse}`);
	// 	const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}&date=${dateReverse}&start_date=${start_dateReverse}&end_date=${end_dateReverse}&compter=44`);
	// 	// const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`);
	// 	console.log(response);
	// 	console.log(response.data);
	// 	res.status(200).json(response.data);
	// } catch (error) {
	// 	res.status(400).json(error);
	// }
});

app.get('/neo', (req, res) => {
	try {
		res.status(200).json('ok')
	} catch (error) {
		res.status(400).json({message: error.message})	
	}
})

app.get("/", (req, res) => {
	try {
		res.status(200).json('ok');
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

app.listen(process.env.PORT, () => {
    console.log('server started on the port : ', process.env.PORT);
});