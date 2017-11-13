

export const callAPI = (url, params, method) => {
    
    // params = {...params, "api-key": APIKey};
    // url = new URL(url);

    // Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

    return fetch(url, {
        body: JSON.stringify(params)
        },
    ).then(res => {
        return res.json()
    }).catch(err => 
        console.log(err)
    )
}