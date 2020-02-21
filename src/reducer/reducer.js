import React, {createContext, useContext, useEffect, useReducer} from "react";

const store = {
    user: null,
    books: null,
    movies: null
};

const obj = {
    setBooks: (state, action) => {
        return { ...state, books: action.books };
    },
    deleteBook: () => {},
    setMovies: (state, action) => {
        return { ...state, movies: action.movies };
    },
    deleteMovies: () => {},
    setUser: (state, action) => {
        return { ...state, user: action.user };
    },
    removeUser: () => {}
}

function reducer(state, action) {
    const fn = obj[action.type];
    if (fn) {
        return fn(state, action);
    } else {
        console.error("wrong type");
    }
}

const Context = createContext(null)

function App() {
    const [state, dispatch] = useReducer(reducer, store);

    const api = { state, dispatch };
    return (
        <Context.Provider value={api}>
            <User />
            <hr />
            <Books />
            <Movies />
        </Context.Provider>
    );
}

export default App;

function Movies() {
    const { state, dispatch } = useContext(Context);
    useEffect(() => {
        ajax("/movies").then(movies => {
            dispatch({ type: "setMovies", movies: movies });
        });
    }, []);
    return (
        <div>
            <h1>我的电影</h1>
            <ol>
                {state.movies
                    ? state.movies.map(movie => <li key={movie.id}>{movie.name}</li>)
                    : "加载中"}
            </ol>
        </div>
    );
}

function Books() {
    const { state, dispatch } = useContext(Context);
    useEffect(() => {
        ajax("/books").then(books => {
            dispatch({ type: "setBooks", books: books });
        });
    }, []);
    return (
        <div>
            <h1>我的书籍</h1>
            <ol>
                {state.books
                    ? state.books.map(book => <li key={book.id}>{book.name}</li>)
                    : "加载中"}
            </ol>
        </div>
    );
}

function User() {
    const { state, dispatch } = useContext(Context);
    useEffect(() => {
        ajax("/user").then(user => {
            dispatch({ type: "setUser", user: user });
        });
    }, []);
    return (
        <div>
            <h1>个人信息</h1>
            <div>name: {state.user ? state.user.name : ""}</div>
        </div>
    );
}



// 两秒钟后，根据 path 返回一个对象，必定成功不会失败
function ajax(path) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (path === "/user") {
                resolve({
                    id: 1,
                    name: "Frank"
                });
            } else if (path === "/books") {
                resolve([
                    {
                        id: 1,
                        name: "JavaScript 高级程序设计"
                    },
                    {
                        id: 2,
                        name: "JavaScript 精粹"
                    }
                ]);
            } else if (path === "/movies") {
                resolve([
                    {
                        id: 1,
                        name: "爱在黎明破晓前"
                    },
                    {
                        id: 2,
                        name: "恋恋笔记本"
                    }
                ]);
            }
        }, 2000);
    });
}
