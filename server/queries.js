const { restClient } = require('./apiClient.js');

module.exports = {
  getProducts(auth) {
  
    return restClient(query, auth);
  }
}
