class EasyHTTP {

  //make and HTTP get request
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  }

  //make an HTTP post request
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  }

  //make an HTTP put request
  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  }

  //make an HTTP delete request
  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json'
          }
        })
        .then(res => res.json())
        .then(data => resolve('Deleted!'))
        .catch(error => reject(error));
    });
  }

}