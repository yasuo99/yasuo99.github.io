const projects = [
    {
        title: 'Engrisk',
        description: "Design and develop an English learning system includes Websiteand Mobile App. <br />Website have many features same like Busuu, Duolingo. Our project will help people more easily on learning English. <br />Our project using Signal R for real-time features e.g. chat,notifications.",
        technology: 'ASP.NET Core Web API, React JS, React Native.',
        github: 'https://github.com/yasuo99/Engrisk-CV'
    },
    {
        title: 'Online Chess',
        description: ' Design and develop an online chess game server and client.',
        technology: 'C#, .NET Core WebSocket, React.',
        github: 'https://github.com/yasuo99/ChessApp'
    },{
        title: 'BookStore Website',
        description: ' Design and develop an e-commercial website for book store.',
        technology: 'ASP.NET Core MVC.',
        github: 'https://github.com/yasuo99/WebsiteBanSach'
    },{
        title: 'Movie Rating Website',
        description: 'Design and develop a movie rating for users which they can give a rate to any movie available in system.',
        technology: 'ASP.NET core Web API, Angular.',
        github: 'https://github.com/yasuo99/MovieRating'
    }
]

const tabItem = document.querySelectorAll(".tab");

tabItem.forEach((tab) => {
    tab.addEventListener("click", () => {
        // Set active for current tab
        tabItem.forEach((temp) => {
            temp.classList.remove("active")
        })
        tab.classList.add("active");

        // Hide old tab and display new tab
        const contents = Array.from(document.getElementsByClassName("tab-content"));
        const content = contents.find((val) => val.dataset.tab === tab.getAttribute("data-tab"));
        console.log(content);
        contents.forEach((val) => {
            val.classList.add("hidden")
        })
        content.classList.remove("hidden");
    });
})

const wallpaper = document.querySelector("#wall");
console.log(wallpaper.src);

// Automatically change wallpaper by timeslapse
const timeslapse = 3000;
let count = 1;
var changeWallpaper = setInterval(() => {
    count++;
    wallpaper.src = wallpaper.src.substring(0,wallpaper.src.lastIndexOf("/") + 1).concat(`wallpaper${count}.jpg`);
    if(count >= 4){
        count = 0;
    }
},timeslapse);