import tlj from '../src/assets/img/trending/TLJ.jpg';
import ints from '../src/assets/img/trending/is.jpg';
import ias from '../src/assets/img/trending/IAS.jpg';
import lk from '../src/assets/img/trending/LK.jpg';
import to from '../src/assets/img/trending/TO.jpg';
import par from '../src/assets/img/trending/PandR.jpg';
import thor from '../src/assets/img/trending/TR.jpg';
import d from '../src/assets/img/trending/D.jpg';
//posters
import tljPoster from '../src/assets/img/trending/tlj-poster.jpg';
import iasPoster from '../src/assets/img/trending/ias-poster.jpg';
import lkPoster from '../src/assets/img/trending/lk-poster.jpg';
import toPoster from '../src/assets/img/trending/to-poster.jpg';
import intsPoster from '../src/assets/img/trending/ints-poster.jpg';
import parPoster from '../src/assets/img/trending/par-poster.jpg';
import trPoster from '../src/assets/img/trending/tr-poster.jpg';
import dPoster from '../src/assets/img/trending/d-poster.jpg';

const movies = {
    is: {
        image: ints,
        poster: intsPoster,
        title: "Interstellar",
        match: '97%',
        rating: 'PG-13',
        duration: '2h 49m',
        desc: "In Earth's future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand (Michael Caine), a brilliant NASA physicist, is working on plans to save mankind by transporting Earth's population to a new home via a wormhole. But first, Brand must send former NASA pilot Cooper (Matthew McConaughey) and a team of researchers through the wormhole and across the galaxy to find out which of three planets could be mankind's new home.",
        userRating: '8.6/10',
        stars: "Matthew McConaughey, Anne Hathaway, Jessica Chastain",
        genre: 'Adventure, Drama, Sci-Fi',

    },
    ias: {
        image: ias,
        poster: iasPoster,
        title: "It's Always Sunny in Philadelphia",
        match: '100%',
        rating: 'TV-MA',
        duration: '13 Seasons',
        desc: "Several friends own Paddy's Pub, a neighborhood bar in Philadelphia, and try to find their way in the world of work and relationships. But often, they can't get out of their own way, leading to uncomfortable situations, which usually worsen before improving. The gang includes twin siblings Dennis and Sweet Dee Reynolds, along with their longtime friends, Charlie Kelly and Ronald \"Mac\" McDonald. Charlie lives with Frank, Dennis and Sweet Dee's father, who has left his cheating, money-grabbing wife in an attempt to redeem himself after a history of doing business with sketchy people.",
        userRating: '8.8/10',
        stars: "Glenn Howerton, Rob McElhenney, Charlie Day",
        genre: 'Comedy',

    },
    lukeCage: {
        image: lk,
        poster: lkPoster,
        title: "Marvel's Luke Cage",
        match: '93%',
        rating: 'TV-MA',
        duration: '2 Seasons',
        desc: "This gritty, action-packed drama follows the evolution of Luke Cage (Mike Colter), a man with super strength and unbreakable skin caused by a sabotaged experiment. After a failed relationship with fellow superhero Jessica Jones, Cage tries to rebuild a quiet life in Harlem, New York --until he is pulled out of the shadows and forced into a battle for his city. Along the way, Cage cannot avoid confronting his past, which he has worked hard to bury. \"Marvel's Luke Cage\" is the third show in the Netflix-original Defenders series.",
        userRating: '7.5/10',
        stars: "Mike Colter, Simone Missick, Theo Rossi",
        genre: 'Action, Crime, Drama',
    },
    theOffice: {
        image: to,
        poster: toPoster,
        title: "The Office",
        match: '100%',
        rating: 'TV-14',
        duration: '9 Seasons',
        desc: "This US adaptation, set at a paper company in Scranton, Pa., has a similar documentary style to that of the Ricky Gervais-led British original. It features the staff of Dunder-Mifflin, a staff that includes characters based on characters from the British show (and, quite possibly, people you work with in your office). There's Jim, the likable employee who's a bit of an everyman. Jim has a thing for receptionist-turned-sales rep Pam (because office romances are always a good idea). There's also Dwight, the successful co-worker who lacks social skills and common sense. And there's Ryan, who has held many jobs at the company.",
        userRating: '8.8/10',
        stars: "Steve Carell, Jenna Fischer, John Krasinski",
        genre: 'Comedy',
    },
    PandR: {
        image: par,
        poster: parPoster,
        title: "Parks and Recreation",
        match: '100%',
        rating: 'TV-PG',
        duration: '7 Seasons',
        desc: "Leslie Knope, a midlevel bureaucrat in an Indiana Parks and Recreation Department, hopes to beautify her town (and boost her own career) by helping local nurse Ann Perkins turn an abandoned construction site into a community park, but what should be a fairly simple project is stymied at every turn by oafish bureaucrats, selfish neighbours, governmental red tape and a myriad of other challenges. Leslie's colleague Tom Haverford, who delights in exploiting his position for personal gain, is as likely to undermine her efforts as to help her, while her boss, Ron Swanson, is adamantly opposed to government in any form, even though he's a bureaucrat himself.",
        userRating: '8.6/10',
        stars: "Amy Poehler, Nick Offerman, Chris Pratt",
        genre: 'Comedy',
    },
    thor: {
        image: thor,
        poster: trPoster,
        title: "Thor: Ragnarok",
        match: '98%',
        rating: 'PG-13',
        duration: '2h 10m',
        desc: "Imprisoned on the other side of the universe, the mighty Thor finds himself in a deadly gladiatorial contest that pits him against the Hulk, his former ally and fellow Avenger. Thor's quest for survival leads him in a race against time to prevent the all-powerful Hela from destroying his home world and the Asgardian civilization.",
        userRating: '7.9/10',
        stars: "Chris Hemsworth, Tom Hiddleston, Cate Blanchett",
        genre: 'Action, Adventure, Comedy',
    },
    tlj: {
        image: tlj,
        poster: tljPoster,
        title: "Star Wars: Episode VIII: The Last Jedi",
        match: '98%',
        rating: 'PG-13',
        duration: '2h 31m',
        desc: "Luke Skywalker's peaceful and solitary existence gets upended when he encounters Rey, a young woman who shows strong signs of the Force. Her desire to learn the ways of the Jedi forces Luke to make a decision that changes their lives forever. Meanwhile, Kylo Ren and General Hux lead the First Order in an all-out assault against Leia and the Resistance for supremacy of the galaxy.",
        userRating: '7.3/10',
        stars: "Daisy Ridley, John Boyega, Mark Hamill",
        genre: 'Action, Adventure, Fantasy',

    },
    dexter: {
        image: d,
        poster: dPoster,
        title: "Dexter",
        match: '99%',
        rating: 'TV-MA',
        duration: '8 Seasons',
        desc: "Dexter Morgan is a Miami-based blood splatter expert who doesn't just solve murders; he commits them too. In fact, he's a serial killer - but he only murders the guilty, so he feels justified with his lifestyle choices. His policewoman sister and his cop co-workers have no idea Dexter lives a double life; however, adoptive father Harry knows his secret, and does, in fact, help Dexter hone his `skills'. It's a unique brand of justice for which charming Dexter feels a psychological hunger.",
        userRating: '8.7/10',
        stars: "Michael C. Hall, Jennifer Carpenter, David Zayas",
        genre: 'Crime, Drama, Mystery',
    },

};

export default movies;