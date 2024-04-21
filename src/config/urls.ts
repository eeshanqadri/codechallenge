export const API_BASE_URL = 'https://randomuser.me';

export const getApiUrl = (endpoint: string) => API_BASE_URL + endpoint;

export const GET_RANDOM_USER = getApiUrl('/api');
