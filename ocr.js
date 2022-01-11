




Tesseract.recognize(
		'http://localhost:90/OCR/image1.jpg',
		'fra',
		{logger: m => console.log(m)}
	).then(({data : { text } }) => {
		document.getElementById("data").innerHTML = text;
	}
);