import beansLogoStyles from './beans-logo.module.scss';

const BeansLogo = ({theme}) => {
  let imageName,
      beansClasses;

  switch(theme) {
    case 'white': 
      imageName = 'beens-white.png'
      beansClasses = beansLogoStyles.beans;
      break;

    default:
      imageName = 'beens-black.png';
      beansClasses = `${beansLogoStyles.beans} ${beansLogoStyles.beansWhite}`;;
  }

  const src = require(`../../images/beens/${imageName}`);

  return (
      <div className={beansClasses}>
          <img src={src} 
              alt="beans" />
      </div>
  );
}

export default BeansLogo;