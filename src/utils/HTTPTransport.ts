const METHODS = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  PATCH: "PATCH",
  DELETE: "DELETE",
};

function queryStringify(data) {
  const query = Object.entries(data).map(([key, value]) => `${key}=${value}`);
  return query ? `?  ${query.join("&")}` : "";
}

interface Options {
  data: any;
  timeout: number;
  headers: string;
}

interface RequestOptions {
  method: string;
  data: any;
  headers: string;
  timeout: number;
}

class HTTPTransport {
  get(url: string, options: Options = { headers: "", data: {}, timeout: 0 }) {
    const dataQuery = queryStringify(options.data);
    return this.request(url + dataQuery, { ...options, method: METHODS.GET });
  }

  post(url, options: Options = { headers: "", data: {}, timeout: 0 }) {
    return this.request(url, { ...options, method: METHODS.POST });
  }

  put(url, options: Options = { headers: "", data: {}, timeout: 0 }) {
    return this.request(url, { ...options, method: METHODS.PUT });
  }

  delete(url, options: Options = { headers: "", data: {}, timeout: 0 }) {
    return this.request(url, { ...options, method: METHODS.DELETE });
  }

  request(
    url,
    options: RequestOptions = {
      data: {},
      headers: "",
      method: METHODS.GET,
      timeout: 2000,
    }
  ) {
    const { method, data, headers, timeout } = options;
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);

      if (headers) {
        // eslint-disable-next-line no-restricted-syntax
        for (const [key, value] of Object.entries(headers)) {
          xhr.setRequestHeader(key, value);
        }
      }

      setTimeout(() => {
        reject(new Error("Время на запрос вышло"));
      }, timeout || 2000);

      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;
      if (method === METHODS.GET || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  }
}

export default HTTPTransport;
