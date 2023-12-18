
const data = [
    {
        projectName: "Dotnet Food",
        imgPath: "/img/dotnet_page.png",
        projectType: "Web Development",
        projectTags: "MicrosoftSQL,Tailwind,React",
        pageImg: "dotnet_page.png",
        projectSimpleDesc: "Web application for ordering and delivering foods",
        projectFullDesc: "This web application is an app for ordering food. There are many restaurants to choose from to order food from. And there will be people waiting to receive deliveries and update the product list to see what stage it has reached (delivery). There is also a shopping cart and member system.",
        imgSlides: "dotnet_1.png,dotnet_2.png,dotnet_3.png,dotnet_4.png,dotnet_5.png",
        projectGithub: "https://github.com/worachote1/dotnet-food"
    },
    {
        projectName: "Quic Gear",
        imgPath: "/img/quicgear_page.png",
        projectType: "Web Development",
        projectTags: "MongoDB,Tailwind,React",
        pageImg: "quicgear_page.png",
        projectSimpleDesc: "Web application for buying and auctioning gaming gear",
        projectFullDesc: "Web application for purchasing products related to gaming gear. There is a filter system (type, brand), a search system using keywords, and an auction system for Kia gaming products. Every user can create an auction by themselves but must wait for the administrator to approve the creation of the auction before it can be put on the auction page.",
        imgSlides: "quicgear_1.jpg,quicgear_2.jpg,quicgear_3.png,quicgear_4.png",
        projectGithub: "https://github.com/worachote1/QUIC-GEAR"
    },
    {
        projectName: "Bake A Cake",
        imgPath: "/img/bakecake_page.png",
        projectType: "Game Development",
        projectTags: "Godot 3.0,DFA",
        pageImg: "bakecake_page.png",
        projectSimpleDesc: "The DFA game was made with Godot Engine 3.0",
        projectFullDesc: "A game created for the application of NFA DFA in playing games. By playing it, users must enter input to reach the finish line. Otherwise, the user will lose immediately due to the main goal of NFA DFA, called TRAP STATE. The game is in infinity mode. The more you play, the more challenging it will be.",
        imgSlides: "bakecake_1.png,bakecake_2.png,bakecake_3.png,bakecake_4.png,bakecake_5.png",
        projectGithub: "https://github.com/XSectorz/Godot_BakeACake"
    },
    {
        projectName: "Terra Craft",
        imgPath: "/img/terra_page.png",
        projectType: "Game Development",
        projectTags: "Godot 3.0",
        pageImg: "terra_page.png",
        projectSimpleDesc: "Game tower defense made with Godot Engine 3.0",
        projectFullDesc: "The game is in the Tower Defense genre and is in Infinity mode, with many characters to choose from. Including many different enemy types to increase the challenge. As you pass the level, the difficulty of the level will increase, increasing the number of enemies. and endurance will increase even more. But there will be help items within the game when successfully killing monsters, and there is also a teaching system for those who don't know how to play. Including being able to set the on/off sound, music, and sound effects within the game.",
        imgSlides: "terra_1.png,terra_2.png,terra_3.png,terra_4.png,terra_5.png,terra_6.png,terra_7.png,terra_8.png",
        projectGithub: "https://xsectorz.itch.io/terracraft-v10"
    },
    {
        projectName: "My Note",
        imgPath: "/img/note_page.png",
        projectType: "App Development",
        projectTags: "Swing,Java,File I/O",
        pageImg: "note_1.png",
        projectSimpleDesc: "Application for note of your activity ith expired time",
        projectFullDesc: "An application developed in Java was used to record various activities. You can set the expiration date for that activity. and can also edit various notes, whether they have been completed or not.",
        imgSlides: "note_1.png,note_2.png,note_3.png,note_4.png,note_5.png,note_6.png",
        projectGithub: "https://github.com/XSectorz/MyNoteApp"
    },
    {
        projectName: "Food Prediction",
        imgPath: "/img/foodpridict_page.png",
        projectType: "App Development",
        projectTags: "Python,Similarity,Heat Map",
        pageImg: "foodpridict_page.png",
        projectSimpleDesc: "Application for predicting your foods to eat",
        projectFullDesc: "An application developed in Python with the use of Similarity to analyze if the user needs protein, fat, and carbohydrates like this. It can be compared with the nutritional value of the type of food you should eat. and the system will display a list of 10 types of food as options.",
        imgSlides: "foodpridict_1.png,foodpridict_2.png,foodpridict_3.png,foodpridict_4.png",
        projectGithub: "https://github.com/XSectorz/FoodsPredict"
    },
    {
        projectName: "Super Snake",
        imgPath: "/img/snake_page.png",
        projectType: "Game Development",
        projectTags: "STM32,Hardware",
        pageImg: "snake_page.png",
        projectSimpleDesc: "The 2-player snake game was made with STM32F767ZI",
        projectFullDesc: "Snake was developed using STM32F767ZI and can be played in 1 or 2 player mode with an adjustable difficulty level. Using only an LCD screen and two Joy Sticks, there are sound effects when playing as well.",
        imgSlides: "snake_1.jpg,snake_2.jpg,snake_3.jpg,snake_4.jpg,snake_5.jpg,snake_6.jpg,snake_7.jpg",
        projectGithub: "https://github.com/XSectorz/MAD_SuperSnake"
    },
    {
        projectName: "Pong! Game",
        imgPath: "/img/pong_page.jpg",
        projectType: "Game Development",
        projectTags: "FPGA,Hardware",
        pageImg: "pong_page.jpg",
        projectSimpleDesc: "The 2-player pong game was made with FPGA.",
        projectFullDesc: "The game is developed using two FPGA boards connected together, with one board being the one that processes the entire game and the other board being the one that displays the game on the screen using a VGA cable.",
        imgSlides: "pong_1.jpg,pong_2.png,pong_3.png",
        projectGithub: "https://github.com/XSectorz/DigitalProject"
    },
    {
        projectName: "XSHOP",
        imgPath: "/img/xshop_page.png",
        projectType: "Game Development",
        projectTags: "Minecraft,Java,Economy,Plugin",
        pageImg: "xshop_page.png",
        projectSimpleDesc: "Minecraft plugin that makes a balanced economy system in the game",
        projectFullDesc: "A Minecraft plug-in is used to create a Minecraft server shop that will calculate demand and supply, with product prices increasing or decreasing according to conditions of demand for buying and selling. And there is a system that gives the details of the trading volume and resets the price back to the starting point. as specified",
        imgSlides: "xshop_1.png,xshop_2.png,xshop_3.png,xshop_4.png,xshop_5.png",
        projectGithub: "https://github.com/XSectorz/XShop"
    },
    {
        projectName: "XSEVENT",
        imgPath: "/img/xsevent_page.png",
        projectType: "Game Development",
        projectTags: "Minecraft,Java,Plugin,Timer,Redis,MYSQL",
        pageImg: "xsevent_page.png",
        projectSimpleDesc: "Minecraft plugin that added more events to the game",
        projectFullDesc: "A Minecraft plug-in that adds various activities for players to compete in. It uses Redis to send data to the host and calculate scores again so that scores can be sorted out correctly. Must, because the server system is a Sync server, causing data to be shared.",
        imgSlides: "xsevent_1.png,xsevent_2.png,xsevent_3.png,xsevent_4.png,xsevent_5.png",
        projectGithub: "https://github.com/XSectorz/XSEvent"
    },
    {
        projectName: "XSCASINO",
        imgPath: "/img/xscasino_page.png",
        projectType: "Game Development",
        projectTags: "Minecraft,Java,Plugin,Timer,Redis,MYSQL",
        pageImg: "xscasino_page.png",
        projectSimpleDesc: "Minecraft plugin that used to play lottery and roulette",
        projectFullDesc: "A Minecraft plug-in that adds a mini-game to playing the lottery. Lottery is a two-digit random number. Redis is used to share information with each other. Once the winners are calculated, they are divided according to the number of winning lottery tickets. And another mini-game is roulette, which allows players to bet using tokens to play; if they lose, they will lose all. By allowing players to choose what color they want to get, the system will do random things to see the results of whether the players will win or lose.",
        imgSlides: "xscasino_1.png,xscasino_2.png,xscasino_3.png,xscasino_4.png,xscasino_5.png,xscasino_6.png",
        projectGithub: "https://github.com/XSectorz/XSCasino"
    },
    {
        projectName: "XSGIFT",
        imgPath: "/img/xsgift_page.png",
        projectType: "Game Development",
        projectTags: "Minecraft,Java,Plugin,Redis",
        pageImg: "xsgift_page.png",
        projectSimpleDesc: "Minecraft plugin that gives items to players with a lot of features",
        projectFullDesc: "The Minecraft plugin used to send items to all players on the server, but options have been added to filter players, and Redis has been implemented to send data across servers for players on servers other than the host.",
        imgSlides: "xsgift_1.png,xsgift_2.png,xsgift_3.png,xsgift_4.png,xsgift_5.png,xsgift_6.png,xsgift_7.png",
        projectGithub: "https://github.com/XSectorz/XSGift"
    },
    {
        projectName: "XSJOBS",
        imgPath: "/img/xsjobs_page.png",
        projectType: "Game Development",
        projectTags: "Minecraft,Java,Plugin,MYSQL",
        pageImg: "xsjobs_page.png",
        projectSimpleDesc: "Minecraft plugin that added jobs perk",
        projectFullDesc: "The Minecraft plug-in is used to upgrade various player skills according to level. More abilities will be unlocked. This system is used in conjunction with the Jobs plug-in to check player information to see if professional players meet the conditions or not.",
        imgSlides: "xsjobs_1.png,xsjobs_2.png,xsjobs_3.png,xsjobs_4.png,xsjobs_5.png",
        projectGithub: "https://github.com/XSectorz/XSJobsMax"
    },
];

export default data;