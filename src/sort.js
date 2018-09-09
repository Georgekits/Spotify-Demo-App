import React from 'react';

class Sort extends React.Component{	
	render(){
		return (
			<div>
				<button className="btn-small" onClick={this.props.AscendingSort}>AscendingSort</button>
				<button className="btn-small" onClick={this.props.DescendingSort}>DescendingSort</button>
			</div>
		)	
	}
}
export default Sort;