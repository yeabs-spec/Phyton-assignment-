const libraryBooks = {
    book001: {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      genre: 'Classic',
      publishedYear: 1925,
      totalCopies: 5,
      availableCopies: 3,
      isAvailable: true,
      ratings: {
        average: 4.4,
        totalReviews: 8750,
        fiveStars: 6200,
        fourStars: 1800,
        threeStars: 500,
        twoStars: 200,
        oneStar: 50
      },
      borrowHistory: [
        { userId: 'USR102', daysBorrowed: 12, returnedLate: false },
        { userId: 'USR204', daysBorrowed: 8, returnedLate: true }
      ],
      replacementCost: 22.99,
      borrowCount: 45,
      lateFeePerDay: 1.25,
      shelfLocation: 'A3-12',
      popularityIndex: 82.6
    },
    book002: {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      genre: 'Classic',
      publishedYear: 1960,
      totalCopies: 3,
      availableCopies: 0,
      isAvailable: false,
      ratings: {
        average: 4.7,
        totalReviews: 13200,
        fiveStars: 10000,
        fourStars: 2300,
        threeStars: 500,
        twoStars: 300,
        oneStar: 100
      },
      borrowHistory: [
        { userId: 'USR301', daysBorrowed: 14, returnedLate: true },
        { userId: 'USR152', daysBorrowed: 10, returnedLate: false },
        { userId: 'USR198', daysBorrowed: 9, returnedLate: false }
      ],
      replacementCost: 18.5,
      borrowCount: 58,
      lateFeePerDay: 1.5,
      shelfLocation: 'B1-07',
      popularityIndex: 91.4
    },
    book003: {
      title: '1984',
      author: 'George Orwell',
      genre: 'Dystopian',
      publishedYear: 1949,
      totalCopies: 4,
      availableCopies: 2,
      isAvailable: true,
      ratings: {
        average: 4.6,
        totalReviews: 9800,
        fiveStars: 7100,
        fourStars: 2000,
        threeStars: 400,
        twoStars: 200,
        oneStar: 100
      },
      borrowHistory: [
        { userId: 'USR102', daysBorrowed: 11, returnedLate: false }
      ],
      replacementCost: 21.0,
      borrowCount: 39,
      lateFeePerDay: 1.3,
      shelfLocation: 'C4-21',
      popularityIndex: 77.3
    },
    book004: {
      title: 'Atomic Habits',
      author: 'James Clear',
      genre: 'Self-help',
      publishedYear: 2018,
      totalCopies: 4,
      availableCopies: 4,
      isAvailable: true,
      ratings: {
        average: 4.9,
        totalReviews: 14300,
        fiveStars: 12500,
        fourStars: 1300,
        threeStars: 300,
        twoStars: 150,
        oneStar: 50
      },
      borrowHistory: [],
      replacementCost: 25.0,
      borrowCount: 20,
      lateFeePerDay: 2.0,
      shelfLocation: 'D2-02',
      popularityIndex: 88.9
    },
    book005: {
      title: 'Sapiens',
      author: 'Yuval Noah Harari',
      genre: 'Non-fiction',
      publishedYear: 2011,
      totalCopies: 6,
      availableCopies: 1,
      isAvailable: true,
      ratings: {
        average: 4.8,
        totalReviews: 12000,
        fiveStars: 9800,
        fourStars: 1600,
        threeStars: 300,
        twoStars: 200,
        oneStar: 100
      },
      borrowHistory: [
        { userId: 'USR421', daysBorrowed: 15, returnedLate: true },
        { userId: 'USR301', daysBorrowed: 13, returnedLate: false }
      ],
      replacementCost: 28.5,
      borrowCount: 65,
      lateFeePerDay: 1.8,
      shelfLocation: 'E1-05',
      popularityIndex: 94.2
    },
    book006: {
      title: 'Educated',
      author: 'Tara Westover',
      genre: 'Memoir',
      publishedYear: 2018,
      totalCopies: 2,
      availableCopies: 0,
      isAvailable: false,
      ratings: {
        average: 4.5,
        totalReviews: 9700,
        fiveStars: 7500,
        fourStars: 1500,
        threeStars: 400,
        twoStars: 200,
        oneStar: 100
      },
      borrowHistory: [
        { userId: 'USR612', daysBorrowed: 10, returnedLate: false },
        { userId: 'USR718', daysBorrowed: 8, returnedLate: false }
      ],
      replacementCost: 19.99,
      borrowCount: 41,
      lateFeePerDay: 1.5,
      shelfLocation: 'F2-10',
      popularityIndex: 86.0
    },
    book007: {
      title: 'The Midnight Library',
      author: 'Matt Haig',
      genre: 'Fiction',
      publishedYear: 2020,
      totalCopies: 3,
      availableCopies: 2,
      isAvailable: true,
      ratings: {
        average: 4.3,
        totalReviews: 8100,
        fiveStars: 5500,
        fourStars: 1800,
        threeStars: 500,
        twoStars: 200,
        oneStar: 100
      },
      borrowHistory: [
        { userId: 'USR232', daysBorrowed: 9, returnedLate: false }
      ],
      replacementCost: 22.0,
      borrowCount: 33,
      lateFeePerDay: 1.7,
      shelfLocation: 'G3-09',
      popularityIndex: 79.5
    },
    book008: {
      title: 'The Silent Patient',
      author: 'Alex Michaelides',
      genre: 'Thriller',
      publishedYear: 2019,
      totalCopies: 4,
      availableCopies: 1,
      isAvailable: true,
      ratings: {
        average: 4.4,
        totalReviews: 10200,
        fiveStars: 7800,
        fourStars: 1700,
        threeStars: 400,
        twoStars: 200,
        oneStar: 100
      },
      borrowHistory: [
        { userId: 'USR208', daysBorrowed: 13, returnedLate: false },
        { userId: 'USR316', daysBorrowed: 7, returnedLate: true }
      ],
      replacementCost: 24.75,
      borrowCount: 49,
      lateFeePerDay: 1.9,
      shelfLocation: 'H5-03',
      popularityIndex: 84.3
    },
    book009: {
      title: 'Becoming',
      author: 'Michelle Obama',
      genre: 'Memoir',
      publishedYear: 2018,
      totalCopies: 2,
      availableCopies: 1,
      isAvailable: true,
      ratings: {
        average: 4.8,
        totalReviews: 15000,
        fiveStars: 12300,
        fourStars: 2100,
        threeStars: 400,
        twoStars: 150,
        oneStar: 50
      },
      borrowHistory: [
        { userId: 'USR411', daysBorrowed: 12, returnedLate: true }
      ],
      replacementCost: 26.0,
      borrowCount: 53,
      lateFeePerDay: 2.2,
      shelfLocation: 'I1-01',
      popularityIndex: 92.0
    },
    book010: {
      title: 'The Subtle Art of Not Giving a F*ck',
      author: 'Mark Manson',
      genre: 'Self-help',
      publishedYear: 2016,
      totalCopies: 3,
      availableCopies: 1,
      isAvailable: true,
      ratings: {
        average: 4.1,
        totalReviews: 8900,
        fiveStars: 6000,
        fourStars: 2000,
        threeStars: 500,
        twoStars: 300,
        oneStar: 100
      },
      borrowHistory: [
        { userId: 'USR109', daysBorrowed: 10, returnedLate: false },
        { userId: 'USR510', daysBorrowed: 11, returnedLate: false }
      ],
      replacementCost: 21.5,
      borrowCount: 48,
      lateFeePerDay: 1.6,
      shelfLocation: 'J7-14',
      popularityIndex: 83.7
    }
  };

  for (const bo in libraryBooks) {
 
    if (libraryBooks[bo].isAvailable==1) {
      console.log(libraryBooks[bo].title);
    }
  }
    for (const bob  in libraryBooks)
    if (libraryBooks[bob].ratings.fiveStars >10000) {
      latebooks = libraryBooks[bob].lateFeePerDay * 5 ;

      console.log(libraryBooks[bob].title + " " + latebooks);}

      for (const bobb in libraryBooks)

        if (libraryBooks[bobb].ratings.average < 4.5 && libraryBooks[bobb].popularityIndex < 90) {
          console.log(libraryBooks[bobb].title);
          
        }

        for (const bobbb in libraryBooks)
          if (libraryBooks[bobbb].genre="fiction"){
            console.log(libraryBooks[bobbb].title);
          }



    
  
  