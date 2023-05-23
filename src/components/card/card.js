import cardStyles from './card.module.scss';

const Card = ({src, title, cost, prod}) => {
  let prodSection;

  if (prod) {
    prodSection = (
      <div className={cardStyles.prod}>
        {prod}
      </div>
    );
  }

  return (
    <div className={cardStyles.card}>
      <div className={cardStyles.img}>
        <img src={src} alt={title} />
      </div>

      <div className={cardStyles.title}>
        {title}
      </div>

      {prodSection}

      <div className={cardStyles.cost}>
        {`${cost}$`}
      </div>
    </div>
  );
}

export default Card;