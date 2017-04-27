import React,{Component} from "react";
import apicalls from "../utils/apicalls";

class Content extends Component{

	constructor(props){
		super(props);
		this.state = {
			hasContent : false
		};
	}

	componentWillMount(){
		apicalls
	}

	render(){

	}

}

export default Content;