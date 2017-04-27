import axios from "axios";

function getQuotes(){
	
}

function getContent(callback){
	axios.all([getQuotes(),getPictures()])
		.then(axios.spread((quotes,pics)=>{
			//we have both quotes and pics here
			console.log(quotes,pics);
		}));
}