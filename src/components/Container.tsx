import React, { ReactElement } from 'react';

import Selector from './Selector';

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

function Container(): ReactElement {
  return (
    <div>
      <Selector stopList={STOPS} />
    </div>
  );
}

export default Container;
