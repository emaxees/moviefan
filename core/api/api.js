function Api() {
    // TODO: use environment vars & fetchBase function
    const CW_API_URL = 'http://www.omdbapi.com/';
    const API_KEY = 'ad68041a';

    this.getMovies = async (resource) => {
        const res = await fetch(CW_API_URL + resource + API_KEY);
        const data = await res.json();
        return data.Search;
    };

    // this.fetchBase = async (resource, options) => {
    //     const params = { ...options.params, rel: true };
    //     const headers = {
    //         ...options.headers,
    //     };
    //     let url = [
    //         `${process.env.CW_API_URL}${resource}`,
    //         ...Object.keys(params).map((key, index) => {
    //             if (index === 0) {
    //    return `?${stringUtils.encode(key)}=${stringUtils.encode(params[key])}`
    // };
    //             return `&${stringUtils.encode(key)}=${stringUtils.encode(params[key])}`;
    //         }),
    //     ].join('');

    //     if (options.filters) url = `${url}&${options.filters.join('&')}`;
    //     if ((!options.headers || !options.headers.Authorization) && tokenSess) {
    //         headers.Authorization = `Bearer ${tokenSess}`;
    //     }

    //     const response = await unfetch(url, {
    //         method: options.method,
    //         body: JSON.stringify(options.body),
    //         headers,
    //     });

    //     const data = await response.json();
    //     if (response.status >= 200 && response.status <= 399) {
    //         return data;
    //     }

    //     throw new Error(String(data.details));
    // };
}

export default Api;
