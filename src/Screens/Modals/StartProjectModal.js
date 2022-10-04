import * as React from 'react';
import { Text} from 'react-native';
import AddModalHeader from '../../Helpers/AddModalHeader';
import PrimaryButton from '../../Helpers/PrimaryButton';
import AddModalBody from '../../Wrappers/AddModal/AddModalBody';
import AddModalContainer from '../../Wrappers/AddModal/AddModalContainer';

export default function StartProjectModal({navigation}) {
  const [isAdding, setAdding] = React.useState(false);

  return (
    <AddModalContainer>
      <AddModalHeader navigation={navigation} />
      <AddModalBody>
        <Text style={{fontSize: 30}}>Start Project form goes here</Text>
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