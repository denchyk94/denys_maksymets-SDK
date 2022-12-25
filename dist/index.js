"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMovie = exports.getMovies = exports.getBookChapters = exports.getBooks = void 0;
const axios_1 = __importDefault(require("axios"));
const API_URL = 'https://the-one-api.dev/v2';
const ACCESS_TOKEN = '';
function getBooks() {
    return new Promise((resolve, reject) => {
        axios_1.default
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
exports.getBooks = getBooks;
function getBookChapters(id) {
    return new Promise((resolve, reject) => {
        axios_1.default
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
exports.getBookChapters = getBookChapters;
function getMovies() {
    return new Promise((resolve, reject) => {
        axios_1.default
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
exports.getMovies = getMovies;
function getMovie(id) {
    return new Promise((resolve, reject) => {
        axios_1.default
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
exports.getMovie = getMovie;
exports.default = { getBooks, getBookChapters, getMovies, getMovie };
