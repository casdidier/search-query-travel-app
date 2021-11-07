import React, { ReactElement, useState } from 'react';
import { useQuery } from 'react-query';

import { bookTripByID, getStopList, getTripListBySearchQuery } from '../api';
import { StopList } from '../models';
import Selector from './Selector';
import TableTrip from './TableTrip';

function Container(): ReactElement {
  const { status, error, data } = useQuery<StopList, Error>('stopList', getStopList);
  const [stopQuery, setStopQuery] = useState('Select your start stop');
  const [tripId, setTripId] = useState(null);

  const { data: tripsBySearch } = useQuery(
    ['trips', stopQuery],
    () => getTripListBySearchQuery(stopQuery),
    {
      enabled: Boolean(stopQuery),
    },
  );

  const { data: booking } = useQuery(
    ['bookedTrip', stopQuery],
    () => bookTripByID(tripId),
    {
      enabled: Boolean(tripId),
    },
  );

  console.log(booking);

  const onChangeSelect = () => {
    setStopQuery(event?.target.value);
  };

  const onChangeBook = (tripId: id) => {
    setTripId(tripId);
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
      <TableTrip
        searchQuery={stopQuery}
        tripsBySearch={tripsBySearch}
        onChangeBook={onChangeBook}
      />
    </div>
  );
}

export default Container;
