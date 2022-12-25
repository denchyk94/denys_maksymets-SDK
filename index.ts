import axios from 'axios';

const API_URL: string = 'https://the-one-api.dev/v2';
const ACCESS_TOKEN: string = '';

export function getBooks(): Promise<object> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/book`, {
        headers: {
          'Authorization': `token ${ACCESS_TOKEN}`
        }
      })
      .then((resp) => {
        resolve(resp.data);
      })
      .catch(reject);
  });
}

export function getBookChapters(id: string): Promise<object> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/book/${id}/chapter`, {
        headers: {
          'Authorization': `token ${ACCESS_TOKEN}`
        }
      })
      .then((resp) => {
        resolve(resp.data);
      })
      .catch(reject);
  });
}

export function getMovies(): Promise<object> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/movie`, {
        headers: {
          'Authorization': `token ${ACCESS_TOKEN}`
        }
      })
      .then((resp) => {
        resolve(resp.data);
      })
      .catch(reject);
  });
}

export function getMovie(id: string): Promise<object> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/movie/${id}`, {
        headers: {
          'Authorization': `token ${ACCESS_TOKEN}`
        }
      })
      .then((resp) => {
        resolve(resp.data);
      })
      .catch(reject);
  });
}

export default { getBooks, getBookChapters, getMovies, getMovie };