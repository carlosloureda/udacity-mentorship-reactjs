const allUsers = [
  {
    _id: "5ca2a80e965fbe94e06b2674",
    isActive: true,
    role: "admin",
    gender: "ratherNotSay",
    picture: "http://placehold.it/32x32",
    age: 22,
    name: {
      first: "Walsh",
      last: "Mcdonald"
    },
    email: "walsh.mcdonald@undefined.tv",
    phone: "+1 (925) 525-3393",
    address: "402 Arkansas Drive, Wilsonia, Washington, 1154",
    registered: "Monday, May 16, 2016 11:16 PM"
  },
  {
    _id: "5ca2a80e562e29e2d0d8f30c",
    isActive: false,
    role: "superAdmin",
    gender: "male",
    picture: "http://placehold.it/32x32",
    age: 32,
    name: {
      first: "Earlene",
      last: "Rocha"
    },
    email: "earlene.rocha@undefined.name",
    phone: "+1 (923) 546-2543",
    address: "163 Strauss Street, Ahwahnee, Vermont, 8147",
    registered: "Monday, June 1, 2015 4:54 AM"
  },
  {
    _id: "5ca2a80e79283d605495ce46",
    isActive: true,
    role: "user",
    gender: "neutral",
    picture: "http://placehold.it/32x32",
    age: 27,
    name: {
      first: "Elba",
      last: "Church"
    },
    email: "elba.church@undefined.me",
    phone: "+1 (852) 486-2592",
    address: "977 Greene Avenue, Glenville, Virginia, 7027",
    registered: "Tuesday, January 3, 2017 9:37 AM"
  },
  {
    _id: "5ca2a80e6624a9287c8ab12e",
    isActive: true,
    role: "admin",
    gender: "male",
    picture: "http://placehold.it/32x32",
    age: 35,
    name: {
      first: "Weaver",
      last: "Everett"
    },
    email: "weaver.everett@undefined.ca",
    phone: "+1 (815) 424-2936",
    address: "755 Arlington Avenue, Westboro, New Jersey, 1295",
    registered: "Saturday, July 15, 2017 12:49 AM"
  },
  {
    _id: "5ca2a80e4795aca5aa784704",
    isActive: false,
    role: "user",
    gender: "female",
    picture: "http://placehold.it/32x32",
    age: 30,
    name: {
      first: "Rosalinda",
      last: "Cantu"
    },
    email: "rosalinda.cantu@undefined.biz",
    phone: "+1 (815) 481-3075",
    address: "489 Chester Street, Germanton, Tennessee, 5345",
    registered: "Sunday, May 24, 2015 4:59 AM"
  },
  {
    _id: "5ca2a80ec7ded692e2e8d42a",
    isActive: false,
    role: "superAdmin",
    gender: "female",
    picture: "http://placehold.it/32x32",
    age: 23,
    name: {
      first: "Lakeisha",
      last: "Roth"
    },
    email: "lakeisha.roth@undefined.net",
    phone: "+1 (968) 504-3175",
    address: "660 Strong Place, Richville, Florida, 8325",
    registered: "Wednesday, May 14, 2014 7:09 PM"
  },
  {
    _id: "5ca2a80e9247443bcb47b334",
    isActive: false,
    role: "guest",
    gender: "neutral",
    picture: "http://placehold.it/32x32",
    age: 23,
    name: {
      first: "Scott",
      last: "Calderon"
    },
    email: "scott.calderon@undefined.com",
    phone: "+1 (923) 585-2876",
    address: "513 Pitkin Avenue, Hasty, Guam, 978",
    registered: "Tuesday, September 16, 2014 9:36 AM"
  },
  {
    _id: "5ca2a80ececf5b45e92a3bd2",
    isActive: false,
    role: "admin",
    gender: "neutral",
    picture: "http://placehold.it/32x32",
    age: 24,
    name: {
      first: "Becker",
      last: "Bolton"
    },
    email: "becker.bolton@undefined.us",
    phone: "+1 (844) 449-2336",
    address: "412 Green Street, Harleigh, Oregon, 5166",
    registered: "Saturday, December 13, 2014 12:08 PM"
  },
  {
    _id: "5ca2a80ed28726cfa61b1ee1",
    isActive: false,
    role: "admin",
    gender: "ratherNotSay",
    picture: "http://placehold.it/32x32",
    age: 32,
    name: {
      first: "Kasey",
      last: "Conner"
    },
    email: "kasey.conner@undefined.co.uk",
    phone: "+1 (846) 573-3927",
    address: "316 Canarsie Road, Groveville, Delaware, 5357",
    registered: "Tuesday, June 28, 2016 9:05 PM"
  },
  {
    _id: "5ca2a80e9a26e1c14b43dd99",
    isActive: false,
    role: "guest",
    gender: "male",
    picture: "http://placehold.it/32x32",
    age: 34,
    name: {
      first: "Montoya",
      last: "Fischer"
    },
    email: "montoya.fischer@undefined.info",
    phone: "+1 (922) 493-3936",
    address: "303 Highland Place, Beason, Puerto Rico, 3288",
    registered: "Wednesday, March 19, 2014 4:54 PM"
  },
  {
    _id: "5ca2a80e99a18994da0c6629",
    isActive: false,
    role: "guest",
    gender: "female",
    picture: "http://placehold.it/32x32",
    age: 28,
    name: {
      first: "Duncan",
      last: "Ferrell"
    },
    email: "duncan.ferrell@undefined.org",
    phone: "+1 (998) 510-2127",
    address: "501 Rock Street, Nile, Massachusetts, 4283",
    registered: "Tuesday, June 3, 2014 7:02 PM"
  },
  {
    _id: "5ca2a80e4460dd0996350b37",
    isActive: true,
    role: "admin",
    gender: "ratherNotSay",
    picture: "http://placehold.it/32x32",
    age: 31,
    name: {
      first: "Michael",
      last: "Murray"
    },
    email: "michael.murray@undefined.biz",
    phone: "+1 (842) 420-2692",
    address: "909 Lester Court, Allendale, American Samoa, 5641",
    registered: "Monday, July 30, 2018 1:24 AM"
  },
  {
    _id: "5ca2a80e4c6b0b8ac1da1acb",
    isActive: true,
    role: "admin",
    gender: "female",
    picture: "http://placehold.it/32x32",
    age: 33,
    name: {
      first: "Mcclain",
      last: "Forbes"
    },
    email: "mcclain.forbes@undefined.tv",
    phone: "+1 (990) 437-2702",
    address: "389 Chester Court, Troy, Idaho, 2731",
    registered: "Tuesday, April 21, 2015 6:35 AM"
  },
  {
    _id: "5ca2a80e8098c214b54ad070",
    isActive: false,
    role: "superAdmin",
    gender: "female",
    picture: "http://placehold.it/32x32",
    age: 38,
    name: {
      first: "Margie",
      last: "Fry"
    },
    email: "margie.fry@undefined.name",
    phone: "+1 (809) 573-3351",
    address: "887 Nichols Avenue, Kiskimere, District Of Columbia, 404",
    registered: "Friday, July 27, 2018 10:38 PM"
  },
  {
    _id: "5ca2a80ed7e738c037e9bfd8",
    isActive: false,
    role: "guest",
    gender: "male",
    picture: "http://placehold.it/32x32",
    age: 36,
    name: {
      first: "Latonya",
      last: "Baird"
    },
    email: "latonya.baird@undefined.me",
    phone: "+1 (818) 582-3481",
    address: "732 Dwight Street, Heil, Alaska, 2704",
    registered: "Sunday, March 3, 2019 10:10 AM"
  },
  {
    _id: "5ca2a80ecf3b853917dbf550",
    isActive: false,
    role: "user",
    gender: "ratherNotSay",
    picture: "http://placehold.it/32x32",
    age: 39,
    name: {
      first: "Alba",
      last: "Decker"
    },
    email: "alba.decker@undefined.ca",
    phone: "+1 (807) 493-3687",
    address: "920 Newport Street, Belmont, Pennsylvania, 452",
    registered: "Thursday, April 12, 2018 11:16 AM"
  },
  {
    _id: "5ca2a80e18c598c86b5269af",
    isActive: false,
    role: "user",
    gender: "neutral",
    picture: "http://placehold.it/32x32",
    age: 34,
    name: {
      first: "Ferguson",
      last: "Roberson"
    },
    email: "ferguson.roberson@undefined.biz",
    phone: "+1 (916) 513-2000",
    address: "356 Aberdeen Street, Diaperville, North Carolina, 1096",
    registered: "Monday, June 4, 2018 1:24 AM"
  },
  {
    _id: "5ca2a80e3cc62a9ae2ef5048",
    isActive: false,
    role: "admin",
    gender: "ratherNotSay",
    picture: "http://placehold.it/32x32",
    age: 33,
    name: {
      first: "Jones",
      last: "Haley"
    },
    email: "jones.haley@undefined.net",
    phone: "+1 (863) 551-3065",
    address: "899 Leonard Street, Abiquiu, Colorado, 5322",
    registered: "Thursday, February 9, 2017 4:56 PM"
  },
  {
    _id: "5ca2a80e30c9cd93bad1a185",
    isActive: false,
    role: "superAdmin",
    gender: "ratherNotSay",
    picture: "http://placehold.it/32x32",
    age: 35,
    name: {
      first: "Myers",
      last: "Rosa"
    },
    email: "myers.rosa@undefined.com",
    phone: "+1 (998) 408-2147",
    address: "938 Broadway , Loomis, Connecticut, 5900",
    registered: "Sunday, December 28, 2014 8:44 AM"
  },
  {
    _id: "5ca2a80e43fcb045b5722827",
    isActive: true,
    role: "guest",
    gender: "ratherNotSay",
    picture: "http://placehold.it/32x32",
    age: 26,
    name: {
      first: "Barker",
      last: "Cervantes"
    },
    email: "barker.cervantes@undefined.us",
    phone: "+1 (927) 425-2688",
    address: "281 Ridgewood Avenue, Neahkahnie, Ohio, 1353",
    registered: "Monday, June 19, 2017 6:29 PM"
  },
  {
    _id: "5ca2a80e73e7af6ad5da26da",
    isActive: true,
    role: "user",
    gender: "female",
    picture: "http://placehold.it/32x32",
    age: 23,
    name: {
      first: "Hewitt",
      last: "Battle"
    },
    email: "hewitt.battle@undefined.co.uk",
    phone: "+1 (865) 402-2117",
    address: "678 Dare Court, Brogan, Wyoming, 4181",
    registered: "Monday, April 28, 2014 7:44 AM"
  },
  {
    _id: "5ca2a80ebd56d862542e919e",
    isActive: false,
    role: "superAdmin",
    gender: "female",
    picture: "http://placehold.it/32x32",
    age: 40,
    name: {
      first: "Carol",
      last: "Hernandez"
    },
    email: "carol.hernandez@undefined.info",
    phone: "+1 (841) 566-2290",
    address: "680 Throop Avenue, Galesville, Virgin Islands, 4741",
    registered: "Thursday, October 25, 2018 10:36 AM"
  },
  {
    _id: "5ca2a80edff2902c83f3ee24",
    isActive: false,
    role: "superAdmin",
    gender: "neutral",
    picture: "http://placehold.it/32x32",
    age: 28,
    name: {
      first: "Cooley",
      last: "Carney"
    },
    email: "cooley.carney@undefined.org",
    phone: "+1 (800) 422-3963",
    address: "379 Louisa Street, Stewart, Maine, 5644",
    registered: "Sunday, February 16, 2014 7:42 AM"
  },
  {
    _id: "5ca2a80e9c285f653cd7e1f6",
    isActive: false,
    role: "guest",
    gender: "female",
    picture: "http://placehold.it/32x32",
    age: 35,
    name: {
      first: "Oconnor",
      last: "Salinas"
    },
    email: "oconnor.salinas@undefined.biz",
    phone: "+1 (952) 428-2764",
    address: "224 Baycliff Terrace, Sunbury, Marshall Islands, 2328",
    registered: "Wednesday, February 27, 2019 2:46 PM"
  },
  {
    _id: "5ca2a80e7ad68c497794531d",
    isActive: false,
    role: "admin",
    gender: "male",
    picture: "http://placehold.it/32x32",
    age: 22,
    name: {
      first: "Stewart",
      last: "Maldonado"
    },
    email: "stewart.maldonado@undefined.tv",
    phone: "+1 (967) 590-2730",
    address: "998 Monroe Street, Grantville, Wisconsin, 5464",
    registered: "Tuesday, September 22, 2015 11:34 AM"
  },
  {
    _id: "5ca2a80eadf091db29739faa",
    isActive: false,
    role: "superAdmin",
    gender: "neutral",
    picture: "http://placehold.it/32x32",
    age: 25,
    name: {
      first: "Erma",
      last: "Bentley"
    },
    email: "erma.bentley@undefined.name",
    phone: "+1 (892) 443-3750",
    address: "163 Prospect Avenue, Muse, Federated States Of Micronesia, 3241",
    registered: "Saturday, June 4, 2016 9:42 PM"
  },
  {
    _id: "5ca2a80e99fab5453b4709a0",
    isActive: false,
    role: "admin",
    gender: "neutral",
    picture: "http://placehold.it/32x32",
    age: 36,
    name: {
      first: "Eileen",
      last: "Schultz"
    },
    email: "eileen.schultz@undefined.me",
    phone: "+1 (801) 584-3507",
    address: "548 Polhemus Place, Hiwasse, Minnesota, 1749",
    registered: "Tuesday, July 5, 2016 2:37 PM"
  },
  {
    _id: "5ca2a80e5bf5ab76e404515a",
    isActive: false,
    role: "superAdmin",
    gender: "neutral",
    picture: "http://placehold.it/32x32",
    age: 28,
    name: {
      first: "Michelle",
      last: "Christian"
    },
    email: "michelle.christian@undefined.ca",
    phone: "+1 (886) 547-2791",
    address: "801 Middleton Street, Boonville, New York, 5793",
    registered: "Monday, March 30, 2015 11:27 PM"
  },
  {
    _id: "5ca2a80e04fc8631ac2df5d5",
    isActive: true,
    role: "user",
    gender: "ratherNotSay",
    picture: "http://placehold.it/32x32",
    age: 37,
    name: {
      first: "Juarez",
      last: "Patton"
    },
    email: "juarez.patton@undefined.biz",
    phone: "+1 (915) 539-3075",
    address: "691 Lenox Road, Romeville, Arizona, 2513",
    registered: "Wednesday, November 25, 2015 2:38 PM"
  },
  {
    _id: "5ca2a80e5b98dae62557dff5",
    isActive: false,
    role: "admin",
    gender: "ratherNotSay",
    picture: "http://placehold.it/32x32",
    age: 21,
    name: {
      first: "Gordon",
      last: "Serrano"
    },
    email: "gordon.serrano@undefined.net",
    phone: "+1 (953) 423-2099",
    address: "800 Tapscott Avenue, Alderpoint, Maryland, 1210",
    registered: "Tuesday, July 3, 2018 6:35 AM"
  }
];

export default allUsers;
