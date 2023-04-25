import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import logo from './../logo1.png';
import './navbar.css';

const NavbarComp = () => {
	return (
		<Navbar bg="dark" variant="dark" sticky="top" expand="xl" collapseOnSelect>
			<Navbar.Brand id="nav-brand" as={Link} to='/'>
				<img id="logo" src={logo} width="60px" height="60px" alt="test" />{' '}
				<span>Solar System Simulator</span>
			</Navbar.Brand>

			<Navbar.Toggle/>
			<Navbar.Collapse className='justify-content-end'>
				<Nav variant='pills'>
					<LinkContainer to="/keplers-third-law"><Nav.Link>Kepler's Third Law</Nav.Link></LinkContainer> {/*Task 1*/}
					<LinkContainer to="/orbital-time-vs-polar-angle"><Nav.Link>Orbital Time v.s. Polar Angle</Nav.Link></LinkContainer> {/*Task 5*/}
					<LinkContainer to="/orbit-plots"><Nav.Link>Orbit Plots</Nav.Link></LinkContainer> {/*Task 2+3+4*/}
					<LinkContainer to="/spriograph"><Nav.Link>Spriograph</Nav.Link></LinkContainer> {/*Task 6*/}
					<LinkContainer to="/plolemy-plots"><Nav.Link>Plolemy Plots</Nav.Link></LinkContainer> {/*Task 7*/}
					<LinkContainer to="/more"><Nav.Link>More</Nav.Link></LinkContainer> {/*Report + Repository*/}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavbarComp;
