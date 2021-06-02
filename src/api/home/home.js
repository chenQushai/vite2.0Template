import {useGet} from '@v3utils/axios';

export const useGetData = () => useGet('', '/mock.json', responseData => responseData.data);