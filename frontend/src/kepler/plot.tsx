import Plot from 'react-plotly.js';
import { useResizeDetector } from 'react-resize-detector';
import { keys, values } from './data';

function findIndex(variable: string) {
	return keys.indexOf(variable);
}

function sortBy(variable: string) {
	const index = findIndex(variable);
	return values.sort((a, b) => (a[index] as number) - (b[index] as number));
}

function extractVariable(
	lst: [string, number, number, number, number, number][],
	variable: string
) {
	return lst.map((r) => r[findIndex(variable)] as string);
}

export default function DataPlot() {
	const sorted = sortBy('Orbital Period (Years)');

	const { width, height, ref } = useResizeDetector({
		// refreshMode: 'debounce',
		// refreshRate: 1000
	});
	return (
		<div ref={ref} style={{ display: 'flex', height: '100%' }}>
			<Plot
				divId="plotly-chart"
				data={[
					{
						type: 'scatter',
						mode: 'lines+markers',
						x: extractVariable(sorted, 'Distance From Sun (AU)'),
						y: extractVariable(sorted, 'Orbital Period (Years)'),
						text: extractVariable(sorted, 'Planet'),
						hovertemplate: `Distance From Sun (AU): %{x} <br>Orbital Period (years): %{y}<extra>%{text}</extra>`,
					},
				]}
				layout={{
					height: height,
					width: width,
					title: 'Distance From Sun vs Orbital Period',
					xaxis: {
						title: {
							text: 'x Axis',
						},
					},
					yaxis: {
						title: {
							text: 'y Axis',
						},
					},
				}}
				config={{ displayModeBar: false, responsive: true }}
				useResizeHandler
			/>
		</div>
	);
}
