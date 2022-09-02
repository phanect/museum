import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import Icon from '../Icon/Icon';
import NotificationButton from '../Notification/NotificationButton/NotificationButton';
import NewPostButton from '../NewPost/NewPostButton/NewPostButton';

const MobileNav = ({ currentUser }) => {
  const location = useLocation();

  return (
    <nav className="mobile-nav">
      <ul className="mobile-nav__list">
        <li>
          <Link to="/">
            <Icon icon={location.pathname === '/' ? 'home' : 'home-outline'} />
          </Link>
        </li>
        <li>
          <Link to="/explore">
            <Icon
              icon={location.pathname === '/explore' ? 'search' : 'search-outline'}
            />
          </Link>
        </li>
        <li>
          <NewPostButton plusIcon />
        </li>
        <li>
          <Link to="/activity">
            <NotificationButton
              mobile
              icon={location.pathname === '/activity' ? 'heart' : 'heart-outline'}
            />
          </Link>
        </li>
        <li>
          <Link to={`/${currentUser.username}`}>
            <Icon
              icon={
                location.pathname === `/${currentUser.username}`
                  ? 'person-circle'
                  : 'person-circle-outline'
              }
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
