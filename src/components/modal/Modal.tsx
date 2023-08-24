// ========== Modal
// import all packages
import React, {forwardRef, useImperativeHandle, useState} from 'react';
import {
  Modal as ReactModal,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import {Controller} from 'react-hook-form';

import style from './style';

// import all components
import {Button, Input} from '../../components';

// import all hooks
import {useModal} from './hooks/useModal';
import {IModalProps} from './types';

export const Modal = forwardRef((props: IModalProps, ref) => {
  const [visible, setVisible] = useState(false);
  const {control, errors, handleSubmit, onSubmit} = useModal();

  useImperativeHandle(ref, () => ({
    visible,
    setVisible,
  }));

  const handleClose = (): void => setVisible(currentVisible => !currentVisible);

  const disabled =
    typeof errors.taskName?.message === 'string' ||
    typeof errors.taskDescription?.message === 'string';

  return (
    <KeyboardAvoidingView>
      <ReactModal visible={visible} transparent animationType="fade">
        <View style={style.wrapper}>
          <View style={style.card}>
            <View style={style.header}>
              <Text style={style.title}>{props.type} Task</Text>
              <TouchableOpacity onPress={handleClose}>
                <Text style={style.close}>X</Text>
              </TouchableOpacity>
            </View>
            <View style={style.main}>
              <View style={style.field}>
                <Text style={style.label}>Task Name</Text>
                <Controller
                  control={control}
                  name="taskName"
                  rules={{
                    required: 'Task name is required',
                  }}
                  render={({field: {onChange, onBlur, value}}) => (
                    <Input
                      placeholder="Task Name..."
                      invalid={errors.taskName?.message}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      value={value}
                    />
                  )}
                />
              </View>
              <View style={style.field}>
                <Text style={style.label}>Task Description</Text>
                <Controller
                  control={control}
                  name="taskDescription"
                  rules={{
                    required: 'Task description is required',
                    maxLength: {
                      value: 10,
                      message:
                        'Task description cannot be more than 10 characters',
                    },
                  }}
                  render={({field: {onChange, onBlur, value}}) => (
                    <Input
                      placeholder="Task Name..."
                      invalid={errors.taskDescription?.message}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      value={value}
                      multiline={true}
                      numberOfLines={4}
                    />
                  )}
                />
              </View>
              <View style={style.field}>
                <Button
                  variant="primary"
                  disabled={disabled}
                  onPress={handleSubmit(onSubmit)}>
                  {props.type} Task
                </Button>
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
