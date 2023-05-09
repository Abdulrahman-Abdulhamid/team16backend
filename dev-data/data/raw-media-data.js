const rawMediaData = [
  {
    title: '2001 A Space Odyssey',
    type: 'Movie',
    yearReleased: 1968,
    rating: 5,
    genres: [
      'Adventure',
      'Drama',
      'Science Fiction',
      'Thriller',
    ],
  },
  {
    title: 'Apocalypse Now',
    type: 'Movie',
    yearReleased: 1979,
    rating: 5,
    genres: ['Adventure', 'History', 'Thriller'],
  },
  {
    title: 'Citizen Kane',
    type: 'Movie',
    yearReleased: 1941,
    rating: 5,
    genres: ['Drama', 'Mystery'],
  },
  {
    title: 'Titanic',
    type: 'Movie',
    yearReleased: 1997,
    rating: 4,
    genres: ['Drama', 'History', 'Romance'],
  },
  {
    title: 'The Blind Side',
    type: 'Movie',
    yearReleased: 2009,
    rating: 3,
    genres: ['Drama', 'Sports'],
  },
  {
    title: 'Black Mirror',
    type: 'Show',
    yearReleased: 2011,
    rating: 4,
    genres: ['Drama', 'Science Fiction', 'Thriller'],
  },
  {
    title: 'Animal House',
    type: 'Movie',
    yearReleased: 1978,
    rating: 4,
    genres: ['Comedy', 'Romance'],
  },
  {
    title: 'Caddyshack',
    type: 'Movie',
    yearReleased: 1980,
    rating: 3,
    genres: ['Comedy', 'Sports'],
  },
  {
    title: 'Easy Rider',
    type: 'Movie',
    yearReleased: 1969,
    rating: 4,
    genres: ['Adventure', 'Comedy', 'Western'],
  },
  {
    title: 'Elephant',
    type: 'Movie',
    yearReleased: 2003,
    rating: 3,
    genres: ['Crime', 'Horror', 'Thriller'],
  },
  {
    title: 'Gilmore Girls',
    type: 'Show',
    yearReleased: 2000,
    rating: 4,
    genres: ['Comedy', 'Drama'],
  },
  {
    title: 'Eyes Wide Shut',
    type: 'Movie',
    yearReleased: 1999,
    rating: 4,
    genres: ['Drama', 'Mystery', 'Romance', 'Thriller'],
  },
  {
    title: 'Friends',
    type: 'Show',
    yearReleased: 1994,
    rating: 4,
    genres: ['Comedy', 'Romance'],
  },
  {
    title: 'Full Metal Jacket',
    type: 'Movie',
    yearReleased: 1987,
    rating: 5,
    genres: ['Action', 'Adventure', 'History'],
  },
  {
    title: 'Fight Club',
    type: 'Movie',
    yearReleased: 1999,
    rating: 4,
    genres: [
      'Action',
      'Crime',
      'Drama',
      'Mystery',
      'Thriller',
    ],
  },
  {
    title: 'Drive',
    type: 'Movie',
    yearReleased: 2011,
    rating: 3,
    genres: ['Action', 'Crime', 'Drama', 'Thriller'],
  },
  {
    title: 'The Office',
    type: 'Show',
    yearReleased: 2005,
    rating: 5,
    genres: ['Comedy', 'Romance'],
  },
  {
    title: 'Parks and Recreation',
    type: 'Show',
    yearReleased: 2009,
    rating: 3,
    genres: ['Comedy', 'Romance'],
  },
  {
    title: 'The Breakfast Club',
    type: 'Movie',
    yearReleased: 1985,
    rating: 4,
    genres: ['Comedy', 'Drama'],
  },
  {
    title: 'Beetlejuice',
    type: 'Movie',
    yearReleased: 1988,
    rating: 4,
    genres: ['Comedy', 'Horror', 'Kids', 'Fantasy'],
  },
  {
    title: 'The Lorax',
    type: 'Movie',
    yearReleased: 2012,
    rating: 3,
    genres: ['Animated', 'Comedy', 'Kids'],
  },
  {
    title: 'Keeping Up With The Kardashians',
    type: 'Show',
    yearReleased: 2007,
    rating: 3,
    genres: ['Reality', 'Romance'],
  },
  {
    title: 'The Help',
    type: 'Movie',
    yearReleased: 2011,
    rating: 3,
    genres: ['Drama', 'History'],
  },
  {
    title: 'Hidden Figures',
    type: 'Movie',
    yearReleased: 2017,
    rating: 3,
    genres: ['Drama', 'History'],
  },
  {
    title: 'The Hunger Games',
    type: 'Movie',
    yearReleased: 2012,
    rating: 4,
    genres: ['Action', 'Science Fiction', 'Thriller'],
  },
  {
    title: 'The Hunger Games: Catching Fire',
    type: 'Movie',
    yearReleased: 2013,
    rating: 4,
    genres: ['Action', 'Science Fiction', 'Thriller'],
  },
  {
    title: 'Lawrence of Arabia',
    type: 'Movie',
    yearReleased: 1962,
    rating: 5,
    genres: ['Adventure', 'Drama', 'History'],
  },
  {
    title: 'Doctor Zhivago',
    type: 'Movie',
    yearReleased: 1965,
    rating: 4,
    genres: ['Drama', 'History', 'Romance'],
  },
  {
    title: 'Tombstone',
    type: 'Movie',
    yearReleased: 1993,
    rating: 4,
    genres: ['Drama', 'History', 'Western'],
  },
  {
    title: 'Resevoir Dogs',
    type: 'Movie',
    yearReleased: 1992,
    rating: 4,
    genres: ['Crime', 'Drama', 'Mystery', 'Thriller'],
  },
  {
    title: 'Pulp Fiction',
    type: 'Movie',
    yearReleased: 1994,
    rating: 4,
    genres: ['Comedy', 'Crime', 'Drama', 'Thriller'],
  },
  {
    title: 'Se7en',
    type: 'Movie',
    yearReleased: 1995,
    rating: 4,
    genres: ['Crime', 'Drama', 'Mystery', 'Thriller'],
  },
  {
    title: 'Blade Runner',
    type: 'Movie',
    yearReleased: 1982,
    rating: 4,
    genres: ['Action', 'Science Fiction', 'Thriller'],
  },
  {
    title: 'Blade Runner 2049',
    type: 'Movie',
    yearReleased: 2017,
    rating: 3,
    genres: [
      'Action',
      'Adventure',
      'Science Fiction',
      'Thriller',
    ],
  },
  {
    title: 'Fargo',
    type: 'Movie',
    yearReleased: 1996,
    rating: 4,
    genres: ['Comedy', 'Crime', 'Drama', 'Thriller'],
  },
  {
    title: 'No Country for Old Men',
    type: 'Movie',
    yearReleased: 2007,
    rating: 4,
    genres: [
      'Crime',
      'Drama',
      'Mystery',
      'Thriller',
      'Western',
    ],
  },
  {
    title: 'The Matrix',
    type: 'Movie',
    yearReleased: 1999,
    rating: 4,
    genres: ['Action', 'Science Fiction'],
  },
  {
    title: 'The Matrix Reloaded',
    type: 'Movie',
    yearReleased: 2003,
    rating: 3,
    genres: ['Action', 'Science Fiction'],
  },
  {
    title: 'The Matrix Revolutions',
    type: 'Movie',
    yearReleased: 2003,
    rating: 2,
    genres: ['Action', 'Science Fiction'],
  },
  {
    title: 'The Matrix Resurrections',
    type: 'Movie',
    yearReleased: 2021,
    rating: 2,
    genres: ['Action', 'Science Fiction'],
  },
  {
    title: 'The Maze Runner',
    type: 'Movie',
    yearReleased: 2014,
    rating: 3,
    genres: [
      'Action',
      'Science Fiction',
      'Mystery',
      'Thriller',
    ],
  },
  {
    title: 'My Own Private Idaho',
    type: 'Movie',
    yearReleased: 1991,
    rating: 3,
    genres: ['Adventure', 'Drama', 'Romance'],
  },
  {
    title: 'My Neighbor Totoro',
    type: 'Movie',
    yearReleased: 1990,
    rating: 4,
    genres: ['Animated', 'Fantasy', 'Kids'],
  },
  {
    title: 'Ponyo',
    type: 'Movie',
    yearReleased: 2009,
    rating: 4,
    genres: ['Adventure', 'Animated', 'Fantasy', 'Kids'],
  },
  {
    title: 'Nocturnal Animals',
    type: 'Movie',
    yearReleased: 2016,
    rating: 4,
    genres: [
      'Crime',
      'Drama',
      'Romance',
      'Thriller',
      'Western',
    ],
  },
  {
    title: 'Dancer in the Dark',
    type: 'Movie',
    yearReleased: 2000,
    rating: 4,
    genres: ['Drama'],
  },
  {
    title: 'Donnie Darko',
    type: 'Movie',
    yearReleased: 2001,
    rating: 5,
    genres: [
      'Drama',
      'Horror',
      'Romance',
      'Science Fiction',
      'Thriller',
    ],
  },
  {
    title: 'Southland Tales',
    type: 'Movie',
    yearReleased: 2006,
    rating: 2,
    genres: [
      'Comedy',
      'Drama',
      'Science Fiction',
      'Thriller',
    ],
  },
  {
    title: 'The Shawshank Redemption',
    type: 'Movie',
    yearReleased: 1994,
    rating: 4,
    genres: ['Crime', 'Drama', 'Mystery'],
  },
  {
    title: 'Gone With the Wind',
    type: 'Movie',
    yearReleased: 1939,
    rating: 5,
    genres: ['Drama', 'History', 'Romance'],
  },
  {
    title: 'Ben-Hur',
    type: 'Movie',
    yearReleased: 1959,
    rating: 5,
    genres: [
      'Action',
      'Adventure',
      'Drama',
      'History',
      'Romance',
    ],
  },
  {
    title: 'The Last Temptation of Christ',
    type: 'Movie',
    yearReleased: 1988,
    rating: 4,
    genres: ['Drama'],
  },
  {
    title: 'Superbad',
    type: 'Movie',
    yearReleased: 2007,
    rating: 4,
    genres: ['Comedy'],
  },
  {
    title: 'Modern Family',
    type: 'Show',
    yearReleased: 2009,
    rating: 3,
    genres: ['Comedy'],
  },
  {
    title: 'Mr. Robot',
    type: 'Show',
    yearReleased: 2015,
    rating: 3,
    genres: ['Drama', 'Thriller'],
  },
  {
    title: 'New Girl',
    type: 'Show',
    yearReleased: 2011,
    rating: 3,
    genres: ['Comedy'],
  },
  {
    title: 'Survivor',
    type: 'Show',
    yearReleased: 2000,
    rating: 3,
    genres: ['Reality', 'Sports'],
  },
  {
    title: 'Shark Tank',
    type: 'Show',
    yearReleased: 2009,
    rating: 3,
    genres: ['Reality'],
  },
  {
    title: 'Shameless',
    type: 'Show',
    yearReleased: 2011,
    rating: 3,
    genres: ['Comedy', 'Drama'],
  },
  {
    title: 'iCarly',
    type: 'Show',
    yearReleased: 2007,
    rating: 3,
    genres: ['Comedy', 'Kids'],
  },
  {
    title: 'The Good Place',
    type: 'Show',
    yearReleased: 2016,
    rating: 4,
    genres: ['Comedy'],
  },
  {
    title: '21 Jump Street',
    type: 'Movie',
    yearReleased: 2012,
    rating: 4,
    genres: ['Action', 'Comedy', 'Crime'],
  },
  {
    title: 'The Super Mario Bros Movie',
    type: 'Movie',
    yearReleased: 2023,
    rating: 4,
    genres: ['Animated', 'Adventure', 'Comedy', 'Kids'],
  },
  {
    title: 'Stranger Things',
    type: 'Show',
    yearReleased: 2016,
    rating: 4,
    genres: ['Drama', 'Mystery', 'Science Fiction'],
  },
  {
    title: 'American Psycho',
    type: 'Movie',
    yearReleased: 2000,
    rating: 4,
    genres: [
      'Comedy',
      'Crime',
      'Drama',
      'Horror',
      'Thriller',
    ],
  },
  {
    title: "Buffalo '66",
    type: 'Movie',
    yearReleased: 1998,
    rating: 3,
    genres: ['Comedy', 'Crime', 'Drama', 'Romance'],
  },
  {
    title: 'Scream',
    type: 'Movie',
    yearReleased: 1996,
    rating: 4,
    genres: ['Comedy', 'Drama', 'Horror', 'Mystery'],
  },
  {
    title: 'Scream 2',
    type: 'Movie',
    yearReleased: 1997,
    rating: 4,
    genres: ['Comedy', 'Drama', 'Horror', 'Mystery'],
  },
  {
    title: 'Where the Crawdads Sing',
    type: 'Movie',
    yearReleased: 2022,
    rating: 4,
    genres: ['Drama', 'Mystery'],
  },
  {
    title: 'Mulholland Drive',
    type: 'Movie',
    yearReleased: 2001,
    rating: 3,
    genres: ['Drama', 'Mystery', 'Romance', 'Thriller'],
  },
  {
    title: 'Spongebob Squarepants',
    type: 'Show',
    yearReleased: 1999,
    rating: 4,
    genres: ['Animated', 'Comedy', 'Kids'],
  },
  {
    title: 'Twin Peaks',
    type: 'Show',
    yearReleased: 1990,
    rating: 5,
    genres: [
      'Crime',
      'Drama',
      'Horror',
      'Mystery',
      'Thriller',
    ],
  },
  {
    title: 'Mad Men',
    type: 'Show',
    yearReleased: 2007,
    rating: 4,
    genres: ['Drama', 'History'],
  },
  {
    title: 'Breaking Bad',
    type: 'Show',
    yearReleased: 2008,
    rating: 5,
    genres: ['Action', 'Crime', 'Drama', 'Thriller'],
  },
  {
    title: 'Better Call Saul',
    type: 'Show',
    yearReleased: 2015,
    rating: 4,
    genres: ['Action', 'Crime', 'Drama', 'Thriller'],
  },
  {
    title: 'Game of Thrones',
    type: 'Show',
    yearReleased: 2011,
    rating: 5,
    genres: ['Action', 'Adventure', 'Drama', 'Fantasy'],
  },
  {
    title: 'House of The Dragon',
    type: 'Show',
    yearReleased: 2022,
    rating: 3,
    genres: ['Action', 'Adventure', 'Drama', 'Fantasy'],
  },
  {
    title: 'Succession',
    type: 'Show',
    yearReleased: 2018,
    rating: 4,
    genres: ['Comedy', 'Drama'],
  },
  {
    title: 'The Scary of Sixty First',
    type: 'Movie',
    yearReleased: 2020,
    rating: 3,
    genres: ['Drama', 'Horror', 'Mystery', 'Thriller'],
  },
  {
    title: 'Batman Begins',
    type: 'Movie',
    yearReleased: 2005,
    rating: 3,
    genres: ['Action', 'Adventure', 'Superhero'],
  },
  {
    title: 'The Dark Knight',
    type: 'Movie',
    yearReleased: 2008,
    rating: 5,
    genres: ['Action', 'Drama', 'Superhero', 'Thriller'],
  },
  {
    title: 'The Dark Knight Rises',
    type: 'Movie',
    yearReleased: 2012,
    rating: 4,
    genres: ['Action', 'Drama', 'Superhero', 'Thriller'],
  },
  {
    title: 'The Batman',
    type: 'Movie',
    yearReleased: 2022,
    rating: 4,
    genres: ['Action', 'Crime', 'Mystery', 'Superhero'],
  },
  {
    title: 'Joker',
    type: 'Movie',
    yearReleased: 2019,
    rating: 4,
    genres: ['Crime', 'Drama', 'Superhero', 'Thriller'],
  },
  {
    title: 'The Prestige',
    type: 'Movie',
    yearReleased: 2006,
    rating: 4,
    genres: [
      'Drama',
      'History',
      'Science Fiction',
      'Thriller',
    ],
  },
  {
    title: 'There Will Be Blood',
    type: 'Movie',
    yearReleased: 2007,
    rating: 4,
    genres: ['Drama', 'History', 'Thriller'],
  },
  {
    title: 'Iron Man',
    type: 'Movie',
    yearReleased: 2008,
    rating: 4,
    genres: [
      'Action',
      'Adventure',
      'Science Fiction',
      'Superhero',
    ],
  },
  {
    title: 'Iron Man 2',
    type: 'Movie',
    yearReleased: 2010,
    rating: 2,
    genres: [
      'Action',
      'Adventure',
      'Science Fiction',
      'Superhero',
    ],
  },
  {
    title: 'Iron Man 3',
    type: 'Movie',
    yearReleased: 2013,
    rating: 3,
    genres: [
      'Action',
      'Adventure',
      'Science Fiction',
      'Superhero',
    ],
  },
  {
    title: 'The Wolf of Wall Street',
    type: 'Movie',
    yearReleased: 2013,
    rating: 4,
    genres: ['Comedy', 'Crime', 'Drama'],
  },
  {
    title: 'Shutter Island',
    type: 'Movie',
    yearReleased: 2010,
    rating: 4,
    genres: ['Mystery', 'Thriller'],
  },
  {
    title: 'The Silence of the Lambs',
    type: 'Movie',
    yearReleased: 1991,
    rating: 5,
    genres: [
      'Crime',
      'Drama',
      'Horror',
      'Mystery',
      'Thriller',
    ],
  },
  {
    title: 'Taxi Driver',
    type: 'Movie',
    yearReleased: 1976,
    rating: 5,
    genres: ['Crime', 'Drama', 'Thriller'],
  },
  {
    title: 'The Godfather',
    type: 'Movie',
    yearReleased: 1972,
    rating: 5,
    genres: ['Crime', 'Drama'],
  },
  {
    title: 'The Godfather Part II',
    type: 'Movie',
    yearReleased: 1974,
    rating: 5,
    genres: ['Crime', 'Drama'],
  },
  {
    title: 'The Godfather Part III',
    type: 'Movie',
    yearReleased: 1990,
    rating: 4,
    genres: ['Crime', 'Drama'],
  },
  {
    title: 'Scarface',
    type: 'Movie',
    yearReleased: 1983,
    rating: 5,
    genres: ['Action', 'Crime', 'Drama', 'Thriller'],
  },
  {
    title: 'Spider-Man',
    type: 'Movie',
    yearReleased: 2002,
    rating: 4,
    genres: ['Action', 'Science Fiction', 'Superhero'],
  },
  {
    title: 'Spider-Man 2',
    type: 'Movie',
    yearReleased: 2004,
    rating: 4,
    genres: ['Action', 'Science Fiction', 'Superhero'],
  },
  {
    title: 'Spider-Man 3',
    type: 'Movie',
    yearReleased: 2007,
    rating: 3,
    genres: ['Action', 'Science Fiction', 'Superhero'],
  },
  {
    title: 'The Virgin Suicides',
    type: 'Movie',
    yearReleased: 1999,
    rating: 4,
    genres: ['Drama', 'Mystery', 'Romance', 'Thriller'],
  },
  {
    title: 'Vision Quest',
    type: 'Movie',
    yearReleased: 1985,
    rating: 4,
    genres: ['Drama', 'Romance', 'Sports'],
  },
  {
    title: 'Westworld',
    type: 'Show',
    yearReleased: 2016,
    rating: 4,
    genres: [
      'Action',
      'Drama',
      'Science Fiction',
      'Western',
    ],
  },
  {
    title: 'Yellowstone',
    type: 'Show',
    yearReleased: 2018,
    rating: 4,
    genres: ['Drama', 'Western'],
  },
];

module.exports = rawMediaData;