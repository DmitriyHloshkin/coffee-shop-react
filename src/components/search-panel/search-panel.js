import searchPanelStyles from './search-panel.module.scss';
import generalStyles from '../../general-styles/container.module.scss';

const SearchPanel = (props) => {
  const {searchStr, onChangeSearchStr, onChangeFilter, filter} = props;
  
  const onChangeSearch = e => onChangeSearchStr(e.target.value);
  const onChangeFilterBtn = e => {
    e.preventDefault();
    onChangeFilter(e.target.getAttribute('data-country'));
  };

  const checkActiveClass = (country) => {
    if (country === filter) {
      return searchPanelStyles.active;
    }

    return '';
  };
  
  return (
    <section className={searchPanelStyles.searchPanel}>
      <div className={generalStyles.container}>
        <form action="" className={searchPanelStyles.searchForm}>
          <div className={searchPanelStyles.search}>
            <label htmlFor="search">
              Lookiing for
            </label>
            <input type="text" 
                    placeholder='start typing here...' 
                    id='search' 
                    value={searchStr}
                    onChange={e => onChangeSearch(e)}/>
          </div>

          <div className={searchPanelStyles.filter}>
              <span>Or filter</span>

              <button data-country='Brazil' 
                      onClick={e => onChangeFilterBtn(e)}
                      className={checkActiveClass('Brazil')}>
                Brazil
              </button>

              <button data-country='Kenya' 
                      onClick={e => onChangeFilterBtn(e)}
                      className={checkActiveClass('Kenya')}>
                Kenya
              </button>

              <button data-country='Columbia' 
                      onClick={e => onChangeFilterBtn(e)}
                      className={checkActiveClass('Columbia')}>
                Columbia
              </button>

              <button data-country='' 
                      onClick={e => onChangeFilterBtn(e)}
                      className={checkActiveClass('')}>
                All
              </button>

          </div>

        </form>
      </div>
    </section>

  );
}

export default SearchPanel;