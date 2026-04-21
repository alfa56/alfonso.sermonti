import Mock from "../mock";

const database = {
  information: {
    name: 'Alfonso Sermonti',
    age: "60+",
    phone: "+39 392 2223682",
    email: "alfonso.sermonti@gmail.com",
    address: 'Via Maggiore, 10 - Artena (Roma), IT',
    socialLinks: {
      facebook: 'https://facebook.com/profile.php?id=100008256587977',
      linkedin: 'https://www.linkedin.com/in/alfonso-sermonti/',
      github: 'https://github.com/alfa56'
    },
    brandImage: '/images/brand-image.png',
    aboutImage: '/images/about_image.jpg',
    aboutImageLg: '/images/about_image_lg.jpg'
  },
  skills: [
    {
      title: "PHP",
      value: 100
    },
    {
      title: "HTML5",
      value: 95
    },
    {
      title: "CSS3",
      value: 90
    },
    {
      title: "Javascript",
      value: 90
    },
    {
      title: "jQuery",
      value: 95
    },
    {
      title: "React",
      value: 80
    },
    {
      title: "Angular",
      value: 70
    },
    {
      title: "Python",
      value: 70
    },
    {
      title: "Laravel",
      value: 70
    },
    {
      title: "Bootstrap",
      value: 90
    }
  ],
  portfolios: [
    {
      id: 1,
      title: "CercaOra",
      subtitle: "React front-end site",
      imageUrl: "/images/cercaora.png",
      largeImageUrl: [
        "/images/cercaora_lg.png",
        "/images/cercaora_lg1.png",
        "/images/cercaora_lg2.png",
        "/images/cercaora_lg3.png",
        "/images/cercaora_lg4.png"        
      ],
      url: ""
    },
    {
      id: 2,
      title: "MyClips",
      subtitle: "Front-end site",
      imageUrl: "/images/myclips.png",
      largeImageUrl: ["/images/myclips_lg.png"],
      url: ""
    },
    {
      id: 3,
      title: "MyClips",
      subtitle: "Back-end site",
      imageUrl: "/images/myclips_backend.png",
      largeImageUrl: [
        "/images/myclips_backend_lg.png",
        "/images/myclips_backend_lg1.png",
        "/images/myclips_backend_lg3.png"
      ],
      url: ""
    },
    {
      id: 4,
      title: "SD Cinematografica",
      subtitle: "Front-end site",
      imageUrl: "/images/sd.png",
      largeImageUrl: [
        "/images/sd_lg.png",
        "/images/sd_lg1.png",
        "/images/sd_lg2.png",
        "/images/sd_lg4.png"
      ],
      url: ""
    },
    {
      id: 5,
      title: "Ciaoexperience",
      subtitle: "Front-end site",
      imageUrl: "/images/ciaoexperience.png",
      largeImageUrl: [
        "/images/ciaoexperience_lg.png",
        "/images/ciaoexperience_lg1.png",
        "/images/ciaoexperience_lg2.png"
      ],
      url: ""
    }  
  ],
  blogs: [
    {
      id: 1,
      title: 'Markdown & Html supported blog.',
      featuredImage: '/images/blog-image-1.jpg',
      filesource: '../../blog/markdown-html-supported-blog.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 2,
      title: 'Installing NodeJS on your device.',
      featuredImage: '/images/blog-image-2.jpg',
      filesource: '../../blog/installing-nodejs-on-your-device.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 3,
      title: 'UI/UX design starter with Adobe XD.',
      featuredImage: '/images/blog-image-3.jpg',
      filesource: '../../blog/uiux-design-starter-with-adobe-xd.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 4,
      title: 'Boost your post for increasing sales.',
      featuredImage: '/images/blog-image-4.jpg',
      filesource: '../../blog/boost-your-post-for-increasing-sales.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 5,
      title: 'Difference between GatsbyJS & NextJS.',
      featuredImage: '/images/blog-image-5.jpg',
      filesource: '../../blog/difference-between-gatsbyjs-and-nextjs.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 6,
      title: 'How to choose javascript framework for project.',
      featuredImage: '/images/blog-image-6.jpg',
      filesource: '../../blog/how-to-choose-javascript-framework-for-project.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 7,
      title: 'Web automation with python language.',
      featuredImage: '/images/blog-image-7.jpg',
      filesource: '../../blog/web-automation-with-python-language.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 8,
      title: 'Time to use latest technology for creating a website.',
      featuredImage: '/images/blog-image-8.jpg',
      filesource: '../../blog/time-to-use-latest-technology-for-creating-a-website.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 9,
      title: 'Think out of the box.',
      featuredImage: '/images/blog-image-9.jpg',
      filesource: '../../blog/think-out-of-the-box.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 10,
      title: 'Trending designs in 2020.',
      featuredImage: '/images/blog-image-1.jpg',
      filesource: '../../blog/trending-designs-in-2020.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 11,
      title: 'How to get 10k instagram followers?',
      featuredImage: '/images/blog-image-2.jpg',
      filesource: '../../blog/how-to-get-10k-instagram-followers.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 12,
      title: 'What NodeJS can do?',
      featuredImage: '/images/blog-image-3.jpg',
      filesource: '../../blog/what-nodejs-can-do.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 13,
      title: 'Futures of javascript.',
      featuredImage: '/images/blog-image-4.jpg',
      filesource: '../../blog/future-of-javascript.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 14,
      title: 'Popular javascript library in 2020.',
      featuredImage: '/images/blog-image-5.jpg',
      filesource: '../../blog/popular-javascript-library-in-2020.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 15,
      title: 'Promrammers must read books.',
      featuredImage: '/images/blog-image-6.jpg',
      filesource: '../../blog/programmers-must-read-books.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    }
  ],
  contactInfo: {
    phoneNumbers: ['+012-3456-7891', '+012-3456-7892'],
    emailAddress: ['admin.sitename@example.com', 'info.sitename@example.com'],
    address: "121 King Street, Melbourne, Victoria 3000, Australia"
  }
}

Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/blog").reply(config => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});