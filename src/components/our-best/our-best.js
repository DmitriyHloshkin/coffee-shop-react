import { v4 as uuidv4 } from 'uuid';

import Card from '../card/card';

import ourBestStyle from './our-best.module.scss';
import generalStyles from '../../general-styles/container.module.scss';

const OurBest = (props) => {
  const {ourBest, onCheckCoffee} = props;
  
  const cards =  ourBest.map(({title, price, order, descr}) => {
    const src = require(`../../images/our-best/our-best-${order}.jpg`);

    return (
      <li className={ourBestStyle.listItem}
          key={uuidv4()}>
            
        <Card src={src}
              title={title}
              price={price}
              descr={descr}
              onCheckCoffee={onCheckCoffee}/>
      </li>
    );

  });

  return (
    <section className={ourBestStyle.ourBest}>
      <div className={generalStyles.container}>

        <h3 className={ourBestStyle.title}>Our best</h3>

        <ul className={ourBestStyle.wraperCard}>
          {cards}
        </ul>

      </div>
    </section>
  );
}

export default OurBest;