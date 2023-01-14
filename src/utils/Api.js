class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getCountries() {
    return fetch(
      `${this._baseUrl}/all?fields=name,capital,flags,population,region`
    ).then(this._checkResponse);
  }
}

const api = new Api({
  baseUrl: "https://restcountries.com/v2/",
});

export default api;
