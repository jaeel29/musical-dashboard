import styles from './Sidebar.module.scss';
import LogoIcon from 'assets/icons/LogoIcon';
import { NavLink } from 'react-router-dom';
import HomeIcon from 'assets/icons/HomeIcon';
import { Fragment, useState } from 'react';
import NotificationIcon from 'assets/icons/NotificationIcon';
import SearchIcon from 'assets/icons/SearchIcon';
import FavoritesIcon from 'assets/icons/FavoritesIcon';
import SettinngsIcon from 'assets/icons/SettingsIcon';
import ArrowDown from 'assets/icons/ArrowDown';
import cn from 'classnames';
import Avatar from 'components/UI/Avatar';

const navigation: any = [
  {
    id: '1',
    title: 'Menu',
    items: [
      {
        id: '1-1',
        title: 'Home',
        icon: <HomeIcon />,
        url: '/',
      },
      {
        id: '1-2',
        title: 'Search',
        icon: <SearchIcon />,
        url: '/search',
      },
      {
        id: '1-3',
        title: 'Notifications',
        icon: <NotificationIcon />,
        url: '/notifications',
      },
      {
        id: '1-4',
        title: 'Favorites',
        icon: <FavoritesIcon />,
        url: '/favorites',
      },
      {
        id: '1-5',
        title: 'Settings',
        slug: 'settings',
        icon: <SettinngsIcon />,
        dropdown: [
          {
            id: '1-5-1',
            title: 'Drafts',
            url: '/drafts',
          },
          {
            id: '1-5-2',
            title: 'Drafts',
            url: '/drafts',
          },
          {
            id: '1-5-3',
            title: 'Drafts',
            url: '/drafts',
          },
        ],
      },
    ],
  },

  {
    id: '2',
    title: 'Playlist',
    items: [
      {
        id: '2-1',
        title: 'Notifications',
        url: '/notifications',
      },
      {
        id: '2-2',
        title: 'Favorites',
        url: '/favorites',
      },
      {
        id: '2-3',
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
        {navigation.map((item: any) => (
          <div className={styles.navItems} key={item.id}>
            <h1 className={styles.titleMenu}>{item.title}</h1>

            <ul className={styles.listItems}>
              {item?.items?.map((x: any) =>
                x.url ? (
                  <li key={x.id}>
                    <NavLink
                      to={x.url}
                      className={({ isActive }) => (isActive ? styles.itemIsActive : styles.item)}
                    >
                      {x.icon && <div className={styles.icon}>{x.icon}</div>}
                      {x.title}
                    </NavLink>
                  </li>
                ) : (
                  <Fragment key={x.id}>
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
                        <div className={styles.line1} />
                        {x.dropdown?.map((y: any) => (
                          <NavLink
                            to={y.url}
                            className={({ isActive }) =>
                              isActive ? styles.itemIsActive : styles.item
                            }
                          >
                            <div className={styles.line2} />
                            {y.title}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </Fragment>
                )
              )}
            </ul>
          </div>
        ))}
      </nav>

      <div className={styles.userInfo}>
        <div className={styles.avatar}>
          <Avatar src={'/images/avatar.png'} dot />
        </div>

        <div className={styles.titles}>
          <h6>Khawla Karmaoui</h6>
          <p>khawlakarmaoui@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
