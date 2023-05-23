import { Component, Fragment } from 'react';

import Header from '../header/header';
import AboutUs from '../about-us/about-us';
import OurBest from '../our-best/our-best';
import Footer from '../footer/footer';

// data
import navBtns from '../../data/nav-btns';
import ourBest from '../../data/our-best';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'main',
    }
  }

  onChangeTab = (dataTabStr) => {
    this.setState({
      activeTab: dataTabStr,
    });
  }

  render() {
    const { activeTab } = this.state;
    let mainContent;

    switch(activeTab) {
      case 'main':
        mainContent = (
          <Fragment>
            <AboutUs />
            <OurBest ourBest={ourBest}/>
          </Fragment>
        );
        break;

      default:
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