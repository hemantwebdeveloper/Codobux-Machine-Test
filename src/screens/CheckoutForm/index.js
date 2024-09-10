import React from 'react';
import SafeAreaContainer from '../../components/SafeAreaContainer';
import { PrimaryButton } from '../../components/Button';
import { KeyboardAvoidingView, ScrollView, StyleSheet, View, Platform } from 'react-native';
import ContentContainer from '../../components/ContentContainer';
import Header from '../../components/Header';
import { PrimaryInput } from '../../components/Input';
import { Description, Label, SubHeading } from '../../components/Text';
import RenderSession from './RenderSession';
import { COLORS } from '../../theme/colors';
import { formfields } from './data';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { fillFormSchema } from '../../utils/schemas';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux';
import { userAction } from '../../store/slices/userSlice';

function CheckoutForm({navigation}) {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(fillFormSchema),
    mode: 'onChange',
  });

  const dispatch=useDispatch();

  const onSubmit = (data) => {
    dispatch(userAction({profile:{...data,bookingId:'XXXX22YYZZ'}}));
    setTimeout(() => {
      navigation.navigate('DetailedView');
    }, 200);
  };

  return (
    <SafeAreaContainer>
      <Header />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={{ flex: 1 }} 
      >
        <ScrollView>
          <ContentContainer>
            <View style={styles.formName}>
              <SubHeading>Checkout Form</SubHeading>
              <RenderSession />
            </View>
            <View style={styles.formBox}>
              {formfields.map((form, idx) => {
                return (
                  <View key={idx}>
                    <Label style={styles.sectionHeader}>{form.title}</Label>
                    {form.fields.map((item, index) => {
                      return (
                        <Controller
                          control={control}
                          name={item?.name}
                          key={index}
                          render={({ field: { onChange, onBlur, value }, fieldState: { error, invalid } }) => {
                            return (
                              <View>
                                <Description style={{ marginBottom: 10 }}>{item?.label}</Description>
                                <View>
                                  <PrimaryInput
                                    value={value}
                                    isError={!!error}
                                    placeholder={item.placeholder}
                                    message={errors[item?.name]?.message}
                                    onChangeText={(text) => onChange(text)} // Ensure onChangeText for TextInput
                                  />
                                  <View style={styles.icon}>
                                    {item.type === 'date' && <Fontisto size={25} name={'date'} color={COLORS.black} />}
                                    {item.type === 'time' && <Ionicons size={25} name={'time-outline'} color={COLORS.black} />}
                                  </View>
                                </View>
                              </View>
                            );
                          }}
                        />
                      );
                    })}
                  </View>
                );
              })}
              <PrimaryButton
                style={{ width: '60%', alignSelf: 'center', backgroundColor: COLORS.black }}
                label={'Submit'}
                onPress={handleSubmit(onSubmit)}
              />
            </View>
          </ContentContainer>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaContainer>
  );
}

export default CheckoutForm;

const styles = StyleSheet.create({
  formName: {
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: COLORS.lightGray,
    paddingVertical: 15,
  },
  formBox: {
    padding: 15,
  },
  sectionHeader: {
    marginVertical: 15,
    textAlign: 'center',
  },
  icon: {
    position: 'absolute',
    right: 20,
    top: 18,
  },
});