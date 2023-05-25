import NavList from '../nav-list/nav-list';
import HeaderTitle from '../header-title/header-title';

import headerStyles from './header.module.scss';

const Header = (props) => {
  const {activeTab, navBtns, onChangeTab} = props;
  
  return (
    <header className={headerStyles[activeTab]}>
      <NavList navBtns={navBtns}
                onChangeTab={onChangeTab}/>


      <HeaderTitle activeTab={activeTab}/>
    </header>
  );
  
}

export default Header;