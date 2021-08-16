import React from 'react'
import PropTypes from 'prop-types';

export default class Vote extends React.Component {
    state = {
        supNum: 0,
        oppNum: 0,

    }

    static childContextTypes= {
        supNum: PropTypes.number,
        oppNum: PropTypes.number
        // handle: PropTypes.func
    }
}