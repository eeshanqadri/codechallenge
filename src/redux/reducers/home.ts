import {createSlice} from '@reduxjs/toolkit';

const homeSlice = createSlice({
  name: 'homeSlice',
  initialState: {
    employeeList: [],
  },
  reducers: {
    saveEmployeeData: (state, actions) => {
      state.employeeList = actions.payload;
    },
  },
});
export const {saveEmployeeData} = homeSlice.actions;
export default homeSlice.reducer;
