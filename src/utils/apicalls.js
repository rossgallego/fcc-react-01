import axios from "axios";
import unsplash from "./unsplash_config";
import {toJson} from "unsplash-js";

const quotesUrl = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=10";

/**
 * Fetch 10 photos along with 10 pictures
 */

function getQuotes(){
	return axios.get(quotesUrl);
}

function getPictures(pageNo){
	return unsplash.photos.list(pageNo,10).then(toJson);
}

function getContent(pageNo,callback){
	axios.all([getQuotes(),getPictures(pageNo)])
		.then(axios.spread((quotes,pics)=>{
			//we have both quotes and pics here
			console.log(quotes,pics);
		}));
}

module.exports = getContent;