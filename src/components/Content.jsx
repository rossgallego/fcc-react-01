import React,{Component} from "react";
import getContent from "../utils/apicalls";
import LoadingView from "./content/LoadingView";
import ListView from "./content/ListView";

class Content extends Component{

	constructor(props){
		super(props);
		this.state = {
			hasContent : false,
			pageNo : 1
		};
		this.gotContent = this.gotContent.bind(this);
		this.getContentForState = this.getContentForState.bind(this);
	}

	gotContent(quotes,pics){
		console.log(quotes,pics);
		this.setState({
			hasContent : true,
			quotes : quotes,
			pics : pics
		});
	}

	componentWillMount(){
		getContent(this.state.pageNo,this.gotContent);
	}

	getContentForState(){
		if(!this.state.hasContent){
			return <LoadingView />
		}else{
			return <ListView quotes={this.state.quotes} pics={this.state.pics} />
		}
	}

	render(){
		return (
			<div className="landing">
				{this.getContentForState()}
			</div> 
		)
	}

}

export default Content;