import React, { ReactElement, useState } from 'react';
import { useQuery } from 'react-query';

import { getStopList } from '../api';
import { StopList } from '../models';
import Selector from './Selector';
import TableTrip from './TableTrip';

function Container(): ReactElement {
  const { status, error, data } = useQuery<StopList, Error>('getStops', getStopList);
  const [stopQuery, setStopQuery] = useState('Select your start stop');

  const onChangeSelect = () => {
    setStopQuery(event?.target.value);
  };

  if (status === 'loading') {
    return <div>...</div>;
  }
  if (status === 'error') {
    return <div>{error!.message}</div>;
  }

  return (
    <div>
      <Selector stopList={data} onChangeSelect={onChangeSelect} />
      <TableTrip searchQuery={stopQuery} />
    </div>
  );
}

export default Container;
