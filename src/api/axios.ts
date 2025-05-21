import {
  dispatchClearUser,
  dispatchSetUser
} from '@admin/redux/dispatch/user.dispatch';
import { store } from '@admin/redux/store';
import {
  adminAppURL,
  adminBaseURL,
  getUserTimeZone,
  redirectTo,
  storageHelper
} from '@emr-web/common';
import axios, { AxiosRequestConfig } from 'axios';

axios.defaults.baseURL = adminBaseURL;

export const axiosGet = async (
  url: string,
  config?: AxiosRequestConfig<object>
) => axios.get(url, { ...config });

export const axiosPost = async (
  url: string,
  { data, ...config }: { data?: object } & AxiosRequestConfig<object>
) => axios.post(url, data, config);

export const axiosPatch = async (
  url: string,
  { data, ...config }: { data?: object } & AxiosRequestConfig<object>
) => axios.patch(url, data, config);

export const axiosPut = async (
  url: string,
  { data, ...config }: { data?: object } & AxiosRequestConfig<object>
) => axios.put(url, data, config);

export const axiosDelete = async (
  url: string,
  config?: AxiosRequestConfig<object>
) => axios.delete(url, config);

axios.interceptors.request.use((request) => {
  // request.headers.Accept = 'application/json';
  // request.headers['Content-Type'] = 'application/json';
  if (store?.getState()?.user?.accessToken) {
    request.headers.Authorization = `Bearer ${store.getState().user.accessToken}`;
  }
  request.headers['Cache-Control'] = 'no-cache';
  request.headers['ngrok-skip-browser-warning'] = 'true';
  request.headers.TimeZone = getUserTimeZone();
  return request;
});

let isUnauthorized = false;

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401 && !isUnauthorized) {
      try {
        isUnauthorized = true;
        const API_BASE_PATH = '/oauth';
        const tokenInfo = storageHelper().getItem<{ refresh_token?: string }>(
          'token',
          {}
        );
        const { refresh_token: refreshToken } = tokenInfo;
        const originalRequest = error.config;

        const data = {
          grant_type: 'refresh_token',
          client_id: import.meta.env.VITE_CLIENT_ID,
          client_secret: import.meta.env.VITE_CLIENT_SECRET,
          scope: 'nurse-triage-assist',
          refresh_token: refreshToken
        };

        const refreshResponse = await axios.post(
          `${API_BASE_PATH}/token`,
          data
        );

        const { access_token: newAccessToken, refresh_token: newRefreshToken } =
          refreshResponse.data;

        // Update user in Redux and localStorage
        const tempData = {
          accessToken: newAccessToken,
          refreshToken: newRefreshToken,
          tokenInfo: refreshResponse.data
          // Check
        };
        storageHelper().setItem('token', refreshResponse.data);
        dispatchSetUser(tempData);

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return axios(originalRequest);
      } catch {
        dispatchClearUser();
        if (window.location.pathname !== '/login') {
          redirectTo(adminAppURL);
        }
      }
    }
    return Promise.reject(error);
  }
);
