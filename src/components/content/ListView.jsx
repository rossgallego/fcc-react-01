import React, { Component } from "react";

class ListView extends Component {

	constructor(props) {
		super(props);
		this.populateViews = this.populateViews.bind(this);
		this.fontsAvail = ["Dancing Script","Indie Flower","Kaushan Script","Lobster","Pacifico"];
	}

	cleanQuote(quote){
		return quote
			.replace("<p>","")
			.replace("</p>","")
			.replace(/&#8217;/g,"'");
	}

	populateViews() {
		return this.props.quotes.map((quote, index) => {
			let divStyle = {
				fontFamily : this.fontsAvail[Math.floor(Math.random()*5)]
			};
			return (
				<div className="item" key={quote.ID}>
					<img className="item-pic" src={this.props.pics[index].urls.regular} alt={quote.content} />
					<p className="item-quote" style={divStyle}>{this.cleanQuote(quote.content)}</p>
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