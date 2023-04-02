import axios from "axios";
import { API_URL_LOCAL, countriesStates } from "../common/const"
// import Cookies from "universal-cookie"
const apiEndPoint = process.env.NODE_ENV === 'production' ? API_URL_LOCAL : API_URL_LOCAL;

const axiosInstance = axios.create({
    baseURL: apiEndPoint,
});
// const cookies = new Cookies();

export const getLoginUser = () => {
    return {
        // "login": cookies.get('OAMUserName'),
    }
}

export class ApiService {

    static async getData(url, headers, cancelToken, data) {
        const config = {
            headers: {
                ...(headers || {}),
                'Content-Type': 'application/json'
            },
        };
        if (data) {
            config.data = data;
        }
        if (cancelToken && cancelToken.token) {
            config.cancelToken = cancelToken.token;
        }
        const response = await axiosInstance.get(url, config).catch((err) => {
            data = { error: 'something went wrong' };
        });
        return data || response.data;
    }

    static async postMethod(url, data, headers) {
        const config = {
            headers: {
                ...(headers || {}),
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
            }
        };
        let resData = '';
        const response = await axiosInstance.post(url, data, config).catch(thrown => {
            if (thrown.toString() === 'Cancel') {
                resData = 'cancel';
            } else {
                resData = { error: 'something went wrong' };;
            }
        });
        return resData || response.res;
    }

    static async putMethod(url, data, headers, cancelToken) {
        const config = {
            headers: {
                ...(headers || {})
            }
        };
        if (cancelToken && cancelToken.token) {
            config.cancelToken = cancelToken.token;
        }
        let resData = '';
        const response = await axiosInstance.put(url, data, config).catch(thrown => {
            if (thrown.toString() === 'Cancel') {
                resData = 'cancel';
            } else {
                resData = { error: 'something went wrong' };;
            }
        });
        return resData || response.data;
    }

    async getFruitDetail(appCode) {
        return await ApiService.getData(`/fruits`);
        // return appDetails
    }

    async postLogin(body) {
        return await ApiService.postMethod(`/user/login`, body);
    }

    async postRegistration(body) {
        return await ApiService.postMethod(`/user/register`, body);
    }

    async getStateCountry() {
        // return await ApiService.getData(`/country`);
        return countriesStates
    }

    /*async getAllApplications(appId) {
        return await ApiService.getData(`v1/applications/${appId || ""}`);
        //return await ApiService.getData(`applications.json`);
    }

    async applicationOnBoarding(body) {
        return await ApiService.postMethod(`v1/applications`, body);
    }*/

    async logout() {
        const res = await ApiService.getData(`v1/logout`);
        if (!res || res.error) {
            // return message.error('something is wrong! please try again');
        } else {
            // cookies.remove('USER_ROLE', { path: '/' })
            window.history.pushState({}, document.title, "/");
            window.location.reload()
        }
    }

}
