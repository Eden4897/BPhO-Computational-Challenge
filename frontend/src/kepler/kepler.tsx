import DataTable from './data-table';
import './kepler.css';
import DataPlot from './plot';
import VariableForm from './variable-form';

const KeplerComp = () => {	
	return (
		<div className='page-container'>
			<div className='horizontal-flexbox'>
				<div className='vertical-flexbox'>
					<DataTable/>
					<VariableForm/>
				</div>
				<div className='graph-container'>
					<DataPlot/>
				</div>
			</div>
		</div>
	);
};


export default KeplerComp;
