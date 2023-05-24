import { Component, Fragment } from 'react';

import Header from '../header/header';
import AboutUs from '../about-us/about-us';
import OurBest from '../our-best/our-best';
import Footer from '../footer/footer';
import OpenCard from '../open-card/open-card';
import About from '../about/about';
import CardList from '../card-list/card-list';
import SearchPanel from '../search-panel/search-panel';

// data
import navBtns from '../../data/nav-btns';
import ourBest from '../../data/our-best';
import products from '../../data/products';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'main',
      coffeeIsChecked: false,
      products,
      searchStr: '',
      filter: '',
    }
  }

  onChangeTab = (dataTabStr) => {
    this.setState({
      activeTab: dataTabStr,
      coffeeIsChecked: false,
      filter: '',
    });
  }

  onCheckCoffee = ({src, country, descr, price}) => {

    this.setState((state) => {
      return (
        {
          coffeeIsChecked: {
            src,
            country,
            descr,
            price,
          }
        }
      );

    });
  }

  onChangeFilter = (filter) => {
    this.setState(() => {
      return (
        {
          filter: filter
        }
      );
    });
  }

  onChangeSearchStr = (str) => {
    this.setState(() => {
      return (
        {
          searchStr: str
        }
      );
    });
  }

  getFilterProducts = () => {
    const { products,  filter} = this.state;
    
    if(!filter) {
      return products;
    }

    return products.slice().filter( ({country}) => country === filter);
  }

  getSearchProducts = (products) => {
    const { searchStr } = this.state;
    const regExp = new RegExp(`^${searchStr}`,'i');

    if(!searchStr) {
      return products;
    }

    return products.slice().filter( ({title}) => regExp.test(title));
  }

  render() {
    const { activeTab, coffeeIsChecked, searchStr, filter } = this.state;
    let mainContent;

    const filterProducts = this.getSearchProducts(this.getFilterProducts());

    if (coffeeIsChecked) {
      console.log(coffeeIsChecked);
      mainContent = (
        <OpenCard coffeeIsChecked={coffeeIsChecked} />
      );
    }

    if (!coffeeIsChecked) {
      switch(activeTab) {
        case 'main':
          mainContent = (
            <Fragment>
              <AboutUs />
              <OurBest ourBest={ourBest}
                      onCheckCoffee={this.onCheckCoffee}/>
            </Fragment>
          );
          break;
        
        case 'our': 
          mainContent = (
            <Fragment>
              <About about='About our beans'
                      src={require('../../images/other/about-our-beans.png')}/>
              <SearchPanel searchStr={searchStr}
                          onChangeSearchStr={this.onChangeSearchStr}
                          onChangeFilter={this.onChangeFilter}
                          filter={filter}/>

              <CardList products={filterProducts}
                        onCheckCoffee={this.onCheckCoffee}/>
            </Fragment>
          );
          break;

        case 'pleasure':
          mainContent = (
            <Fragment>
              <About about='About our goods'
                      src={require('../../images/other/about-our-goods.png')}/>
              <CardList products={filterProducts}
                        onCheckCoffee={this.onCheckCoffee}/>
            </Fragment>
          );
          break;
        

        default:
      }
    }

    return (
      <Fragment>
        <Header activeTab={activeTab} 
                navBtns={navBtns}
                onChangeTab={this.onChangeTab}/>

        <main>         
            {mainContent}
        </main>

        <Footer navBtns={navBtns}
                onChangeTab={this.onChangeTab}/>
      </Fragment>

    );
  }
}

export default App;