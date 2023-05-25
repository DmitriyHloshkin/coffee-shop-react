import BeansLogo from '../beans-logo/beans-logo';

import styles from './header-title.module.scss';
import generalStyles from '../../general-styles/container.module.scss';

const HeaderTitle = (props) => {
  const {activeTab} = props;
  let title = '',
      content;

  switch (activeTab) {
    case 'pleasure':
      title = 'For your pleasure';
      break;
  
    case 'our':
      title = 'Our Coffee';
      break;

      default:
  }

  if(activeTab !== 'main') {
    content = (
        <h1 className={styles.title}>
          {title}
        </h1>
    );
  } else {
    content = (
      <div className={styles.wraper}>
        <BeansLogo theme='white'/>
        <h2>We makes every day full of energy and taste</h2>
        <h2>Want to try our beans?</h2>
        <button className={styles.btn}>More</button>
      </div>
      
    );
  }

  return (
    <div className={generalStyles.container}>
      {content}
    </div>
  )
}

export default HeaderTitle;