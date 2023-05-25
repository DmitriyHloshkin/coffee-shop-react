import NavList from '../nav-list/nav-list';
import BeansLogo from '../beans-logo/beans-logo';

import footerStyle from './footer.module.scss';

const Footer = (props) => {
  const {navBtns, onChangeTab} = props;
  
  return (
    <footer className={footerStyle.footer}>
      <NavList onChangeTab={onChangeTab}
              navBtns={navBtns} />

      <BeansLogo theme="black"/>
    </footer>

  );
  
}

export default Footer;