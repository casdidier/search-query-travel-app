import React, { ReactElement } from 'react';
import Table from 'react-bootstrap/Table';
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

  if (status === 'loading') {
    return <div>...</div>;
  }
  if (status === 'error') {
    return <div>{error!.message}</div>;
  }

  let trips = searchQuery !== 'Select your start stop' ? tripsBySearch : data;

  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th key={1}>departureStop</th>
            <th key={2}>departureTime</th>
            <th key={3}>arrivalStop</th>
            <th key={4}>arrivalTime</th>
          </tr>
        </thead>
        <tbody>
          {trips?.map(
            ({ id, departureStop, arrivalStop, departureTime, arrivalTime }) => {
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{departureStop}</td>
                  <td>{departureTime}</td>
                  <td>{arrivalStop}</td>
                  <td>{arrivalTime}</td>
                  <td>
                    <button onClick={() => onChangeBook(id)}>Book</button>
                  </td>
                </tr>
              );
            },
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default TableTrip;
