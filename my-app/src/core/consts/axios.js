import qs from 'qs';

export const AXIOS_BASE_URL = process.env.APIURL || process.env.REACT_APP_APIURL;

export const AXIOS_CONFIG = {
    timeout: 9999999,
    baseURL: AXIOS_BASE_URL,
    headers: {
        common: {
            "Cache-Control": "no-cache, no-store, must-revalidate",
            Pragma: "no-cache",
            "Content-Type": "application/json",
            Accept: "application/json",
        }
    },
    paramsSerializer: (params) => qs.stringify(params, {indices: false})
}