import React from 'react';
import GoodsTableContainer from 'containers/GoodsTableContainer';

import './PageLayout.scss';

class PageLayout extends React.Component {
  render () {
    return (
      <div className='container text-center'>
        <h1>Exness basket</h1>
        <div className='page-layout__viewport'>
          <GoodsTableContainer />
        </div>
      </div>
    );
  }
}

export default PageLayout;
