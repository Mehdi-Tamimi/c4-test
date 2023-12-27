


export async function postData(body, method, url) {
    const response = await fetch(url, {
      method: method, 
      //mode: "cors", 
       headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            'Accept' : 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(body), 
    }).then( response=> response.json())
    return response 
  }

export async function getData(url) {
    const response = await fetch(url, {
      method: "GET", 
      //mode: "cors", 
       headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            'Accept' : 'application/json; charset=UTF-8'
      },
    //   body: JSON.stringify(body), 
    })
    .then( response => response.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))
    return response 
}

// 
// JSON.parse(response)