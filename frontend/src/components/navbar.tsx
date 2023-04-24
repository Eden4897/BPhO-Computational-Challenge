import logo from './../logo1.png';

import { Nav, Navbar } from 'react-bootstrap';

const NavbarComp = () => {
	return (
		<Navbar bg="dark" variant="dark" sticky="top" expand="xl" collapseOnSelect>
			<Navbar.Brand id="nav-brand" href="/">
				<img id="logo" src={logo} width="60px" height="60px" alt="test" />{' '}
				<span>Solar System Simulator</span>
			</Navbar.Brand>

			<Navbar.Toggle/>
			<Navbar.Collapse className='justify-content-end'>
        <Nav variant='pills'>
					<Nav.Link href="#1">Kepler's Third Law</Nav.Link> {/*Task 1*/}
					<Nav.Link href="#2">Orbit Plots</Nav.Link> {/*Task 2+3+4*/}
					<Nav.Link href="#3">Orbital Time v.s. Polar Angle</Nav.Link> {/*Task 5*/}
					<Nav.Link href="#4">Spriograph</Nav.Link> {/*Task 6*/}
					<Nav.Link href="#5">Plolemy Plots</Nav.Link> {/*Task 7*/}
					<Nav.Link href="#6">More</Nav.Link> {/*Report + Repository*/}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavbarComp;
