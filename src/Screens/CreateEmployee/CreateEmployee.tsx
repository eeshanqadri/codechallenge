import React, {useEffect, useState} from 'react';
import WrapperContainer from '../../Components/WrapperContainer';
import HeaderComp from '../../Components/HeaderComp';
import strings from '../../constants/lang';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import TextInputComp from '../../Components/TextInputComp';
import styles from './styles';
import ButtonComp from '../../Components/ButtonComp';
import moment from 'moment';
import DatePicker from 'react-native-date-picker';
import {Text, TouchableOpacity, View} from 'react-native';
import colors from '../../styles/colors';
import {useSelector} from 'react-redux';
import actions from '../../redux/actions';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {
  CITY_NAME_REGEX,
  COUNTRY_NAME_REGX,
  EMAIL_REGEX,
  FIRST_NAME_REGEX,
  LAST_NAME_REGEX,
  PHONE_NUMBER_REGEX,
  STATE_NAME_REGEX,
  STREET_NAME_REGEX,
  STREET_NO_REGEX,
  TITLE_REGEX,
} from '../../constants/regexExpressions';
import {
  ApplyEaseOutAnimation,
  generateUniqueID,
} from '../../utils/helperFunctions';

interface CreateEmployeeProps {
  route: any;
  navigation: NavigationProp<ParamListBase>;
}

interface homeReducer {
  employeeList: any;
}

interface RootState {
  home: homeReducer;
}

