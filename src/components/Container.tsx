import React, { ReactElement } from 'react';
import { useQuery } from 'react-query';

import { getStopList } from '../api';
import { StopList } from '../models';
import Selector from './Selector';
import TableJourney from './TableJourney';

function Container(): ReactElement {
  const { status, error, data } = useQuery<StopList, Error>(
    'getStops',
    getStopList, // fetching function
  );

  if (status === 'loading') {
    return <div>...</div>;
  }
  if (status === 'error') {
    return <div>{error!.message}</div>;
  }

  return (
    <div>
      <Selector stopList={data} />
      <TableJourney />
    </div>
  );
}

export default Container;
