import React from 'react';

class Button extends React.Component {
	render() {
		return (
			<button onClick={this.props.choice} className={this.props.isLights ? 'light-button' : 'dark-button' }
			> 
			{this.props.children}
			</button>
		);
	}
}

export { Button };
//export default Button;