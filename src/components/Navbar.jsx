import React, { useEffect } from 'react';

const Navbar = ({ options }) => {
  useEffect(() => {
    const dropdownSubmenus = document.querySelectorAll('.dropdown-submenu');
    dropdownSubmenus.forEach((submenu) => {
      submenu.addEventListener('mouseenter', adjustSubmenuAlignment);
    });

    return () => {
      dropdownSubmenus.forEach((submenu) => {
        submenu.removeEventListener('mouseenter', adjustSubmenuAlignment);
      });
    };
  }, []);

  const adjustSubmenuAlignment = (event) => {
    const submenu = event.target;
    const submenuRect = submenu.getBoundingClientRect();
    const windowWidth = window.innerWidth;

    if (submenuRect.right > windowWidth) {
      submenu.style.left = 'auto';
      submenu.style.right = '100%';
    } else {
      submenu.style.left = '100%';
      submenu.style.right = 'auto';
    }
  };

  return (
    <ul>
      {options.map((option, index) => (
        <li key={index} className={option.dropdown?.length > 0 ? 'dropdown' : ''}>
          <a href={option.ref}>{option.name}</a>
          {option.dropdown && (
            <>
              <i className="arrow down"></i>
              <ul className="dropdown-menu">
                {option.dropdown.map((item, index) => (
                  <li key={index} className={item.dropdown?.length > 0 ? 'dropdown submenu' : ''}>
                    <a href={item.ref}>{item.name}</a>
                    {item.dropdown && (
                      <>
                        <i className="arrow right"></i>
                        <ul className="dropdown-submenu">
                          {item.dropdown.map((subitem, index) => (
                            <li key={index} className="submenu">
                              <a href={subitem.ref}>{subitem.name}</a>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Navbar;