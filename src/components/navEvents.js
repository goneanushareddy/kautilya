import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, useLocation, useNavigate  } from 'react-router-dom';
import logo from './../assets/img/logo-1.png';

function NavEvents() {
  const [showDropdown, setShowDropdown] = useState(null);
  const [activeLink, setActiveLink] = useState(null);
  const [showSubmenu, setShowSubmenu] = useState(null);
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const location = useLocation();
  const history = useNavigate ();

  const navLinks = [
    { id: 1, label: 'About the conclave', href: '/kautilya-colloquy' },
    { id: 2, label: 'Paper Presentation', href: '/paper-presentation' },
    { id: 3, label: 'Simulation', href: '/simulation' },
    { id: 4, label: 'Contact Us', href: '/contact-us' },    
    { id: 5, label: 'Registration', href: '/kc-registration' },
   
  ];
  useEffect(() => {
    // Set active link based on the current route
    const foundLink = navLinks.find((link) => {
      if (link.href === location.pathname) {
        setActiveLink(link.id);

        return true; // Main link match
      }
  
      // Check if the current route matches any dropdown item
      if (link.dropdownItems && Array.isArray(link.dropdownItems)) {
        const foundDropdownItem = link.dropdownItems.find((item) => item.href === location.pathname);
        if (foundDropdownItem) {
          setActiveLink(link.id); // Set the active link to the main link when a dropdown item is active
       
          return true;
        }
      }
  
      return false;
    });
  }, [location.pathname, navLinks]);

  

  const handleLinkClick = (id, href) => {
   
    setActiveLink(id);
   history(href); // Update the URL
  };


  const handleDropdownMouseEnter = (id) => {
  
    setShowDropdown(id);
    setActiveLink(id);
  };

  const handleSubmenuMouseEnter = (id) => {
    
    setShowSubmenu(id);
  };

  const handleDropdownMouseLeave = () => {
    
    setShowDropdown(null);
    setShowSubmenu(null);
    setActiveLink(null);
  };
  
  const handleSubmenuMouseLeave = () => {
   
    setShowSubmenu(null);
    setActiveLink(null);
  };

  const toggleNavCollapse = () => {
    setIsNavExpanded(!isNavExpanded);
    
  };

  const closeMenu = () => {
    setIsNavExpanded(false); // Ensure this function sets the navbar to collapsed
  };



  return (
    <Navbar expand="xl" className="navbarStyle" collapseOnSelect expanded={isNavExpanded}>
     
    <Container className="nav_bg">
      <Navbar.Brand href="/">
        <img src={logo} alt="kautilya logo" className="logo_img d-inline-block align-top" />
      </Navbar.Brand>
      <Navbar.Toggle onClick={toggleNavCollapse} aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
        <ul className="main_ul">
          {navLinks.map((link) => {
           ////console.log(link);
           let active = '';

              if (location.pathname === link.href) {
                active = 'active';
              } else if (link.dropdown && link.dropdownItems.some((it) => it.href === location.pathname)) {
                active = 'active';
              } else if (
                link.dropdown &&
                link.dropdownItems.some((item) => item.dropdown && item.dropdownItems.some((it) => it.href === location.pathname))
              ) {
                active = 'active';
              }
             
          
           return  <li key={link.id} 
            className={active   }
        
            >
              {link.dropdown ? (
                <NavDropdown
                  title={link.label}
                  id={`nav-dropdown-${link.id}`}
                  show={showDropdown === link.id}
                  onMouseEnter={() => handleDropdownMouseEnter(link.id)}
                  onMouseLeave={() => handleDropdownMouseLeave()}
                >
                  <ul>
                    {link.dropdownItems.map((item) => (
                      <li key={item.id}>
                        {item.dropdown ? (
                          <NavDropdown
                            title={item.label}
                            id={`nav-dropdown-${item.id}`}
                            show={showSubmenu === item.id}
                            onMouseEnter={() => handleSubmenuMouseEnter(item.id)}
                            onMouseLeave={() => handleSubmenuMouseLeave()}
                          >
                            {item.dropdownItems.map((subItem) => (
                              <Link key={subItem.id} to={subItem.href} onClick={() => {toggleNavCollapse();closeMenu();}}>
                                {subItem.label}
                              </Link>
                            ))}
                          </NavDropdown>
                        ) : (
                          <Link to={item.href} onClick={() => {toggleNavCollapse();closeMenu();}}>{item.label}</Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </NavDropdown>
              ) : (
                <Link
  key={link.id}
  to={link.href}
  onMouseEnter={() => handleDropdownMouseEnter(link.id)}
  onClick={() => { 
    handleLinkClick(link.id, link.href); // Your existing click handling logic
    closeMenu(); // Closes the mobile navbar menu
  }}
>
  {link.label}
</Link>

              )}
            </li>
           
              })}
          </ul>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default NavEvents;