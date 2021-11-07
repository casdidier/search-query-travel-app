import React, { ReactElement } from 'react';

import Selector from './Selector';

interface Props {}

function Container({}: Props): ReactElement {
  return (
    <div>
      <Selector />
    </div>
  );
}

export default Container;
