import React from 'react';
import ReactDom from 'react-dom';
import Banner from './components/Banner.jsx'
import data from './components/banner.json'

ReactDom.render(<div>
  <Banner data={data}></Banner>
</div>,document.getElementById('root'))