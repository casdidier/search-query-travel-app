import React, { ReactElement } from 'react';
import Table from 'react-bootstrap/Table';

interface Props {}

const JOURNEYS = [
  {
    id: 1,
    departureStop: 'Bastille',
    departureTime: '2022-01-01T15:23:00',
    arrivalStop: 'Le quartier latin',
    arrivalTime: '2022-01-01T16:05:00',
  },
  {
    id: 2,
    departureStop: 'Le quartier latin',
    departureTime: '2022-01-01T20:31:00',
    arrivalStop: 'Montmartre',
    arrivalTime: '2022-01-01T20:57:00',
  },
  {
    id: 3,
    departureStop: 'Le quartier latin',
    departureTime: '2022-01-01T14:04:00',
    arrivalStop: 'Opéra',
    arrivalTime: '2022-01-01T14:41:00',
  },
];

function TableJourney({}: Props): ReactElement {
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
          {JOURNEYS.map((journey) => {
            return (
              <tr key={journey.id}>
                <td>{journey.id}</td>
                <td>{journey.departureStop}</td>
                <td>{journey.departureTime}</td>
                <td>{journey.arrivalStop}</td>
                <td>{journey.arrivalTime}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default TableJourney;
