import cardStyles from './card.module.scss';

const Card = ({src, title, price, country, onCheckCoffee, descr}) => {
  let countrySection;
  if (country) {
    countrySection = (
      <div className={cardStyles.country}>
        {country}
      </div>
    );
  }
  
  return (
    <div className={cardStyles.card}
          tabIndex='0'
          onClick={ () => onCheckCoffee({src, descr, price, country}) } >

      <div className={cardStyles.img}>
        <img src={src} alt={title} />
      </div>

      <div className={cardStyles.title}>
        {title}
      </div>

      {countrySection}

      <div className={cardStyles.cost}>
        {`${price}$`}
      </div>
    </div>
  );
}

export default Card;