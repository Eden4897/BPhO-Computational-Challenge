import { Component, ReactNode } from 'react';
import { Form } from 'react-bootstrap';

export default class VariableForm extends Component {
	render(): ReactNode {
		return (
			<>
				<Form.Label>X-Variable</Form.Label>
				<Form.Select aria-label="X-Variable">
					<option value="M">Mass (Earth Masses)</option>
					<option value="a">Distance From Sun (AU)</option>
					<option value="r">Radius (Earth Radii)</option>
					<option value="P" selected>Rotational Period (Days)</option>
					<option value="Yr">Orbital Period (Years)</option>
				</Form.Select>
				<Form.Label>Y-Variable</Form.Label>
				<Form.Select aria-label="Y-Variable">
					<option value="M">Mass (Earth Masses)</option>
					<option value="a" selected>Distance From Sun (AU)</option>
					<option value="r">Radius (Earth Radii)</option>
					<option value="P">Rotational Period (Days)</option>
					<option value="Yr">Orbital Period (Years)</option>
				</Form.Select>
			</>
		);
	}
}
