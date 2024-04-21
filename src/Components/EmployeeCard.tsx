import React, {useMemo} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
import {moderateScale, textScale} from '../styles/responsiveSize';
import commonStyles from '../styles/commonStyles';
import colors from '../styles/colors';
import imagePath from '../constants/imagePath';
import strings from '../constants/lang';
import moment from 'moment';
import {
  getScaleTransformationStyle,
  pressInAnimation,
  pressOutAnimation,
} from '../utils/helperFunctions';

interface EmployeeCardProps {
  item: any;
  index: number;
  onPressEdit?: () => void;
  onPressDelete?: () => void;
}

const EmployeeCard = ({
  item,
  index,
  onPressEdit,
  onPressDelete,
}: EmployeeCardProps) => {
  const scaleInAnimated = new Animated.Value(0);

  const employeeData = useMemo(
    () => [
      {
        id: 1,
        name: strings.DATE_OF_BIRTH,
        value: moment(item?.dob).format('DD-MM-YYYY'),
      },
      {id: 2, name: strings.PHONE_NUMBER, value: item?.phone},
      {id: 3, name: strings.EMAIL, value: item?.email},
      {
        id: 4,
        name: strings.LOCATION,
        value: `${item?.street_no}, ${item?.street_name}, ${item?.city}, ${item?.state}, ${item?.country}`,
      },
    ],
    [item],
  );
  return (
    <TouchableOpacity
      key={index}
      activeOpacity={0.9}
      style={[
        styles.cardContainer,
        getScaleTransformationStyle(scaleInAnimated),
      ]}
      onPressIn={() => pressInAnimation(scaleInAnimated)}
      onPressOut={() => pressOutAnimation(scaleInAnimated)}>
      <View style={styles.titleView}>
        <View style={styles.nameView}>
          <Text style={styles.titleStyle}>
            {item?.title} {item?.first_name} {item?.last_name}
          </Text>
        </View>
        <TouchableOpacity activeOpacity={1} onPress={onPressEdit}>
          <Image source={imagePath.editIcon} style={{tintColor: colors.green}} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.deleteIconStyle}
          onPress={onPressDelete}>
          <Image source={imagePath.deleteIcon}  style={{tintColor: colors.red}}/>
        </TouchableOpacity>
      </View>
      {employeeData?.map((data, ind) => (
        <View key={ind}>
          <Text style={styles.subTitle}>{data?.name}</Text>
          <Text style={styles.subTitleValue}>{data?.value}</Text>
        </View>
      ))}
    </TouchableOpacity>
  );
};

export default React.memo(EmployeeCard);

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.blackOpacity10,
    borderWidth: 0.1,
    borderColor: colors.blackOpacity12,
    borderRadius: moderateScale(6),
    padding: moderateScale(16),
    paddingVertical: moderateScale(20),
  },
  titleStyle: {
    ...commonStyles.font_16_medium,
    marginBottom: moderateScale(16),
  },
  subTitle: {
    ...commonStyles.font_12_medium,
    fontSize: textScale(13),
    marginBottom: moderateScale(2),
  },
  subTitleValue: {
    ...commonStyles.font_14_regular,
    marginBottom: moderateScale(12),
  },
  titleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameView: {flex: 1},
  deleteIconStyle: {
    marginLeft: moderateScale(14),
  },
});
