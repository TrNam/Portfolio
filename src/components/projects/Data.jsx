import eventPlug from '../../assets/eventplug.png'
import skirmish from '../../assets/skirmish.png'
import doodleJump from '../../assets/doodle-jump.png'
import speeder from '../../assets/speeder.png'
import portfolio from '../../assets/portfolio.png'
import pokemon from '../../assets/pokemon.png'
import NIDS from '../../assets/NIDS.png'
import yelp from '../../assets/yelp.png'

import eventPlugDemo from '../../assets/eventplug-demo.mp4'
import skirmishDemo from '../../assets/skirmish-demo.mp4'
import doodleJumpDemo from '../../assets/doodle-jump-demo.mp4'
import speederDemo from '../../assets/speeder-demo.mp4'
import portfolioDemo from '../../assets/portfolio-demo.mp4'
import pokemonDemo from '../../assets/pokemon-demo.mp4'
import NIDSDemo from '../../assets/NIDS-demo.mp4'
import yelpDemo from '../../assets/yelp-demo.mp4'

export const projectsData = [
    {
        id: 1,
        image: eventPlug,
        video: eventPlugDemo,
        title: 'Eventplug',
        category: 'web',
        description: "A dynamic website featuring user authentication and database integration. From browsing songs and lyrics to managing personalized playlists, discovering artists and similar artists, EventPlug offers a comprehensive music exploration experience. Leveraging APIs such as Ticketmaster for concert information, Spotify for curated song lists, and Genius for song lyrics.",
        github: 'https://github.com/TrNam/EventPlug'
    },
    {
        id: 2,
        image: skirmish,
        video: skirmishDemo,
        title: 'Skirmish',
        category: 'app',
        description: 'A thrilling 2D fighting game packed with 14 unique characters, each boasting distinct mechanics and fighting styles. With a selection of 9 diverse maps, fast and dynamic combat that keeps you on the edge of your seat with your friend, perfect for intense local multiplayer 1v1 showdowns.',
        github: 'https://github.com/TrNam/skirmish'
    },
    {
        id: 3,
        image: doodleJump,
        video: doodleJumpDemo,
        title: 'Doodle Jump',
        category: 'app',
        description: 'Developed an infinite vertical jump game using Python. Implemented locally saved high scores feature. Designed dynamic gameplay with various platform types, enemies and escalating difficulty levels.',
        github: 'https://github.com/TrNam/doodle-jump'
    },
    {
        id: 4,
        image: speeder,
        video: speederDemo,
        title: 'Speeder',
        category: 'web',
        description: 'With responsive controls and immersive visuals, Speeder was created with HTML, CSS, and JavaScript, this adrenaline-fueled adventure promises fast-paced action and non-stop fun!',
        github: 'https://github.com/TrNam/speeder'
    },
    {
        id: 5,
        image: portfolio,
        video: portfolioDemo,
        title: 'Portfolio',
        category: 'web',
        description: 'Designed and developed a sleek and professional portfolio website using HTML, CSS, JavaScrip and React. Ensured seamless responsiveness across all screen sizes. Implemented intuitive navigation and visually appealing layout to showcase CV effectively.',
        github: 'https://github.com/TrNam/portfolio'
    },
    {
        id: 6,
        image: pokemon,
        video: pokemonDemo,
        title: 'Pokemon Website',
        category: 'web',
        description: 'Utilizing HTML, CSS, and JavaScript, this project aims to provide users with an immersive experience akin to the Pokémon gaming universe, where they can access detailed information about various Pokémon species using the pokedex.',
        github: 'https://github.com/TrNam/PokemonGame'
    },
    {
        id: 7,
        image: NIDS,
        video: NIDSDemo,
        title: 'Network Intrusion Detection System',
        category: 'machine learning',
        description: 'This project developed a Network Intrusion Detection System (NIDS) using the UNSW-NB15 dataset. I selected relevant features and tested RandomForests, K-Nearest Neighbors, and Gradient Boosting classifiers for classification. My rigorous approach and hyper-parameter tuning resulted in outstanding accuracy and F1 scores.',
        github: 'https://github.com/TrNam/NIDS'
    },
    {
        id: 8,
        image: yelp,
        video: yelpDemo,
        title: 'Sentiment Analysis on Yelp Ratings',
        category: 'machine learning',
        description: "This project built a sentiment analysis model for Yelp.com ratings from customer reviews. With Neural Networks, Naive Bayes, and Random Forests, I achieved over 50% accuracy. PyTorch Neural Networks model excelled, showcasing machine learning's potential in rating prediction for platforms like Yelp.com.",
        github: 'https://github.com/TrNam/sentiment-analysis'
    },
]

export const projectsNav = [
    {
        category: 'all'
    },
    {
        category: 'web'
    },
    {
        category: 'app'
    },
    {
        category: 'machine learning'
    },
]