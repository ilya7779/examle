import sidebar from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <aside className={sidebar.sidebar}>
      <nav className={sidebar.sidebar__menu}>
        <ul className={sidebar.sidebar__list}>
          <li>
            <a href="#" className={`${sidebar.sidebar__link} ${sidebar.sidebar__link_active}`}>Profile</a>
          </li>
          <li>
            <a href="#" className={sidebar.sidebar__link}>Messages</a>
          </li>
          <li>
            <a href="#" className={sidebar.sidebar__link}>News</a>
          </li>
          <li>
            <a href="#" className={sidebar.sidebar__link}>Music</a>
          </li>
          <li>
            <a href="#" className={sidebar.sidebar__link}>Settings</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

  

export default Sidebar;