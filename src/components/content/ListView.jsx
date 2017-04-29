import React, { Component } from "react";

class ListView extends Component {

	constructor(props) {
		super(props);
		this.populateViews = this.populateViews.bind(this);
	}

	populateViews() {
		return this.props.quotes.map((quote, index) => {
			return (
				<div className="flex-item" key={quote.ID}>
					<img className="flex-image" src={this.props.pics[index].urls.regular} alt={quote.content} />
					<p>{quote.content.replace(/(<([^>]+)>)/ig,"")}</p>
				</div>
			);
		});
	}

	render() {
		return (
			<div className="items-holder flex-container">
				{this.populateViews()}
			</div>
		);
	}

}

export default ListView;