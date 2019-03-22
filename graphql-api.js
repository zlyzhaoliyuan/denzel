var express = require('express');
var express_graphql = require('express-graphql');
var { buildSchema } = require('graphql');
var data = require('./data.js')
var moviesData = data.moviesData
var schema = buildSchema(`
    type Query {
        populate: Int
        movie(id: String!): Movie
        movies: Movie
        search(limit:Int, metascore:Int): [Movie]
      
    }, 
    type Movie{
        link: String,
        id: String,
        metascore: Int,
        poster: String,
        rating: Float,    
        synopsis: String,
        title: String,
        votes: String,
        year:Int
    }
`);

console.log(moviesData)
var getmovies = () => {
    return moviesData
}
var movie = (args)=>{
    var id = args.id
    console.log(id)
    return moviesData.filter(m => m.id == id)[0]
}
var populate = ()=>{
    console.log(moviesData.length)
    return moviesData.length
}
var movies = function(){
  var num = Math.round(Math.random() * 56)
  return moviesData[num]
}
var search = (args)=>{
  
  var metascore_value = args.metascore
  var limit_value = args.limit
  if (limit_value==null){
     limit_value=5
  }
  return moviesData.filter(m => m.metascore > metascore_value).slice(0,limit_value)
  // return moviesData.slice(0,5)
}



var root = {
    populate:populate,
    movies: movies,
    movie: movie,
    search: search
};

var app = express();
app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));
app.listen(9292, () => console.log('graphql server is running'));