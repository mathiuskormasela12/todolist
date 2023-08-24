// ========== Modal
// import all packages
import React, {forwardRef, useImperativeHandle, useState} from 'react';
import {
  Modal as ReactModal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import style from './style';
import {Button} from '../button/Button';

export const Modal = forwardRef((__, ref) => {
  const [visible, setVisible] = useState(false);

  useImperativeHandle(ref, () => ({
    visible,
    setVisible,
  }));

  const handleClose = (): void => setVisible(currentVisible => !currentVisible);

  return (
    <KeyboardAvoidingView>
      <ReactModal visible={visible} transparent animationType="fade">
        <View style={style.wrapper}>
          <View style={style.card}>
            <View style={style.header}>
              <Text style={style.title}>Add Task</Text>
              <TouchableOpacity onPress={handleClose}>
                <Text style={style.close}>X</Text>
              </TouchableOpacity>
            </View>
            <View style={style.main}>
              <View style={style.field}>
                <Text style={style.label}>Task Name</Text>
                <TextInput placeholder="Task Name..." style={style.input} />
              </View>
              <View style={style.field}>
                <Button variant="primary">Add Task</Button>
              </View>
              <View style={style.field}>
                <TouchableOpacity>
                  <Text style={style.deleteText}>Delete Task</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ReactModal>
    </KeyboardAvoidingView>
  );
});
