import * as React from 'react';
import { Text} from 'react-native';
import AddModalHeader from '../../Helpers/AddModalHeader';
import {FormGroup, FormGroupSpacer} from '../../Helpers/FormGroup';
import PrimaryButton from '../../Helpers/PrimaryButton';
import ValidationRules from '../../ValidationRules';
import AddModalBody from '../../Wrappers/AddModal/AddModalBody';
import AddModalContainer from '../../Wrappers/AddModal/AddModalContainer';

export default function AddYarnModal({navigation}) {
  const [isAdding, setAdding]   = React.useState(false);
  const [name, setName] = React.useState('');
  const [company, setCompany] = React.useState('');
  const [notes, setNotes] = React.useState('');

  return (
    <AddModalContainer>
      <AddModalHeader navigation={navigation} />
      <AddModalBody>
        <FormGroup
          label={'Name'}
          value={name}
          onChange={setName}
          clearButtonMode={'while-editing'}
          maxLength={ValidationRules.yarnName.maxLength}
        />
        <FormGroupSpacer />
        <FormGroup
          label={'Company'}
          value={company}
          onChange={setCompany}
          clearButtonMode={'while-editing'}
          maxLength={ValidationRules.company.maxLength}
        />
        <FormGroupSpacer />
        <FormGroup
          label={'Notes'}
          value={notes}
          onChange={setNotes}
          clearButtonMode={'while-editing'}
          maxLength={ValidationRules.notes.maxLength}
          multiline={true}
          placeholder={"..."}
        />
      </AddModalBody>
      <PrimaryButton 
          onPress={async () => {
              setAdding(true);
              setAdding(false);
          }} 
          text={isAdding ? 'Adding...' : 'Add'}
          disabled={isAdding}
          width={'100%'}
      />
    </AddModalContainer>
  );
}