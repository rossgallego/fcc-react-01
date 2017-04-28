import React, { Component } from "react";

class ListView extends Component {

	constructor(props) {
		super(props);
		this.populateViews = this.populateViews.bind(this);
	}

	cleanQuote(quote){
		return quote
			.replace("<p>","")
			.replace("</p>","")
			.replace(/&#8217;/g,"'");
	}

	populateViews() {
		return this.props.quotes.map((quote, index) => {
			return (
				<div className="item" key={quote.ID}>
					<img className="item-pic" src={this.props.pics[index].urls.regular} alt={quote.content} />
					<p className="item-quote">{this.cleanQuote(quote.content)}</p>
				</div>
			);
		});
	}

	render() {
		return (
			<div className="items-holder">
				{this.populateViews()}
			</div>
		);
	}

}

export default ListView;