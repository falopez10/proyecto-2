import React from "react";

export default class AnadirPersona extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			nombre: ""
		};
		this.manejarCambio = this.manejarCambio.bind(this);
		this.anadirPersona = this.anadirPersona.bind(this);
	}

	manejarCambio(e) {
		this.setState({
			nombre: e.target.value
		});
	}

	anadirPersona() {
		this.props.anadirPersona(this.state.nombre);
		this.setState({
			nombre: ""
		});
	}

	render() {
		return (
			<div>
				<input type="text" placeholder="Nombre" value={this.state.nombre} onChange={this.manejarCambio}/>
				<button type="button" onClick={this.anadirPersona}>Agregar Persona</button>
			</div>
		);
	}
}
