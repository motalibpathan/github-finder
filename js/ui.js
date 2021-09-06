class UI {
  constructor() {
    this.profile = document.querySelector("#profile");
  }
  showProfile(user) {
    this.clearAlert();
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
    <div class="row">
      <div class="col-sm-3">
        <img src="${user.avatar_url}" alt="" class="img-fluid mb-2" />
        <div class="d-grid gap-2">
          <a
            href="${user.html_url}"
            target="_blank"
            class="btn btn-primary mb-4"
          >
            View Profile</a
          >
        </div>
      </div>
      <div class="col-md-9">
       <h4>
          <span class="badge bg-primary"
            >Public Repos: ${user.public_repos}</span
          >
          <span class="badge bg-secondary">Public Gists: ${
            user.public_gists
          }</span>
          <span class="badge bg-success"
            >Followers : ${user.followers}</span
          >
          <span class="badge bg-danger"
            >Following: ${user.following}</span
          > 
       </h4>
        <br /><br />
        <ul class="list-group">
        
          <li class="list-group-item">Company: ${
            user.company === null ? "Not available" : user.company
          }</li>
          <li class="list-group-item">Website or Blog : <a target="_blank" href="${
            user.blog
          }">${user.blog}</a></li>
          <li class="list-group-item">Location: ${
            user.location === null ? "Not available" : user.location
          }</li>
          <li class="list-group-item">Member Since: ${new Date(
            user.created_at
          ).getFullYear()}</li>
       
        </ul>
      </div>
    </div>
  </div>
      `;
  }

  clearProfile() {
    console.log(`this.profile`, this.profile);
    this.profile.innerHTML = "";
    // document.querySelector(".ripContainer").innerHTML = "";
  }

  showAlert(message, className) {
    this.clearProfile();
    this.clearAlert();
    let div = document.createElement("div");
    div.className = className;
    div.append(document.createTextNode(message));
    let container = document.querySelector(".searchContainer");
    let search = document.querySelector(".search");
    container.insertBefore(div, search);
  }
  clearAlert() {
    let currentAlert = document.querySelector(".alert");
    if (currentAlert) {
      currentAlert.remove();
    }
  }

  showRepositories(ripData) {
    let ripContainer = document.querySelector(".ripContainer");
    let ripHeader = document.createElement("h2");
    ripHeader.appendChild(document.createTextNode(`Repositories `));
    let spn = document.createElement("span");
    spn.appendChild(document.createTextNode(`${ripData.length}`));
    ripHeader.appendChild(spn);

    spn.className = "no-of-repos badge bg-secondary";
    ripContainer.appendChild(ripHeader);
    ripData.forEach((element) => {
      let ripCard = document.createElement("div");
      ripCard.className = "card card-body repositories my-3";

      let title = document.createElement("h4");
      let p = document.createElement("p");
      p.appendChild(document.createTextNode(`${element.description}`));
      let span = document.createElement("span");
      span.appendChild(document.createTextNode("Website: "));
      let a = document.createElement("a");
      a.appendChild(document.createTextNode(`${element.homepage}`));
      a.setAttribute("href", `${element.homepage}`);
      a.setAttribute("target", "_blank");
      console.log(`span`, span);
      span.appendChild(a);
      title.appendChild(document.createTextNode(`${element.name}`));
      ripCard.appendChild(title);
      ripCard.appendChild(p);
      ripCard.appendChild(span);
      ripContainer.appendChild(ripCard);
      // console.log(`element`, element.name, element.description);
      // ripContainer.appendChild(newChild).innerHTML = `
      // <div class="card card-body repositories">
      //   <h3 class="card-title">Personal-Website</h3>
      //   <p>Live site</p>
      //   <span>Website: <a href="#">www.facebook.com</a></span>
      // </div>
      // `;
    });
  }

  showRepositories2(ripData) {
    document.querySelector(".ripContainer").innerHTML = "";
    // document.querySelector(".ripContainer h2").style.visibility = "visible";
    // document.querySelector(
    //   ".ripContainer h2 span"
    // ).innerHTML = `${ripData.length}`;

    let ripContainer = document.querySelector(".ripContainer");
    let ripHeader = document.createElement("h3");
    ripHeader.appendChild(document.createTextNode(`Repositories `));
    let spn = document.createElement("span");
    spn.appendChild(document.createTextNode(`${ripData.length}`));
    spn.className = "badge bg-secondary";
    ripHeader.appendChild(spn);
    ripContainer.appendChild(ripHeader);

    ripData.forEach((element) => {
      let ripCard = document.createElement("div");
      ripCard.innerHTML = `
      <div class="card card-body repositories my-3">
        <h3 class="card-title text-primary">${element.name}</h3>
        <a style="width:120px" class="btn btn-warning btn-sm" target="_blank" href="${
          element.html_url
        }">Visit Repository</a>
        <p>Description: ${
          element.description === null ? "Not available" : element.description
        }</p>
        <span>Website: <a target="_blank" href="${element.homepage}">${
        element.homepage === null ? "" : element.homepage
      }</a></span>
      </div>
      `;
      ripContainer.appendChild(ripCard);
    });
  }

  // Add more items
}
