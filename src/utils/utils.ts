import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export async function getHeaders() {
  const userData = await AsyncStorage.getItem('userData');
  if (userData) {
    const userDataObject = JSON.parse(userData);
    if (userDataObject?.token !== undefined) {
      return {
        authorization: `${'Bearer ' + userDataObject?.token}`,
      };
    }
  }
  return {};
}

export function setEmployeeData(data: any) {
  data = JSON.stringify(data);
  return AsyncStorage.setItem('employeeData', data);
}

export async function getEmployeeData() {
  return new Promise(resolve => {
    AsyncStorage.getItem('employeeData').then((data: any) => {
      resolve(JSON.parse(data));
    });
  });
}

export async function apiReq(
  endPoint: string,
  data: any,
  method: string,
  headers: object,
  requestOptions = {},
) {
  console.log(endPoint, 'endPoint', requestOptions);
  return new Promise(async (res, rej) => {
    const getTokenHeader = await getHeaders();

    headers = {
      ...getTokenHeader,
      ...headers,
      ...{'Content-Type': 'application/json'},
    };

    console.log('API Endpoint :-> ', endPoint);
    console.log('API Data :-> ', data);
    console.log('API Headers :-> ', headers);

    axios({
      method,
      url: endPoint,
      params: data,
      headers,
      data,
    })
      .then(result => {
        console.log('API Result :-> ', result);
        if (result?.data.status === false) {
          return rej(result?.data);
        }
        return res(result?.data);
      })
      .catch(error => {
        console.log('API error =>', error);

        const errorResponse = error?.response;

        if (errorResponse?.status === 401) {
          console.log('ERROR CODE 401');
        }

        if (error?.response?.data) {
          if (!error?.response?.data?.message) {
            return rej({
              ...error?.response?.data,
              msg: error?.response?.data?.message || 'Network Error',
            });
          }
          return rej(error?.response?.data);
        } else {
          return rej({message: 'Network Error', msg: 'Network Error'});
        }
      });
  });
}

export function apiPost(endPoint: string, data: any, headers = {}) {
  return apiReq(endPoint, data, 'post', headers);
}

export function apiGet(
  endPoint: string,
  data?: any,
  headers = {},
  requestOptions?: any,
) {
  return apiReq(endPoint, data, 'get', headers, requestOptions);
}
