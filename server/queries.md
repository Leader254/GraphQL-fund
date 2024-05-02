query GetUser($userId: ID!) {
    user(id: $userId) {
      age
      name
      nationality
      username
      friends {
        name
        nationality
      }
    }
  }
  
  query GetUsers {
    users {
      id
      age
      name
      nationality
      username
      friends {
        name
        nationality
      }
    }
  }
  query GetUser($userId: ID!) {
  user(id: $userId) {
    age
    name
    nationality
    username
    friends {
      name
      nationality
    }
    favoriteMovie {
      name
      yearOfPublication
    }
  }
}
  
  query getSingleMovie($movieName: String!){
    movie(name: $movieName){
      name
      yearOfPublication
      isInTheaters
    }
  }
   query getAllMovies{
     movies{
       name,
       yearOfPublication,
       isInTheaters
     }
   }
  