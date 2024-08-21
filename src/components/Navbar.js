import React, { useState, useEffect, useRef } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from './../assets/img/logo-1.png';
import NavEvents from './navEvents';

function NavBar() {
  const [showDropdown, setShowDropdown] = useState(null);
  const [activeLink, setActiveLink] = useState(null);
  const [showSubmenu, setShowSubmenu] = useState(null);
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const navRef = useRef(null);

  const [isEventUrl, setIsEventUrl] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);

  const wordsToFind = ['kautilya-colloquy', 'simulation', 'paper-presentation', 'contact-us', 'kc-registration'];
  const wordToExclude = 'kautilya-colloquy-2024';



  useEffect(() => {
    const currentURL = location.pathname;
    const urlContainsWord = wordsToFind.some(word => currentURL.includes(word));
    const urlDoesNotContainExcludedWord = !currentURL.includes(wordToExclude);
    setIsEventUrl(urlContainsWord && urlDoesNotContainExcludedWord);
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [window.innerWidth ]);

  


  useEffect(() => {
    if (isNavExpanded) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isNavExpanded]);



  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsNavExpanded(false);
      setShowDropdown(null);
      setShowSubmenu(null);
    }
  };

  const navLinks = [
    { id: 1, label: 'Our team', href: '/about' },
    {
      id: 2,
      label: 'Academics',
      dropdown: true,
      href: "#",
      dropdownItems: [
        { id: 21, label: 'Kautilya Advantage', href: '/study-at-kautilya' },
        { id: 22, label: 'Faculty', href: '/our-faculty' },
        {
          id: 23,
          label: 'Academic programs',
          dropdown: true,
          dropdownItems: [
            { id: 211, label: 'Doctoral Program', href: '/doctoral-ph-d-duration' },
            { id: 212, label: 'Master’s Program', href: '/mpp' },
          ],
        },
        { id: 24, label: 'Mentorship @ kautilya', href: '/mentorship-program' },
        { id: 25, label: 'Academic Calendar', href: '/academic-calendar' },
        { id: 26, label: 'Academic FAQS', href: '/academics-faqs' },
      ],
    },
    {
      id: 3, label: 'Research',
      dropdown: true,
      href: "#",
      dropdownItems: [
        { id: 31, label: 'Research Areas', href: '/research' },
        { id: 32, label: 'Grants & Funding', href: '/research-projects' },
        { id: 33, label: 'Capstone Project', href: '/capstone-project' },
        { id: 99, label: 'Issue brief', href: '/issue-brief' },
        {
          id: 34,
          label: 'Publications',
          dropdown: true,
          dropdownItems: [
            { id: 341, label: 'Faculties', href: '/publications' },
            { id: 342, label: 'Academic Associates', href: '/publications-academic-associates' },
          ],
        },
        { id: 35, label: 'Research FAQs', href: '/research-faqs' },
      ]
    },
    {
      id: 4, label: 'Admissions',
      dropdown: true,
      href: "#",
      dropdownItems: [
        // { id: 41, label: 'Virtual Tour', href: '/campus-virtual-tour' },
        { id: 42, label: 'Student Mix @ Kautilya', href: '/student-mix' },
        {
          id: 43, label: 'Admission Process',
          dropdown: true,
          dropdownItems: [
            { id: 411, label: 'Ph.D. Program', href: '/ph-d-duration' },
            { id: 422, label: 'Master’s Program', href: '/admission-process' },0
          ]
        },
        { id: 412, label: 'Partnerships', href: '/partnership' },
        { id: 44, label: 'Financial Aid', href: '/scholarships-financial-aid' },
        { id: 45, label: 'Admissions FAQs', href: '/admissions-faqs' },
      ]
    },
    { id: 5, label: 'Placements', href: '/placements' },
    {
      id: 6, label: 'Beyond academics',
      dropdown: true,
      dropdownItems: [
        { id: 61, label: 'Facilities', href: '/campus' },
        { id: 611, label: 'Alumni Network', href: '/alumni-association' },
        { id: 62, label: 'Student Clubs', href: '/student-clubs' },
        {
          id: 63, label: 'Resources',
          dropdown: true,
          dropdownItems: [
            { id: 631, label: 'Library', href: '/library' },
            { id: 632, label: 'blog', href: '/blogs' },
            { id: 633, label: 'Podcast Resource List', href: '/resource-list-of-podcasts' },
            { id: 634, label: 'Events', href: '/resources' },
          ]
        },
        { id: 64, label: 'Video Gallery', href: '/videos' },
        { id: 65, label: 'Policies & Guidelines', href: '/kspp-policies' },
      ],
    },
    {
      id: 7,
      label: 'Work @ kautilya', href: '/careers'
    },
    { id: 8, label: 'Contact', href: '/contactus' },
  ];

  useEffect(() => {
    const foundLink = navLinks.find((link) => {
      if (link.href === location.pathname) {
        setActiveLink(link.id);
        return true;
      }
      if (link.dropdownItems && Array.isArray(link.dropdownItems)) {
        const foundDropdownItem = link.dropdownItems.find((item) => item.href === location.pathname);
        if (foundDropdownItem) {
          setActiveLink(link.id);
          return true;
        }
      }
      return false;
    });
  }, [location.pathname, navLinks]);

  const handleLinkClick = (id, href) => {
    setActiveLink(id);
    navigate(href);
  };

  const handleDropdownToggle = (id) => {
    setShowDropdown(showDropdown === id ? null : id);
    setShowSubmenu(null); // Reset submenu when main dropdown is toggled
  };

  const handleSubmenuToggle = (id) => {
    setShowSubmenu(showSubmenu === id ? null : id);
  };

  const toggleNavCollapse = () => {
    setIsNavExpanded(!isNavExpanded);
    setShowSubmenu(null);
    setShowDropdown(null);
  };

  const closeMenu = () => {
    setIsNavExpanded(false);
    setShowSubmenu(null);
    setShowDropdown(null);
  };

  const handleDropdownItemClick = (event) => {
    event.stopPropagation();
  };

  if (!isEventUrl) {
    return (
      <Navbar expand="lg" className="navbarStyle" collapseOnSelect expanded={isNavExpanded} ref={navRef}>
      
        <Container className="nav_bg">
          <Navbar.Brand href="/">
            <img src={logo} alt="kautilya logo" className="logo_img" />
          </Navbar.Brand>
          <Navbar.Toggle onClick={toggleNavCollapse} aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            className={isMobileView ? "nav_bg" : ""}
          >
            <Navbar.Collapse id="responsive-navbar-nav" className='navbar-collapase-section'>
              <Nav className="ms-auto">
                <ul className="main_ul">
                  {navLinks.map((link) => {
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

                    return (
                      <li key={link.id} className={active}>
                        {link.dropdown ? (
                          <NavDropdown
                            title={link.label}
                            id={`nav-dropdown-${link.id}`}
                            show={showDropdown === link.id}
                            onClick={(e) => { e.stopPropagation(); handleDropdownToggle(link.id); }}
                            onMouseEnter={() => setShowDropdown(link.id)}
                            onMouseLeave={() => setShowDropdown(null)}
                            className={  isMobileView ?  showDropdown === link.id ? "selected-dropdown-expanded" : "" : ""}
                            // style={{ transition: "height 0.3s ease" }}
                          >
                            <ul>
                              {link.dropdownItems.map((item) => (
                                <li key={item.id}>
                                  {item.dropdown ? (
                                    <NavDropdown
                                      title={item.label}
                                      id={`nav-dropdown-${item.id}`}
                                      show={showSubmenu === item.id}
                                      onClick={(e) => { e.stopPropagation(); handleSubmenuToggle(item.id); }}
                                      onMouseEnter={() => setShowSubmenu(item.id)}
                                      onMouseLeave={() => setShowSubmenu(null)}
                                      // style={{ transition: "height 0.3s ease" }}
                                      className={ isMobileView ? showSubmenu === item.id ? "selected-sub-dropdown-expanded" : "selected-sub-dropdown-closed" : "right-toggle"}
                                      // className={showSubmenu === item.id ? "selected-sub-dropdown-expanded" : "selected-sub-dropdown-closed"}

                                   >
                                      {item.dropdownItems.map((subItem) => (
                                        <Link
                                          to={subItem.href}
                                          key={subItem.id}
                                          onClick={(event) => {
                                            event.stopPropagation();
                                            closeMenu();
                                          }}
                                          
                                    
                                          // id={isMobileView && 'sub-nav-item'}
                                        >
                                          {subItem.label}
                                        </Link>
                                      ))}
                                    </NavDropdown>
                                  ) : (
                                    <Link
                                      to={item.href}
                                      onClick={(event) => {
                                        event.stopPropagation();
                                        closeMenu();
                                      }}
                                      className={isMobileView ? "main-nav-item" : ""}
                                    >
                                      {item.label}
                                    </Link>
                                  )}
                                </li>
                              ))}
                            </ul>
                          </NavDropdown>
                        ) : (
                          <Nav.Link
                            key={link.id}
                            as={Link}
                            to={link.href}
                            onClick={() => {
                              handleLinkClick(link.id, link.href);
                              closeMenu();
                            }}
                          >
                            {link.label}
                          </Nav.Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </Nav>
            </Navbar.Collapse>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    );
  } else {
    return <NavEvents />;
  }
}

export default NavBar;

