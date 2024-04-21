import React, {useCallback, useEffect, useState} from 'react';
import {View, Image, FlatList, Text, ActivityIndicator} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import _ from 'lodash';

// Import components and constants
import WrapperContainer from '../../Components/WrapperContainer';
import HeaderComp from '../../Components/HeaderComp';
import ButtonComp from '../../Components/ButtonComp';
import TextInputComp from '../../Components/TextInputComp';
import EmployeeCard from '../../Components/EmployeeCard';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import navigationStrings from '../../constants/navigationStrings';
import {moderateScale} from '../../styles/responsiveSize';

// Import actions
import actions from '../../redux/actions';

// Styles
import styles from './styles';

interface renderEmployeeListProps {
  item: any;
  index: number;
}

interface HomeScreenProps {
  navigation: NavigationProp<ParamListBase>;
}

interface homeReducer {
  employeeList: any;
}

interface RootState {
  home: homeReducer;
}

const HomeScreen = ({navigation}: HomeScreenProps) => {
  // Redux state
  const {employeeList} = useSelector((state: RootState) => state?.home);

  // Local state
  const [searchEmployee, setSearchEmployee] = useState('');
  const [pageNo, setPageNo] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchEmployeeList, setSearchEmployeeList] = useState<any[]>([]);

  useEffect(() => {
    getRandomEmployee(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const delayedSearch = _.debounce(searchEmployeeQuery, 300);
    delayedSearch(searchEmployee);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchEmployee]);

  const getRandomEmployee = useCallback(
    (currPage: number) => {
      // eslint-disable-next-line curly
      if (loading) return;
      setLoading(true);
      actions
        .getRandomEmployee(currPage)
        .then((res: any) => {
          const restructedArray = res?.results?.map((employee: any) => ({
            id: employee.id.value,
            title: employee.name.title,
            first_name: employee.name.first,
            last_name: employee.name.last,
            dob: new Date(employee.dob.date).toISOString(),
            phone: employee.phone,
            email: employee.email,
            street_no: employee.location.street.number,
            street_name: employee.location.street.name,
            city: employee.location.city,
            state: employee.location.state,
            country: employee.location.country,
          }));
          const newEmployeeData = [...employeeList, ...restructedArray];
          actions.storeEmployeeData(newEmployeeData);
          setPageNo(currPage + 1);
        })
        .catch(err => {
          console.log(err, 'error from api');
        })
        .finally(() => setLoading(false));
    },
    [loading, employeeList],
  );

  const searchEmployeeQuery = useCallback(
    (query: string) => {
      setLoading(true);
      if (!query) {
        setSearchEmployeeList([]);
        return;
      }

      const filteredList = employeeList.filter((item: any) => {
        // Check if any of the fields match the search query
        const lowerCaseQuery = query.toLowerCase();
        const employeeName =
          item.title + ' ' + item.first_name + ' ' + item.last_name;
        return (
          employeeName.toLowerCase().includes(lowerCaseQuery) ||
          item.dob.toLowerCase().toString().includes(lowerCaseQuery) ||
          item.phone.toLowerCase().includes(lowerCaseQuery) ||
          item.email.toLowerCase().includes(lowerCaseQuery) ||
          item.street_no.toString().toLowerCase().includes(lowerCaseQuery) ||
          item.street_name.toLowerCase().includes(lowerCaseQuery) ||
          item.city.toLowerCase().includes(lowerCaseQuery) ||
          item.state.toLowerCase().includes(lowerCaseQuery) ||
          item.country.toLowerCase().includes(lowerCaseQuery)
        );
      });

      setSearchEmployeeList(filteredList);
      setLoading(false);
    },
    [employeeList],
  );

  const keyExtractor = useCallback((item: any, index: number) => {
    return `${item?.id}_${index}`;
  }, []);

  const leftComp = useCallback(() => <Image source={imagePath.employee}  style={{width: moderateScale(30), height:
   moderateScale(30),}}/>, []);

  const rightCustomComp = useCallback(
    () => <Image source={imagePath.searchIcon} />,
    [],
  );

  const ItemSeparatorComponent = useCallback(
    () => <View style={{height: moderateScale(12)}} />,
    [],
  );

  const ListFooterComponent = useCallback(() => <ActivityIndicator />, []);

  const ListEmptyComponent = useCallback(
    () => (
      <View style={styles.emptyListView}>
        <Text style={styles.noListText}>
          {strings.NO_EMPLOYEE_RECORD_FOUND}
        </Text>
        <Text style={styles.noListSubTextStyle}>
          {strings.YOU_HAVE_NOT_CREATED_ANYTHING_YET}
        </Text>
      </View>
    ),
    [],
  );

  const ListEmptySearchComponent = useCallback(
    () => (
      <View style={styles.emptyListView}>
        <Text style={styles.noListText}>
          {strings.NO_EMPLOYEE_RECORD_FOUND}
        </Text>
      </View>
    ),
    [],
  );

  const onPressDelete = useCallback(
    (item: any) => {
      const temp_filtr = employeeList?.filter(
        (employee: any) => employee?.id !== item?.id,
      );
      actions.storeEmployeeData(temp_filtr);
    },
    [employeeList],
  );

  const renderEmployeeList = useCallback(
    ({item, index}: renderEmployeeListProps) => (
      <EmployeeCard
        item={item}
        index={index}
        onPressEdit={() =>
          navigation.navigate(navigationStrings.CREATE_EMPLOYEE, item)
        }
        onPressDelete={() => onPressDelete(item)}
      />
    ),
    [navigation, onPressDelete],
  );

  const onPressCreateEmployee = () => {
    navigation.navigate(navigationStrings.CREATE_EMPLOYEE);
  };

  const handleLoadMore = useCallback(() => {
    getRandomEmployee(pageNo);
  }, [getRandomEmployee, pageNo]);

  return (
    <WrapperContainer paddingAvailable={false}>
      <HeaderComp
        leftComp={leftComp}
        headerContainer={styles.headerContainer}
        headerText='Employee Directory'
      />
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <ButtonComp
            btnText={strings.CREATE_EMPLOYEE}
            onPressBtn={onPressCreateEmployee}
          />
          <TextInputComp
            value={searchEmployee}
            onChangeText={txt => setSearchEmployee(txt)}
            placeholder={strings.SEARCH}
            containerStyle={styles.textInputContainerStyle}
            textInputView={styles.textInputView}
            rightCustomComp={rightCustomComp}
          />
        </View>
      </View>
      <FlatList
        data={searchEmployee?.length > 0 ? searchEmployeeList : employeeList}
        keyExtractor={keyExtractor}
        renderItem={renderEmployeeList}
        ItemSeparatorComponent={ItemSeparatorComponent}
        ListEmptyComponent={
          loading
            ? null
            : searchEmployee.length > 0
            ? searchEmployeeList.length > 0
              ? null
              : ListEmptySearchComponent
            : ListEmptyComponent
        }
        contentContainerStyle={styles.contentContainerStyle}
        bounces={false}
        onEndReached={searchEmployee?.length > 0 ? null : handleLoadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={loading ? ListFooterComponent : null}
      />
    </WrapperContainer>
  );
};

export default HomeScreen;
