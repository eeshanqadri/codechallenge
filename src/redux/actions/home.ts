import {GET_RANDOM_USER} from '../../config/urls';
import {apiGet, setEmployeeData} from '../../utils/utils';
import {saveEmployeeData} from '../reducers/home';
import store from '../store';
const {dispatch} = store;

export const storeEmployeeData = (data: any) => {
  setEmployeeData(data);
  dispatch(saveEmployeeData(data));
};

export function getRandomEmployee(page_no: number) {
  return new Promise((resolve, reject) => {
    apiGet(GET_RANDOM_USER + `?results=10&page=${page_no}`)
      .then((res: any) => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
}
