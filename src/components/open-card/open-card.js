import BeansLogo from '../beans-logo/beans-logo';

import openCardStyles from './open-card.module.scss';
import generalStyles from '../../general-styles/container.module.scss';

const OpenCard = ({coffeeIsChecked}) => {
  const {src, country, descr, price} = coffeeIsChecked;
  
  return (
    <section className={openCardStyles.openCard}>
      <div className={generalStyles.container}>
        <div className={openCardStyles.wraperCard}>
          <div className={openCardStyles.imgCard}>
              <img src={src} alt={descr} />
          </div>

          <div className={openCardStyles.about}>
              <h3 className={openCardStyles.aboutTitle}>
                  About it
              </h3>

              <BeansLogo />

              <div className={openCardStyles.country}>
                <span>Country:</span> {country ? country : 'Brasil'}
              </div>

              <div className={openCardStyles.descr}>
                <span>Description:</span> {descr}
              </div>

              <div className={openCardStyles.price}>
                <span>Price:</span> {`${price}$`}
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OpenCard;