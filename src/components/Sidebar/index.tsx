import styles from './Sidebar.module.scss';
import LogoIcon from 'assets/icons/LogoIcon';
import { NavLink } from 'react-router-dom';
import HomeIcon from 'assets/icons/HomeIcon';
import { useState } from 'react';
import NotificationIcon from 'assets/icons/NotificationIcon';
import SearchIcon from 'assets/icons/SearchIcon';
import FavoritesIcon from 'assets/icons/FavoritesIcon';
import SettinngsIcon from 'assets/icons/SettingsIcon';
import ArrowDown from 'assets/icons/ArrowDown';
import cn from 'classnames';

const navigation: any = [
  {
    title: 'Menu',
    items: [
      {
        title: 'Home',
        icon: <HomeIcon />,
        url: '/',
      },
      {
        title: 'Search',
        icon: <SearchIcon />,
        url: '/contact',
      },
      {
        title: 'Notifications',
        icon: <NotificationIcon />,
        url: '/notifications',
      },
      {
        title: 'Favorites',
        icon: <FavoritesIcon />,
        url: '/favorites',
      },
      {
        title: 'Settings',
        slug: 'settings',
        icon: <SettinngsIcon />,
        dropdown: [
          {
            title: 'Drafts',
            url: '/drafts',
          },
          {
            title: 'Drafts',
            url: '/drafts',
          },
          {
            title: 'Drafts',
            url: '/drafts',
          },
        ],
      },
    ],
  },

  {
    title: 'Playlist',
    items: [
      {
        title: 'Notifications',
        url: '/notifications',
      },
      {
        title: 'Favorites',
        url: '/favorites',
      },
      {
        title: 'Activities',
        url: '/promote',
      },
    ],
  },
];

const Sidebar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => setDropdownVisible((prev) => !prev);

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <LogoIcon />
      </div>

      <nav className={styles.nav}>
        {navigation.map((item: any, index: any) => (
          <div className={styles.navItems}>
            <h1 className={styles.titleMenu}>{item.title}</h1>

            <ul className={styles.listItems}>
              {item?.items?.map((x: any) =>
                x.url ? (
                  <li>
                    <NavLink
                      to={x.url}
                      className={({ isActive }) => (isActive ? styles.itemIsActive : styles.item)}
                    >
                      {x.icon && <div className={styles.icon}>{x.icon}</div>}
                      {x.title}
                    </NavLink>
                  </li>
                ) : (
                  <>
                    <li>
                      <button
                        className={cn(styles.itemBtn, { [styles.visible]: dropdownVisible })}
                        onClick={toggleDropdown}
                      >
                        <div className={styles.icon}>{x.icon}</div>
                        {x.title}

                        <div className={styles.arrowBtn}>
                          <ArrowDown />
                        </div>
                      </button>
                    </li>

                    {dropdownVisible && (
                      <div className={styles.dropdown}>
                        {x.dropdown?.map((y: any) => (
                          <NavLink
                            to={y.url}
                            className={({ isActive }) =>
                              isActive ? styles.itemIsActive : styles.item
                            }
                          >
                            <div className={styles.line} />
                            {y.title}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </>
                )
              )}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
