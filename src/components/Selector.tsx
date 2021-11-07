import React, { ReactElement } from 'react';
import { Form } from 'react-bootstrap';

interface Props {
  stopList: readonly string[];
}

function Selector({ stopList }: Props): ReactElement {
  return (
    <div>
      <Form.Select aria-label="Default select example">
        <option>Select your start stop</option>
        {stopList.map((stop, index) => {
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
