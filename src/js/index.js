import '../scss/main.scss';

console.log ("Hi, I'm Iza. I'm glad you're here! 😊" )


fetch("https://api.github.com/users/izabelazmujdzin/repos?sort=created&direction=asc")
.then((res) => res.json())
.then((res) => {
   const container = document.querySelector('.projects-grid--js');
   for (let repo of res) {
     const {description, homepage,html_url,name} = repo;

     const template =`<article class="project">
     <div class=project__window>
       <span class="project__circle"></span>
       <span class="project__circle"></span>
       <span class="project__circle"></span>
     </div>
     <img class="project__emoji" src="img/githubwhite.png" alt="">
     <div class="project__content">
     <h3 class="project__grid project__title"><span class="project__label">projects: </span><span class="project__title--color">${name}</span></h3>
     <p class="project__grid"><span class="project__label">description: </span> <span>${description}</span></p>
     <p class="project__grid"><span class="project__label">demo: </span> <span><a class="project__link" target="_blank"  rel= "noopener noreferrer" href="${homepage}" title="${name}-demo">&lt;see here&gt;</a></span></p>
     <p class="project__grid"><span class="project__label">github: </span> <span>&lt;<a class="project__link" target="_blank"  rel= "noopener noreferrer" href="${html_url}" title="${name}-link">source_code</a>&gt;</span></p>
   </div>
   </article>`
   if (description){
   container.innerHTML += template;
   }
   }
})
.catch((e) => 
    console.log(e));
