// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================
var header = {
  name: {
    firstname: 'Ivan',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',
  selary: '600$ в місяць',
  address: '01001 Khreshchatyk 13 Kyiv',
};

var footer = {
  social: {
    email: {
      text: 'ivan@mail.com',
      href: 'mailto:ivan@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ivan-test',
    },
  },
  
};

var educations = [
  {
    unName: 'School',
    isEnd: true,
  },
  {
    unName: 'NAoIA',
    isEnd: true,
  },{
    unName: 'NTU KPU',
     isEnd: false,
  },{
    unName: 'Taras Shevchenko NUoK',
     isEnd: false,
  },
];

var certificates = [
  {
    name: 'English courses',
    id: 123
  },
  {
    name: 'Manegement courses',
    id: 456
  },
  {
    name: 'First AID courses',
    id: 789
  },
];

var hobbies = [
  {
    name: 'Games',
    isMain: true
  },
  {
    name: 'Bike',
    isMain: false
  },
  {
    name: 'Painting',
    isMain: false
  },
];

var big = true;

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    
    page: {
      title: 'Resume | Summary',
    },

    header,

    main: {
      summary: {
      title:'Summary',
      text: 'Open-minded for new technologies, with 1 years of experience in development. Whenever I start to work on a new project I learn the domain and try to understand the idea of the project. Good team player, every colleague is a friend to me.',
    },
     experience: {
      title:'Other experience',
      text: 'Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (tournament position, goals etc), analyzing by simple mathematics models and preparing probability for such events like: money line - first win / draw / second win, totals etc.',
    },
    },
    
    footer,

  })
})

// ================================================================

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    
    page: {
      title: 'Resume | Skills',
    },

    header,

    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true
        },
        {
          name: 'Handlebars',
          point: 10,
          isTop: true
        },{
          name: 'VS Code',
          point: 10,
          istop: true
        },{
          name: 'Git',
          point: 9,
          isTop: false
        },{
          name: 'Terminal',
          point: 9,
        },{
          name: 'NPM',
          point: 8,
        },{
          name: 'React.JS',
          point: 0,
        },{
          name: 'PHP',
          point: null,
        },
      ],
      hobbies,
    },
    
    footer,
    
  })
})

router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
        page: {
      title: 'Resume | Education',
    },

    header,

    main: {
      
      educations,

      certificates,
    },

    footer,

  })
})
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {

    leyout: 'big',
        page: {
      title: 'Resume | Work',
    },

    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT Brains',
            url: 'https://it-brains.com.ua/',
          },
          duration: {
            from: '10.10.2022',
            to: null
          },
          projectAmount: 3,

          projects: [
            {
            neme:'Resume',
            url:'https://resume.com.ua/',
            about:'A project resume is a type of functional resume that lists your professional experience by showcasing the projects you completed',
            
            stackAmount:3,
            
            awardkAmount:4,
            

            stacks: [
              {
             name:'React.js', 
              },
              {
                name:'HTML / CSS',
              },
              {
                name:'Nodejs',
              },
            ],
            awards: [
              {
                name:'a prize or a sum of money that a person or organization is given for an achievement',
              },
              {
                name:'A new digital innovation award is aimed at media that uses the latest technology to make an improvement in delivery of news services.',
                },
              ],
            }
            ,
          ],
        },
      ]
    },

    footer,

  })
})

// Підключаємо роутер до бек-енду
module.exports = router
