import React, { ReactElement } from 'react';
import { Form } from 'react-bootstrap';

import { StopList } from '../models';

interface Props {
  stopList?: StopList;
  onChangeSelect: Function;
}

function Selector({ stopList, onChangeSelect }: Props): ReactElement {
  return (
    <div>
      <Form.Select onChange={(e) => onChangeSelect(e)}>
        <option>Select your start stop</option>
        {stopList?.map((stop, index) => {
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
