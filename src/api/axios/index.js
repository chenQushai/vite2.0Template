import {create} from '@v3utils/axios'

const service = create({
    baseURL: '',
});

//响应拦截器
const responseSuccessInterceptor = (response) => {


    return response
};
const responseErrorInterceptor = (error) => {

};

service.interceptors.response.use(responseSuccessInterceptor, responseErrorInterceptor);
