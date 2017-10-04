import React from 'react';
import PropTypes from 'prop-types';

import icons from '../../../data/icons.js';

const Icon = (props) => {

  const { alias, color = "#50b1b8", width = 64, height = width } = props;

  return (
    <svg fill={ color } width={ width } height={ height } viewBox="0 0 1024 1024">
      <path d={ icons[alias] }></path>
    </svg>
  )
};

Icon.displayName = 'Icon';

export default Icon;
