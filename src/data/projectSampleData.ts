
interface Projects {
    id: number;
    title: string;
    date?: string;
    description: string[];
    images: string[];
    videoUrl?: string;
    projectUrl?: string;
    technologies?: string[];
    customIcons?: Record<string, string>; // Maps tech name to image path
}

export const projectsData: Projects[] = [
    {
        id: 1,
        title: "Implementation of Digital Architectural Design Initial Planner for Architecture Students in NCST",
        date: "January 2025 - November 2025",
        description: [
            "This project involved the development of a digital architectural design initial planner aimed at assisting architecture students in their design process. The planner provides a structured framework for organizing and managing initial designs for buildings which helps specifically in the Architectural Design subjects (Arhitectural Design 1-10).",
            "These are the traditional initial plans made for architecture students, these plans are made to determine the environment, spatial organization, and overall initial design of the site where the structure is gonna be built before the final drawings are made such as Floor Plans, Elevations, Sections, etc.",
            "The process of this project started with my sketches based on the traditional initial plans used to do by architecture students. I aim to solve the problem of the students in doing their initial plans only on paper and then they have to transfer it to their final drawings, this process is time consuming and inefficient.",
            "In this part of the process, I made a digital representation of the sketches using Canva in order to visualize the process of our system through colors and graphics. This can also serve as proof of the benefits of the digitalization of plans.",
            "This is the execution of the project, where I used three.js to create a 3D building editor that allows students to create and manipulate their initial plans in a digital environment.  All of the stored data such as the position and scales of the buildings are stored in Firebase, which is a cloud-based database service that allows for real-time data synchronization and storage. Other data stored in Firebase include the posts and tasks created by the instructors, and the submissions made by the students.",
            "The assets or buildings are made by our System Designer, Marithes Miraflor using Sketch Up with a file name .glb, then I imported it to our system and made it interactive using three.js. This will be the final output of the system, where students will submit it to their instructors through the LMS and it will be evaluated based on the criteria set by the instructors.",
            "This is the learning management system (LMS) integrated with the 3d building editor where students can create and manage their projects, submit their initial plans, and receive feedback from their instructors. The LMS also includes features such as post creation and task management, where instructors can create tasks for their students and manage their submissions.",
            "Overall, this project aims to enhance the learning experience of architecture students by providing them with a digital tool that streamlines the initial design process and promotes creativity and efficiency in their work. This also aims to lessen the usage of paper in doing their initial plans, which is a step towards sustainability in architectural education."
        ],
        images: [
            "/thesis-pics/thesis-img-1.png",
            "/thesis-pics/thesis-img-2.png",
            "/thesis-pics/thesis-img-3.png",
            "/thesis-pics/thesis-img-4.png",
            "/thesis-pics/thesis-img-5.png",
            "/thesis-pics/thesis-img-6.png",
            "/thesis-pics/thesis-img-7.png",
        ],
        videoUrl: "https://www.youtube.com/embed/iNPgLpJzjMA", 
        projectUrl: "https://planwiseio.netlify.app/",
        technologies: ["javascript", "html5", "css3","threejs", "firebase"]
    },
    {
        id: 2, 
        title: "One App Mobile Application UI/UX Design (December 2025 - January 2026)",
        date: "December 2025 - January 2026",
        description: [
            "This project involved the design of a mobile application for the company where I worked for my internship, which is a comprehensive platform that features Employee Management System (EMS). The UI/UX design focuses on creating an intuitive and user-friendly interface that allows users to easily navigate through the app and access its features. This also serves as a mobile version of an EMS web application of the company where our manager directed me to change the design to adapt to the mobile platform.",
            "In this project, I utilized Visily, a design tool that specializes in creating interactive prototypes and wireframes for digital products. The colors I used are based on the company's branding guidelines, which include a combination of blue and green tones with the main color of white, my handler thought me to use more white color to create a clean and professional look. The design also incorporates intuitive navigation elements and clear visual hierarchy to enhance the user experience.",
            "I am inspired by the Sky or daytime scenes such as clouds and grass for the design of the app, as blue and green create a calming and pleasant atmosphere for the users. Overall, my project are approved by our manager and is currently being developed by the company's development team, which is a great achievement for me as a designer and it also serves as a valuable addition to my portfolio.",
        ],
        images: [
            "/oodc-pics/oodc-img-1.jpg",
            "/oodc-pics/oodc-img-2.jpg",
            "/oodc-pics/oodc-img-3.jpg"
        ],
        technologies: ["visily"],
        customIcons: {
            "visily": "visily-icon.png"
        }
    },
    {
        id:3,
        title: "Customer Relationship Management (CRM) Front-end Design for OODC",
        date: "January 2026 - April 2026",
        description: [
            "Together with my co-interns, we developed a web-based Customer Relationship Management (CRM) system for the company where I worked for my internship. The CRM system is designed to help the company manage its interactions with customers and improve customer satisfaction. I'm assigned to translate user interface (UI) design into a functional front-end using React, which is a popular JavaScript library for building user interfaces.",
            "In this project, I'm responsible for the Task Management module of the CRM system, which allows users to create and manage tasks related to customer interactions. I used React to build the front-end of the Task Management module, which includes features such as task creation, task assignment, and task tracking.",
            "I'm also assigned to Proposal Management module of the CRM system, which allows users to create and manage proposals for clients. This module also includes features such as Rich Text Editor where users can create and format text like headings, lists, and links. In developing this module, I used Tiptap, which is a modern rich text editor built on top of ProseMirror, to implement the rich text editing functionality. The CRM system is designed to be user-friendly and efficient, allowing the company to better manage its customer relationships and improve overall customer satisfaction.",
        ],
        images: [
            "/crm-pics/crm-img-1.png",
            "/crm-pics/crm-img-2.png",
            "/crm-pics/crm-img-3.png",
        ],
        technologies: ["html5", "css3", "typescript", "react"],
        customIcons: {
            "visily": "visily-icon.png"
        }
    },
    /*
    {
        id: 4,
        title: "E-commerce System Mobile Application",
        date: "September 2024 - October 2024",
        description: [
            "This project involved the design of a user interface (UI) and user experience (UX) for an e-commerce website. The goal of this project was to create a visually appealing and user-friendly design that would enhance the overall shopping experience for customers. The design process included research, wireframing, prototyping, and testing to ensure that the final design met the needs and expectations of the target audience.",
            "In this project, I utilized Canva, a graphic design platform that allows users to create a wide range of visual content, including website designs. The colors I used are based on the branding guidelines of the e-commerce website, which include a combination of vibrant and neutral tones with the main color of white to create a clean and modern look. The design also incorporates intuitive navigation elements and clear visual hierarchy to enhance the user experience.",
            "I am inspired by other e-commerce websites such as Amazon and Shopify for the design of the website, as they create a seamless and enjoyable shopping experience for their customers. Overall, this project aims to create an engaging and user-friendly e-commerce website that encourages customers to explore and make purchases with ease."
        ],
        images: [
        ],
        videoUrl: "https://www.youtube.com/embed/rXYmpXd9MwM",
        technologies: ["canva"]
    },
    */
    {
        id: 5,
        title: "Personal Portfolio Website",
        date: "April 2026",
        description: [
            "This project is a personal portfolio website that I designed and developed to showcase my skills, projects, and experiences. The website serves as a platform for me to present my work and connect with potential employers or clients. The design of the website is clean and modern, with a focus on simplicity and ease of navigation.",
            "The process of this project started with a wireframe and mockup design using Visily, where I planned the layout and structure of the website. I've searched a lot of inspiration from other portfolio websites in Dribble and Behance then merged it to create a unique and visually appealing design for the website's layout",
            "I chose a color scheme that reflects my personal brand, which includes a combination of soft pastel colors mixed with earth tones, with a main color of beige to create a clean and professional look. The typography is also carefully selected to enhance readability and visual appeal."
        ],
        images: [
            "/portfolio-pics/port-img-1.png",
            "/portfolio-pics/port-img-2.png",
            "/portfolio-pics/port-img-3.png"
        ],
        projectUrl: "https://marithesmiraflor.netlify.app/",
        technologies: ["html5", "css3", "typescript", "react", "visily"],
        customIcons: {
            "visily": "visily-icon.png"
        }
    },
    {
        id: 6,
        title: "Haraya Printing Services Website UI Design",
        date: "October 2024 - December 2024",
        description: [
            "This project involved the design of a website for Haraya Printing Services, a printing company that offers a wide range of printing services to its customers. The website is designed to provide an easy and convenient way for customers to order printing services within the website.",
            "I am assigned of designing the user interface (UI) of the website, which includes creating a visually appealing and user-friendly layout that reflects the company's brand identity. I used Canva to create the design of the website, which references to the company's logo. The color palette i used symbolizes the main colors of ink used in printing, which are cyan, magenta, yellow, and black. The design also incorporates intuitive navigation elements and clear visual hierarchy to enhance the user experience.",
            "I also incorporated elements that reflect the printing industry, such as ink stains on white canvas, to create a unique and visually appealing design for the website. Overall, this project aims to enhance the online presence of Haraya Printing Services and provide customers with an easy and convenient way to access their printing services.",
            "In this project i used mosterrat font for the typography, which is a modern and clean sans-serif typeface that enhances readability and visual appeal. The website design also includes clear calls to action, such as buttons for ordering printing services and contacting the company, to encourage user engagement and drive conversions."
        ],
        images: [
            "/hpr-pics/hpr-img-1.png",
            "/hpr-pics/hpr-img-2.png",
            "/hpr-pics/hpr-img-3.png",
            "/hpr-pics/hpr-img-4.png"
        ],
        technologies: ["canva"]

    }
    
]