import React, { ReactElement } from 'react';
import { Form } from 'react-bootstrap';

interface Props {}

const STOPS = [
  'Le Marais',
  'Saint-Germain-des-Prés',
  'Le quartier latin',
  'Les Tuileries et le Louvre',
  'Opéra',
  'Champs-Élysées',
  'Montmartre',
  'Invalides-tour Eiffel',
  'Belleville-Ménilmontant',
  'Bastille',
] as const;

function Selector({}: Props): ReactElement {
  return (
    <div>
      <Form.Select aria-label="Default select example">
        <option>Select your start stop</option>
        {STOPS.map((stop, index) => {
          return (
            <option value={stop} key={index}>
              {stop}
            </option>
          );
        })}
      </Form.Select>
    </div>
  );
}

export default Selector;
