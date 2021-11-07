import React, { ReactElement } from 'react';
import Table from 'react-bootstrap/Table';
import { useQuery } from 'react-query';

import { getTripList } from '../api';
import { TripList } from '../models';

interface Props {}

function TableTrip({}: Props): ReactElement {
  const { status, error, data } = useQuery<TripList, Error>('getTrips', getTripList);

  if (status === 'loading') {
    return <div>...</div>;
  }
  if (status === 'error') {
    return <div>{error!.message}</div>;
  }

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
          {data?.map(({ id, departureStop, arrivalStop, departureTime, arrivalTime }) => {
            console.log(id);
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{departureStop}</td>
                <td>{departureTime}</td>
                <td>{arrivalStop}</td>
                <td>{arrivalTime}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default TableTrip;
