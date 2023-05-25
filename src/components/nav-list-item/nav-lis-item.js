import navListItemStyles from './nav-list-item.module.scss';

const NavListItem = (props) => {
  const {title, data, onChangeTab} = props;

  const onChange = e => {
    onChangeTab(e.target.getAttribute('data-type'));
  }

  return (
    <li className={navListItemStyles.item} >
      <button className={navListItemStyles.btn}
              data-type={data}
              onClick={onChange}>
        {title}
      </button>
    </li>
  )
}

export default NavListItem;