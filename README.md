# DENZEL

> The must-watch Denzel's movies

![denzel](https://m.media-amazon.com/images/M/MV5BMjE5NDU2Mzc3MV5BMl5BanBnXkFtZTcwNjAwNTE5OQ@@._V1_SY1000_SX750_AL_.jpg)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [🐣 Introduction](#-introduction)
- [🎯 Objectives](#-objectives)
- [👩‍💻 Just tell me what to do](#%E2%80%8D-just-tell-me-what-to-do)
- [🏃‍♀️ Steps to do](#%E2%80%8D-steps-to-do)
  - [Definition and Configuration](#definition-and-configuration)
  - [REST endpoints to implement](#rest-endpoints-to-implement)
    - [`GET /movies/populate`](#get-moviespopulate)
    - [`GET /movies`](#get-movies)
    - [`GET /movies/:id`](#get-moviesid)
    - [`GET /movies/search`](#get-moviessearch)
    - [POST /movies/:id](#post-moviesid)
  - [GraphQL endpoints to implement](#graphql-endpoints-to-implement)
    - [(A suggested) Schema](#a-suggested-schema)
  - [Bonus - The Client side](#bonus---the-client-side)
- [🛣️ Related course](#-related-course)
- [Licence](#licence)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 🐣 Introduction

Denzel Washington is one my favorite actor.

He won 2 Oscars. [Another 82 wins & 166 nominations](https://www.imdb.com/name/nm0000243/awards?ref_=nm_awd)

## 🎯 Objectives

**Build a REST and GRAPHQL API to get the must-watch Denzel's movies**.

## 👩‍💻 Just tell me what to do

<ol>
<li>Fork the project via `github`

![fork](./fork.png)
</li>

<li>Clone your forked repository project `https://github.com/YOUR_USERNAME/denzel`

```sh
❯ cd /path/to/workspace
❯ git clone git@github.com:YOUR_USERNAME/denzel.git
```
</li>

<li><strong>Do things</strong></li>
<li>Commit and push your different modifications

```sh
❯ cd /path/to/workspace/denzel
❯ git add -A && git commit -m "feat(movies): get a random movie"
❯ git push origin master
```
</li>
</ol>

**Note**:

* [why following a commit message convention?](https://www.conventionalcommits.org)
* if you catch an error about authentication, [add your ssh to your github profile](https://help.github.com/articles/connecting-to-github-with-ssh/).
* If you need some helps on git commands, read [git - the simple guide](http://rogerdudler.github.io/git-guide/)

## 🏃‍♀️ Steps to do

### Definition and Configuration

* A **must-watch** movie is a movie with a `metascore` higher than `70`.
* API should listen locally the port `9292`.
* Data should be stored in MongoDB. Backed either with a DaaS: [mLab](https://mlab.com) or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas). Either with a [container Docker](https://hub.docker.com/r/mvertes/alpine-mongo).

### REST endpoints to implement

#### `GET /movies/populate`

Populate the database with all the [Denzel's movies from IMDb](https://www.imdb.com/name/nm0000243).

You could use the [src/imdb.js](./src/imdb.js) exported function.

```sh
❯ curl -H "Accept: application/json" http://localhost:9292/movies/populate
{
  "total": 56
  "status": 200
}
```

#### `GET /movies`

Fetch a random **must-watch** movie.

```sh
❯ curl -H "Accept: application/json" http://localhost:9292/movies
{
  "id":
  "metascore":
  "rating":
  "link":
  "poster":,
  "review",
  "votes",
  "synopsis"
}
```

#### `GET /movies/:id`

Fetch a specific movie

```sh
❯ curl -H "Accept: application/json" http://localhost:9292/movies/tt1907668
{
  "id":
  "metascore":
  "rating":
  "link":
  "poster":,
  "review",
  "votes",
  "synopsis"
}
```

#### `GET /movies/search`

Search for Denzel's movies.

This endpoint accepts the following optional query string parameters:

* `limit` - number of movies to return (default: 5)
* `metascore` - filter by metascore (default: 0)

```sh
❯ curl -H "Accept: application/json" http://localhost:9292/movies/search?limit=5&metascore=90
{
  "limit": 5,
  "results": [
    {
      "id":
      "metascore":
      "rating":
      "link":
      "poster":,
      "review",
      "votes",
      "synopsis"
    },
    {
      "id":
      "metascore":
      "rating":
      "link":
      "poster":,
      "review",
      "votes",
      "synopsis"
    }
  ],
  "status": 200,
  "total": 2,
}
```

#### POST /movies/:id

Set a watched date and a review.

This endpoint accepts the following post parameters:

* `date` - the watched date
* `review` - the personal review

```sh
❯ curl -X POST -d '{"date": , "review": "😍 🔥"}' -H "Content-Type: application/json" http://localhost:9292/movies/tt0328107
{
  "_id": "507f191e810c19729de860ea"
  "status": 200,
}
```


### GraphQL endpoints to implement

Same as REST API with `/graphql` as first root path.

* `GET /graphql/movies/populate`
* `GET /graphql/movies`
* `GET /graphql/movies/:id`
* `GET /graphql/movies/search`
* `POST /graphql/movies/:id`

#### (A suggested) Schema

```
schema {
  query Query
}

type Query {
  movies: [Movies]
}

type Movie {
  title: String
  synopsis: String
  link: String
  year: nt
}
```

### Bonus - The Client side

Build a client side web application.

The MVP definiton could be:

Each time, we open the web application or refresh the page, fetch a random **must-watch** movie and

* display the title
* display the synopsis
* display the cover
* display the metascore
* display the review
* allow to open the IMDb record

## 🛣️ Related course

* [Course 7 - API-ness](https://github.com/92bondstreet/javascript-empire#-course-7---api-ness)
* [Course 8 - Progressive Web App, world of Hybrid](https://github.com/92bondstreet/javascript-empire#-course-8---progressive-web-app-world-of-hybrid)

## Licence

[Uncopyrighted](http://zenhabits.net/uncopyright/)
