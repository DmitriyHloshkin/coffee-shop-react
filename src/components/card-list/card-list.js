import { v4 as uuidv4 } from 'uuid';

import Card from '../card/card';

import cardListStyles from './card-list.module.scss';
import generalStyles from '../../general-styles/container.module.scss';

const CardList = ({products, onCheckCoffee}) => {
  const src = require('../../images/coffee-cards/coffee-card-1.jpg');

  const productItems = products.map((product) => {
    return (
      <li key={uuidv4()}>
        <Card src={src}
              {...product}
              onCheckCoffee={onCheckCoffee} />
      </li>
    );
  });

  return (
    <section className={cardListStyles.products}>
      <div className={generalStyles.container}>
        <ul className={cardListStyles.list}>
          {productItems}
        </ul>
      </div>
    </section>
  );
}

export default CardList;