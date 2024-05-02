const { UserList, MovieList } = require("../data/FakeData")
const users = UserList;
const movies = MovieList;

const _ = require('lodash');

const resolvers = {
    Query: {
        users: () => {
            return users;
        },
        user: ( parent, args ) => {
            // using lodash
            const id = args.id;
            const user = _.find(users, { id: Number(id) })
            if(!user){
                return null;
            }
            return user;
        },
        movies: () => {
            return movies;
        },
        movie: (parent, args) => movies.find(movie => movie.name == String(args.name))
    },
    User: {
        favoriteMovie: () => {
            // return _.filter(movies, (movie) => movie.yearOfPublication >= 2007 && movie.yearOfPublication <= 2009)  ==> using lodash
            return movies.filter(movie => movie.yearOfPublication >= 2000 && movie.yearOfPublication <= 2009)
        }
    }
}

module.exports = { resolvers } 