const CreateEmployee = ({navigation, route}: CreateEmployeeProps) => {
  const {employeeList} = useSelector((state: RootState) => state?.home);
  const [isLoading, setisLoading] = useState(false);
  const employeeData = route?.params || {};
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [formData, setFormData] = useState({
    title: employeeData?.title || '',
    firstName: employeeData?.first_name || '',
    lastName: employeeData?.last_name || '',
    dateOfBirth: employeeData?.dob ? new Date(employeeData?.dob) : '',
    email: employeeData?.email || '',
    phone: employeeData?.phone || '',
    streetNo: employeeData?.street_no?.toString() || '',
    streetName: employeeData?.street_name || '',
    city: employeeData?.city || '',
    state: employeeData?.state || '',
    country: employeeData?.country || '',
  });
  const [formErrors, setFormErrors] = useState<any>({
    title: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    streetNo: '',
    streetName: '',
    city: '',
    state: '',
    country: '',
  });

  const onSaveRecord = () => {
    setisLoading(true);
    const tempObj = {
      id: employeeData?.id ? employeeData?.id : generateUniqueID(),
      title: formData.title,
      first_name: formData.firstName,
      last_name: formData.lastName,
      dob: new Date(formData.dateOfBirth).toISOString(),
      email: formData.email,
      phone: formData.phone,
      street_no: formData.streetNo,
      street_name: formData.streetName,
      city: formData.city,
      state: formData.state,
      country: formData.country,
    };
    if (employeeData?.id) {
      updateRecord(tempObj);
    } else {
      createNewRecord(tempObj);
    }
  };

  const updateRecord = (tempObj: any) => {
    const tempMap = employeeList?.map((val: any) => {
      if (employeeData?.id === val?.id) {
        return tempObj;
      } else {
        return val;
      }
    });
    actions.storeEmployeeData(tempMap);
    setisLoading(false);
    navigation.goBack();
  };

  const createNewRecord = (tempObj: any) => {
    const newEmployeeData = [tempObj, ...employeeList];
    actions.storeEmployeeData(newEmployeeData);
    setisLoading(false);
    navigation.goBack();
  };

  useEffect(() => {
    ApplyEaseOutAnimation();
    if (
      TITLE_REGEX.test(formData.title) &&
      FIRST_NAME_REGEX.test(formData.firstName) &&
      LAST_NAME_REGEX.test(formData.lastName) &&
      EMAIL_REGEX.test(formData.email) &&
      STREET_NO_REGEX.test(formData.streetNo) &&
      STREET_NAME_REGEX.test(formData.streetName) &&
      CITY_NAME_REGEX.test(formData.city) &&
      STATE_NAME_REGEX.test(formData.state) &&
      COUNTRY_NAME_REGX.test(formData.country) &&
      PHONE_NUMBER_REGEX.test(formData.phone)
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [formData]);

  const handleChange = (name: string, value: string) => {
    console.log('handleChange called with:', name, value);
    setFormData({
      ...formData,
      [name]: value,
    });

    const validationRules: {
      [key: string]: {regex: RegExp; errorMessage: string};
    } = {
      title: {regex: TITLE_REGEX, errorMessage: 'Please enter a valid Title'},
      firstName: {
        regex: FIRST_NAME_REGEX,
        errorMessage: 'Please enter a valid First Name',
      },
      lastName: {
        regex: LAST_NAME_REGEX,
        errorMessage: 'Please enter a valid Last Name',
      },
      email: {
        regex: EMAIL_REGEX,
        errorMessage: 'Please enter a valid Email Address',
      },
      phone: {
        regex: PHONE_NUMBER_REGEX,
        errorMessage: 'Please enter a valid Phone Number',
      },
      streetNo: {
        regex: STREET_NO_REGEX,
        errorMessage: 'Please enter a valid Street Number',
      },
      streetName: {
        regex: STREET_NAME_REGEX,
        errorMessage: 'Please enter a valid Street Name',
      },
      city: {regex: CITY_NAME_REGEX, errorMessage: 'Please enter a valid City'},
      state: {
        regex: STATE_NAME_REGEX,
        errorMessage: 'Please enter a valid State',
      },
      country: {
        regex: COUNTRY_NAME_REGX,
        errorMessage: 'Please enter a valid Country',
      },
    };

    // Check if the name exists in validationRules before accessing its properties
    if (validationRules.hasOwnProperty(name)) {
      const {regex, errorMessage} = validationRules[name];
      setFormErrors((prevErrors: any) => ({
        ...prevErrors,
        [name]: regex.test(value) ? '' : errorMessage,
      }));
    } else {
      console.error(`Validation rule for ${name} not found.`);
    }
  };

  const textInputs = [
    {
      placeholder: strings.ENTER_TITLE,
      headerText: strings.TITLE,
      value: formData.title,
      errorText: formErrors.title,
      key: 'title',
    },
    {
      placeholder: strings.ENTER_FIRST_NAME,
      headerText: strings.FIRST_NAME,
      value: formData.firstName,
      errorText: formErrors.firstName,
      key: 'firstName',
    },
    {
      placeholder: strings.ENTER_LAST_NAME,
      headerText: strings.LAST_NAME,
      value: formData.lastName,
      errorText: formErrors.lastName,
      key: 'lastName',
    },
    {
      placeholder: strings.ENTER_DATE_OF_BIRTH,
      headerText: strings.DATE_OF_BIRTH,
      value: formData.dateOfBirth,
    },
    {
      placeholder: strings.ENTER_EMAIL_ADDRESS,
      headerText: strings.EMAIL,
      value: formData.email,
      errorText: formErrors.email,
      key: 'email',
    },
    {
      placeholder: strings.ENTER_PHONE_NUMBER,
      headerText: strings.PHONE_NUMBER,
      value: formData.phone,
      errorText: formErrors.phone,
      key: 'phone',
    },
    {
      placeholder: strings.ENTER_STREE_NUMBER,
      headerText: strings.STREET_NUMBER,
      value: formData.streetNo,
      errorText: formErrors.streetNo,
      key: 'streetNo',
    },
    {
      placeholder: strings.ENTER_STREET_NAME,
      headerText: strings.STREET_NAME,
      value: formData.streetName,
      errorText: formErrors.streetName,
      key: 'streetName',
    },
    {
      placeholder: strings.ENTER_CITY,
      headerText: strings.CITY,
      value: formData.city,
      errorText: formErrors.city,
      key: 'city',
    },
    {
      placeholder: strings.ENTER_STATE,
      headerText: strings.STATE,
      value: formData.state,
      errorText: formErrors.state,
      key: 'state',
    },
    {
      placeholder: strings.ENTER_COUNTRY,
      headerText: strings.COUNTRY,
      value: formData.country,
      errorText: formErrors.country,
      key: 'country',
    },
  ];

  return (
    <WrapperContainer paddingAvailable={false}>
      <HeaderComp
        headerText={
          employeeData?.id ? strings.EDIT_EMPLOYEE : strings.CREATE_EMPLOYEE
        }
      />
      <KeyboardAwareScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}>
        {textInputs?.map((input, index) =>
          input.headerText === strings.DATE_OF_BIRTH ? (
            <View key={index}>
              <Text style={styles.headerTextStyle}>
                {strings.DATE_OF_BIRTH}
              </Text>
              <TouchableOpacity
                style={styles.textInputView}
                activeOpacity={1}
                onPress={() => setOpen(true)}>
                <Text
                  style={{
                    ...styles.dobText,
                    color: !formData.dateOfBirth
                      ? colors.blackOpacity50
                      : colors.black,
                  }}>
                  {!formData.dateOfBirth
                    ? strings.ENTER_DATE_OF_BIRTH
                    : moment(formData.dateOfBirth).format('DD-MM-YYYY')}
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <TextInputComp
              key={index}
              placeholder={input.placeholder}
              headerText={input.headerText}
              value={input.value}
              onChangeText={text => handleChange(input.key, text)}
              containerStyle={styles.containerStyle}
              errorText={input.errorText}
            />
           
          ),
        )}
        <ButtonComp
          btnText={employeeData?.id ? strings.EDIT_RECORD : strings.SAVE_RECORD}
          btnStyle={styles.btnStyle}
          disabled={disabled}
          onPressBtn={onSaveRecord}
          isLoading={isLoading}
        />
        <DatePicker
          modal
          mode="date"
          open={open}
          date={formData.dateOfBirth || new Date()}
          onConfirm={date => {
            setOpen(false);
            setFormData(prevState => ({
              ...prevState,
              dateOfBirth: date,
            }));
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
      </KeyboardAwareScrollView>
    </WrapperContainer>
  );
};

export default CreateEmployee;
