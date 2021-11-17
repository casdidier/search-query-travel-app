import React, { ReactElement, useState } from 'react';
import { Button, Col, Container, Row, Table, Toast } from 'react-bootstrap';
import { useQuery } from 'react-query';

import { bookTripByID, getStopList, getTripListBySearchQuery } from '../api';
import { StopList } from '../models';
import Selector from './Selector';
import TableTrip from './TableTrip';

function HomeContainer(): ReactElement {
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

  const dataBooking = useQuery(['bookedTrip', stopQuery], () => bookTripByID(tripId), {
    enabled: Boolean(tripId),
  });

  console.log(dataBooking, tripId);

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
    <Container className="flex-center">
      <Selector stopList={data} onChangeSelect={onChangeSelect} />
      <TableTrip
        searchQuery={stopQuery}
        tripsBySearch={tripsBySearch}
        onChangeBook={onChangeBook}
      />
    </Container>
  );
}

export default HomeContainer;
