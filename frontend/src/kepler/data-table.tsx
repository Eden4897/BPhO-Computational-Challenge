import Table from 'react-bootstrap/Table';
import './kepler.css';

export default function DataTable() {
	return (
		<Table striped bordered hover size="sm">
			<thead className="thead-dark">
				<tr>
					<th>Planet</th>
					<th>Mass (Earth Masses)</th>
					<th>Distance From Sun (AU)</th>
					<th>Radius (Earth radii)</th>
					<th>Rotational Period (days)</th>
					<th>Orbital Periord (years)</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope="row">Mercury</th>
					<td>0.055</td>
					<td>0.387</td>
					<td>0.38</td>
					<td>58.65</td>
					<td>0.24</td>
				</tr>
				<tr>
					<th scope="row">Venus</th>
					<td>0.815</td>
					<td>0.723</td>
					<td>0.95</td>
					<td>243.02</td>
					<td>0.62</td>
				</tr>
				<tr>
					<th scope="row">Earth</th>
					<td>1.0</td>
					<td>1.0</td>
					<td>1.0</td>
					<td>1.0</td>
					<td>1.0</td>
				</tr>
				<tr>
					<th scope="row">Mars</th>
					<td>0.107</td>
					<td>1.0</td>
					<td>1.0</td>
					<td>1.0</td>
					<td>1.0</td>
				</tr>
				<tr>
					<th scope="row">Jupiter</th>
					<td>1.0</td>
					<td>1.0</td>
					<td>1.0</td>
					<td>1.0</td>
					<td>1.0</td>
				</tr>
				<tr>
					<th scope="row">Saturn</th>
					<td>1.0</td>
					<td>1.0</td>
					<td>1.0</td>
					<td>1.0</td>
					<td>1.0</td>
				</tr>
				<tr>
					<th scope="row">Uranus</th>
					<td>1.0</td>
					<td>1.0</td>
					<td>1.0</td>
					<td>1.0</td>
					<td>1.0</td>
				</tr>
				<tr>
					<th scope="row">Neptune</th>
					<td>1.0</td>
					<td>1.0</td>
					<td>1.0</td>
					<td>1.0</td>
					<td>1.0</td>
				</tr>
				<tr>
					<th scope="row">Pluto</th>
					<td>1.0</td>
					<td>1.0</td>
					<td>1.0</td>
					<td>1.0</td>
					<td>1.0</td>
				</tr>
			</tbody>
		</Table>
	);
}
