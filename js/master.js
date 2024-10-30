try {
  // Start Move Around Sections
  let content = Array.from(document.querySelector(".content").children);
  let home = document.querySelector(".content .home");
  let about = document.querySelector(".content .about");

  // Create Transition Active When Move Between Sections
  let lies = document.querySelectorAll("header ul li");
  lies.forEach((li, i) => {
    li.addEventListener("click", function (e) {
      lies.forEach((li, i) => {
        li.classList.remove("active");
        content[i].style.display = "none";
      });
      e.target.classList.add("active");
      content[i].style.display = "block";
    });
  });

  //
  // Fetch My Repostries By Fetch Api
  let input = document.querySelector(".project .text-box input");
  const btn = document.querySelector(".project .text-box button");
  const cards = document.querySelector(".project .cards");
  const keyWords = document.querySelector(".project .key-words");
  let sameNameCount;
  fetch("https://api.github.com/users/Abdulla-kamal/repos")
    .then((res) => res.json())
    .then((repos) => {
      repos.forEach((repo) => {

        // Set Key Dynamic Words 
        let spn = document.createElement("span");
        spn.classList.add("animate__animated", "animate__fadeInUp");
        let repoName = document.createTextNode(repo.name);
        spn.appendChild(repoName);
        keyWords.appendChild(spn);
        // Set Dynamic Projects Card Too
      if(repo.name !== "Abdulla-Kamal") {
        let repos = document.createElement("div");
        repos.classList.add("repos", "animate__animated", "animate__zoomIn");
        let icon = document.createElement("div"); // repos's child
        icon.className = "icon";
        let i = document.createElement("i");
        i.classList.add("fa-regular", "fa-window-restore");
        icon.appendChild(i);
        let rep = document.createElement("div"); // repos's child
        rep.className = "repo";
        let span = document.createElement("span"); // rep's child
        span.className = "name";
        span.innerHTML = repo.name;
        let buttons = document.createElement("div"); // rep's child
        buttons.className = "buttons";
        let btn1 = document.createElement("button"); // buttons's child
        let a1 = document.createElement("a"); // btn's child
        a1.setAttribute("href", `https://abdulla-kamal.github.io/${repo.name}/`);
        a1.innerHTML = "Show";
        let btn2 = document.createElement("button"); // buttons's child
        let a2 = document.createElement("a"); // btn's child
        a2.setAttribute("href", `https://github.com/Abdulla-kamal/${repo.name}`);
        a2.innerHTML = "Source";
        btn1.appendChild(a1);
        btn2.appendChild(a2);
        buttons.appendChild(btn1);
        buttons.appendChild(btn2);
        rep.appendChild(span);
        rep.appendChild(buttons);
        repos.appendChild(icon);
        repos.appendChild(rep);
        cards.appendChild(repos);
      }
      });
      btn.addEventListener("click", (_) => {
        sameNameCount = 0;
        if (input.value !== "") {
          repos.forEach((repo) => {
            if (input.value.toLowerCase() == repo.name.toLowerCase()) {
              cards.innerHTML = `<div class="repos animate__animated animate__zoomIn">
            <div class="icon">
                          <i class="fa-regular fa-window-restore"></i>
                        </div>
                        <div class="repo">
                          <span class="name">${repo.name}</span>
                          <div class="buttons">
                             <button><a href="https://abdulla-kamal.github.io/${repo.name}/">Show</a></button> <button><a href="https://github.com/Abdulla-kamal/${repo.name}">Source</a></button>
                          </div>
                        </div>
                      </div>`;
              sameNameCount += 1;
            }
          });
          if (sameNameCount == 0) {
            cards.innerHTML = ` <div class="image animate__animated animate__zoomIn"><img src="imgs/Abdo-t.webp" alt="" /><p>Wrong Name <strong>Type From Key Words</strong></p></div>
          `;
          }
        } else {
          cards.innerHTML = ` <div class="image animate__animated animate__zoomIn"><img src="imgs/Abdo-r.webp" alt="" /><p>Type In The Text Box</p></div>
        `;
        }
        input.value = "";
      });
    });
} catch (exception) {
  console.log(exception);
}






// let repos = document.createElement("div");
// repos.classList.add(
//   "repos",
//   "animate__animated",
//   "animate__zoomIn"
// );
// let icon = document.createElement("div");// repos's child
// icon.className = "icon";
// let i = document.createElement("i");
// i.classList.add("fa-regular", "fa-window-restore");
// icon.appendChild(i);
// let rep = document.createElement("div");// repos's child
// rep.className = "repo";
// let span = document.createElement("span"); // rep's child
// span.className = "name";
// span.innerHTML = repo.name;
// let buttons = document.createElement("div"); // rep's child
// buttons.className = "buttons";
// let btn = document.createElement("button");// buttons's child
// let a = document.createElement("a");// btn's child
// a.setAttribute("href",`https://abdulla-kamal.github.io/${repo.name}/`);
// a.innerHTML = "Show";
// btn.appendChild(a);
// buttons.appendChild(btn)
// rep.appendChild(span);
// rep.appendChild(buttons);
// repos.appendChild(rep);
// cards.appendChild(repos);
