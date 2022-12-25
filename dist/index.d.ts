export declare function getBooks(): Promise<object>;
export declare function getBookChapters(id: string): Promise<object>;
export declare function getMovies(): Promise<object>;
export declare function getMovie(id: string): Promise<object>;
declare const _default: {
    getBooks: typeof getBooks;
    getBookChapters: typeof getBookChapters;
    getMovies: typeof getMovies;
    getMovie: typeof getMovie;
};
export default _default;
