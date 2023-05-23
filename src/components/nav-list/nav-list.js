import { v4 as uuidv4 } from 'uuid';

import NavListItem from "../nav-list-item/nav-lis-item";

import navListStyles from './nav-list.module.scss';
import generalStyles from '../../general-styles/container.module.scss';

const NavList = ({navBtns, onChangeTab, black = false, align = 'left'}) => {
  const listItems = navBtns.map( ({title, data}) => <NavListItem title={title}
                                                                data={data}
                                                                onChangeTab={onChangeTab}
                                                                key={uuidv4()}/>);
  
  return (
    <div className={generalStyles.container}>
      <nav>
        <ul className={navListStyles.list}>
          {listItems}
        </ul>
      </nav>
    </div>

  )
}

export default NavList;