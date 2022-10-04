import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { FontAwesome, Ionicons, AntDesign, Entypo } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import { pressableStyles } from '../../Styles/PressableStyles';
import { iconStyles } from '../../Styles/IconStyles';

export default function CreateIconAndModal({navigation}) {
    const [modalVisible, setModalVisible] = React.useState(false);

    return (
        <View>
            <Pressable 
                onPress={() => {setModalVisible(true)}} 
                style={({pressed}) => pressableStyles(pressed).icon}
            >
              <FontAwesome name={"plus-circle"} style={iconStyles.addIcon}/>
            </Pressable>
            <View>
                <Modal
                    backdropOpacity={0.3}
                    isVisible={modalVisible}
                    onBackdropPress={() => setModalVisible(false)}
                    style={styles.contentView}
                    animationOutTiming={1000}
                >
                  <View style={styles.modal}>
                    <Pressable 
                        onPress={() => {setModalVisible(false)}} 
                        style={({pressed}) => pressableStyles(pressed).icon}
                    >
                      <AntDesign name="close" style={iconStyles.modalCloseIcon} />
                    </Pressable>

                    <View style={styles.modalButtons}>

                      {/* Add Yarn */}
                      <Pressable 
                        onPress={() => {
                          setModalVisible(false)
                          navigation.navigate('Add Yarn');
                        }}
                        style={({pressed}) => pressableStyles(pressed).addButton}
                      >
                        <Text>
                          <AntDesign name="upload" size={styles.modalText.fontSize} color="black" />
                          <Text style={styles.modalText}>    Add Yarn</Text>
                        </Text>
                      </Pressable>

                      {/* Add Pattern */}
                      <Pressable 
                        onPress={() => {
                          setModalVisible(false);
                          navigation.navigate('Add Pattern');
                        }}
                        style={({pressed}) => pressableStyles(pressed).addButton}
                      >
                        <Text>
                          <Entypo name="add-to-list" size={styles.modalText.fontSize} color="black" />
                          <Text style={styles.modalText}>    Add Pattern</Text>
                        </Text>
                      </Pressable>

                      {/* Start a Project */}
                      <Pressable 
                        onPress={() => {
                          setModalVisible(false);
                          navigation.navigate('Start Project');
                        }}
                        style={({pressed}) => pressableStyles(pressed).addButton} >
                        <Text style={{width: '100%'}}>
                          <Ionicons name="hammer-outline" size={styles.modalText.fontSize} color="black" />
                          <Text style={styles.modalText}>    Start a Project</Text>
                        </Text>
                      </Pressable>
                    </View>
                  </View>
                </Modal>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  modal: {
    display: 'flex',
    backgroundColor: 'white',
    height: 310,
    paddingHorizontal: 30,
    paddingBottom: 70,
    paddingTop: 20,
    borderTopRightRadius: 17,
    borderTopLeftRadius: 17
  },
  modalButtons: {
    paddingTop: 20,
    width: '100%'
  },
  modalText: {
    fontSize: 20
  },
  contentView: {
    justifyContent: 'flex-end',
    margin: 0,
  }
});