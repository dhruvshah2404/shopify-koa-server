const axios = require('axios/index');

const restClient = (query, auth) => {

    const settings = {
        async: true,
        crossDomain: true,
        url: `https://${auth.shop}/admin/api/2019-07/products.json`,
        method: 'POST',
        headers: {
            'X-Shopify-Access-Token': auth.token,
            'Content-Type': 'application/json'
        },
        data: {},
        timeout: 10000
    };

    return axios(Object.assign({}, settings, {data: query}));
};

module.exports = {
    restClient
};
