import React from 'react';
import RedundantForm from './manageState/redundantState';
import Accordion from './manageState/sharingState';
import Messenger from './manageState/contact';
import DeclarativeUi from './manageState/declarativeUI';
import Form33 from './manageState/declarativeUI';

const StateComponent = () => {
  return (
    <div>
        {/* <Form33/> */}
        <DeclarativeUi/>
      <RedundantForm/>
      <Accordion/>
      <Messenger/>
    </div>
  );
}

export default StateComponent;