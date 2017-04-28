import React,{Component} from "react";
import getContent from "../utils/apicalls";

class Content extends Component{

	constructor(props){
		super(props);
		this.state = {
			hasContent : false,
			pageNo : 1
		};
		this.gotContent = this.gotContent.bind(this);
	}

	gotContent(quotes,pics){
		//do nothing
	}

	componentWillMount(){
		getContent(this.state.pageNo,this.gotContent);
	}

	render(){
		return (
			<div> Working </div>
		);
	}

}

export default Content;