// import api from '@utils/api';

const apiInfo = {
    testApi: {
        url: '/omsdata/basiccode/issueconf',
        method: 'get',
    }
}

export default {
    testApi: (params?: any, options?: any) => {
        return 'test'
        // api(apiInfo.testApi, params, options);
    },
}