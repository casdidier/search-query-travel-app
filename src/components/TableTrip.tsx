import React, { ReactElement } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { useQuery } from 'react-query';

import { getTripList } from '../api';
import { TripList } from '../models';

interface Props {
  searchQuery: string;
  tripsBySearch: TripList;
  onChangeBook: Function;
}

function TableTrip({ searchQuery, tripsBySearch, onChangeBook }: Props): ReactElement {
  const { status, error, data } = useQuery<TripList, Error>('tripList', getTripList);

  const bookTrip = (id) => {
    window.alert('Your trip has just been just booked');
    onChangeBook(id);
  };

  if (status === 'loading') {
    return <div>...</div>;
  }
  if (status === 'error') {
    return <div>{error!.message}</div>;
  }

  let trips = searchQuery !== 'Select your start stop' ? tripsBySearch : data;

  return (
    <div>
      <Container>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th key={1}>Departure Stop</th>
              <th key={2}>Departure Time</th>
              <th key={3}>Arrival Stop</th>
              <th key={4}>Arrival Time</th>
            </tr>
          </thead>
          <tbody>
            {trips?.map(
              ({ id, departureStop, arrivalStop, departureTime, arrivalTime }) => {
                const humanDepartureTime = new Date(departureTime).toUTCString();
                const humanArrivalTime = new Date(arrivalTime).toUTCString();

                return (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{departureStop}</td>
                    <td>{humanDepartureTime}</td>
                    <td>{arrivalStop}</td>
                    <td>{humanArrivalTime}</td>
                    <Button
                      onClick={() => {
                        window.confirm('Do you confirm you want to book this trip?')
                          ? bookTrip(id)
                          : console.log('nothing happens');
                      }}>
                      Book
                    </Button>
                  </tr>
                );
              },
            )}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default TableTrip;
