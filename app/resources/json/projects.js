
const projects = [
    {
        priority: 0,
        title: "My Profile",
        description: "A website created out of passion and love as a portfolio of myself.",
        website: "https://ravanar-sk.github.io/",
        icon: null,
        projectData: {
            type: "web", // mobile/web
            isReactNative: false,
            android: null,
            ios: null,
            web: {
                url: "https://ravanar-sk.github.io",
            }
        }
    },
    {
        priority: 1,
        title: "MATCHBOXX",
        description: "A social networking iOS application where you could meet sport enthusiasts, such as Coach, Teams, Fans and interact with them over personal and group chat, post on their feeds, follow them, comment on their feeds and most importantly you could schedule matches between users or teams.",
        website: null,
        icon: "https://raw.githubusercontent.com/ravanar-sk/MyProfile-assets/main/ProjectsAppIcons/appIconMatchboxx.jpeg",
        projectData: {
            type: "mobile", // mobile/web
            isReactNative: false,
            android: null,
            ios: {
                url: "",
            },
            web: null
        }
    },
    {
        priority: 2,
        title: "PLANSMILE",
        description: "An iOS offline medical application used to analyze, and provide treatment solutions in the form of PDF reports.",
        website: null,
        icon: null,
        projectData: {
            type: "mobile", // mobile/web
            isReactNative: false,
            android:null,
            ios: {
                url: "",
            },
            web: null
        }
    },
    {
        priority: 3,
        title: "BIZCLIPS",
        description: "A professional social networking iOS application where you could publicize job openings if you are an entrepreneur, or market your skills as a job seeker using Videos as the media of communication.",
        website: null,
        icon: "https://raw.githubusercontent.com/ravanar-sk/MyProfile-assets/main/ProjectsAppIcons/appIconBizclips.jpeg",
        projectData: {
            type: "mobile", // mobile/web
            isReactNative: false,
            android: null,
            ios: {
                url: "https://apps.apple.com/us/app/bizclips/id1315696803",
            },
            web: null
        }
    },
    {
        priority: 4,
        title: "SAP",
        description: "An iOS application used to authenticate users in a SAP technical event using QR code and REST API authentication.",
        website: null,
        icon: "https://raw.githubusercontent.com/ravanar-sk/MyProfile-assets/main/ProjectsAppIcons/appIconSAP.png",
        projectData: {
            type: "mobile", // mobile/web
            isReactNative: false,
            android: null,
            ios: {
                url: "",
            },
            web: null
        }
    },
    {
        priority: 5,
        title: "HASANAT",
        description: "An application used for donation based crowdfunding for middle east location. It includes features like Payment Gateway.",
        website: null,
        icon: "https://raw.githubusercontent.com/ravanar-sk/MyProfile-assets/main/ProjectsAppIcons/appIconHasanat.jpeg",
        projectData: {
            type: "mobile", // mobile/web
            isReactNative: false,
            android: {
                url: "",
            },
            ios: {
                url: "",
            },
            web: null
        }
    },
    {
        priority: 6,
        title: "EDUCATION ABOVE ALL",
        description: "An application used for donation based crowdfunding for middle east location. It includes features like Payment Gateway.",
        website: "https://educationaboveall.org/",
        icon: "https://raw.githubusercontent.com/ravanar-sk/MyProfile-assets/main/ProjectsAppIcons/appIconEAA.jpeg",
        projectData: {
            type: "mobile", // mobile/web
            isReactNative: false,
            android: {
                url: "https://play.google.com/store/apps/details?id=com.applab.EAA&hl=en_IN",
            },
            ios: {
                url: "https://apps.apple.com/th/app/education-above-all/id1560639221",
            },
            web: null
        }
    },
    {
        priority: 7,
        title: "QATAR CANCER SOCIETY",
        description: "An application used for donation based crowdfunding for middle east location. It includes features like Payment Gateway.",
        website: "https://www.qcs.qa/en/",
        icon: "https://raw.githubusercontent.com/ravanar-sk/MyProfile-assets/main/ProjectsAppIcons/appIconQCS.jpeg",
        projectData: {
            type: "mobile", // mobile/web
            isReactNative: false,
            android: {
                url: "https://play.google.com/store/apps/details?id=com.applab.QCS",
            },
            ios: {
                url: "https://apps.apple.com/au/app/qatar-cancer-society/id1448365698",
            },
            web:null
        }
    },
    {
        priority: 8,
        title: "YOU GOT A GIFT",
        description: "An iOS application to send gift cards to your friends and family to use in authorised stores.",
        website: "https://yougotagift.com/",
        icon: "https://raw.githubusercontent.com/ravanar-sk/MyProfile-assets/main/ProjectsAppIcons/appIconYouGotAGift.webp",
        projectData: {
            type: "mobile", // mobile/web
            isReactNative: false,
            android: null,
            ios: {
                url: "https://apps.apple.com/ae/app/yougotagift-com/id1003784085",
            },
            web:null
        }
    },
    {
        priority: 9,
        title: "DIETHUB",
        description: "A client application for customers who are subscribed to DietHub services. It includes a private virtual online coach to monitor your health and diet. Also includes personal chat.",
        website: "http://diethubapp.com/",
        icon: "https://raw.githubusercontent.com/ravanar-sk/MyProfile-assets/main/ProjectsAppIcons/appIconDiethub.webp",
        projectData: {
            type: "mobile", // mobile/web
            isReactNative: false,
            android: {
                url: "https://play.google.com/store/apps/details?id=com.makers.diethub",
            },
            ios: {
                url: "https://apps.apple.com/qa/app/diethub/id1220736852",
            },
            web:null
        }
    },
    {
        priority: 10,
        title: "DIETHUB Coach",
        description: "",
        website: "http://diethubapp.com/",
        icon: "https://raw.githubusercontent.com/ravanar-sk/MyProfile-assets/main/ProjectsAppIcons/appIconDiethubCoach.webp",
        projectData: {
            type: "mobile", // mobile/web
            isReactNative: false,
            android: {
                url: "https://play.google.com/store/apps/details?id=com.makers.diethubcoach",
            },
            ios: {
                url: "https://apps.apple.com/qa/app/diethub-coach/id1257393544",
            },
            web: null
        }
    },
    {
        priority: 11,
        title: "DHI Cubes",
        description: "Design and Develop UI pages for websites using DHI Cubes, an interactive customizable web front end design and development tool. Languages used: Java, Javascript, C++",
        website: "https://www.dhisigma.com/",
        icon: "https://raw.githubusercontent.com/ravanar-sk/MyProfile-assets/main/ProjectsAppIcons/appIconDhiCubes.png",
        projectData: {
            type: "mobile", // mobile/web
            isReactNative: false,
            android:null,
            ios:null,
            web: {
                url: "",
            }
        }
    },
    {
        priority: 12,
        title: "ONEPORT",
        description: "An iOS application to be used by employees and residents of OnePort settlements in Qatar for flat maintenance.",
        website: null,
        icon: "https://raw.githubusercontent.com/ravanar-sk/MyProfile-assets/main/ProjectsAppIcons/appIconOneport.webp",
        projectData: {
            type: "mobile", // mobile/web
            isReactNative: false,
            android: {
                url: "https://play.google.com/store/apps/details?id=com.applab.oneport&hl=en_IN&gl=US"
            },
            ios: {
                url: "",
            },
            web:null
        }
    },
    {
        priority: 13,
        title: "AL JNOUB",
        description: "A React-Native application to reserve camping ground in the southern reserve of Qatar.",
        website: "https://www.aljnoub.qa/",
        icon: "https://raw.githubusercontent.com/ravanar-sk/MyProfile-assets/main/ProjectsAppIcons/appIconAlJnoub.webp",
        projectData: {
            type: "mobile", // mobile/web
            isReactNative: true,
            android: {
                url: "https://play.google.com/store/apps/details?id=com.applab.aljnoub",
            },
            ios: {
                url: "https://apps.apple.com/qa/app/id1440043523",
            },
            web:null
        }
    },
    {
        priority: 14,
        title: "EMPORIUM",
        description: "An e-commerce React-Native application for GCC by emporium group.",
        website: null,
        icon: null,
        projectData: {
            type: "mobile", // mobile/web
            isReactNative: true,
            android: {
                url: "",
            },
            ios: {
                url: "",
            },
            web:null
        }
    },
]