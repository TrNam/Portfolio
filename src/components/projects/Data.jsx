import eventPlug from '../../assets/eventplug.png'
import skirmish from '../../assets/skirmish.png'
import doodleJump from '../../assets/doodle-jump.png'
import speeder from '../../assets/speeder.png'
import portfolio from '../../assets/portfolio.png'

import eventPlugDemo from '../../assets/eventplug-demo.mp4'
import skirmishDemo from '../../assets/skirmish-demo.mp4'
import doodleJumpDemo from '../../assets/doodle-jump-demo.mp4'
import speederDemo from '../../assets/speeder-demo.mp4'
import portfolioDemo from '../../assets/portfolio-demo.mp4'

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
]