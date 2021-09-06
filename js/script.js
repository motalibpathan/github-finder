let searchBtn = document.querySelector("#searchBtn");
let searchUser = document.querySelector("#searchUser");
let ui = new UI();
console.log(new Date().getFullYear());

searchBtn.addEventListener("click", (e) => {
  let userText = searchUser.value;
  if (userText != "") {
    //Fetch API
    fetch(`https://api.github.com/users/${userText}`)
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
        if (data.message == "Not Found") {
          // Show alert
          ui.showAlert("User not Found", "alert alert-danger");
        } else {
          // Show Profile
          ui.showProfile(data);
        }
      });
    //Fetch API
    fetch(`https://api.github.com/users/${userText}/repos`)
      .then((result) => result.json())
      .then((data) => {
        // console.log(data[0]);
        if (data.message == "Not Found") {
          // Show alert
          document.querySelector(".ripContainer").innerHTML = "";
        } else {
          // Show Profile
          ui.showRepositories2(data);
          console.log(data);
        }
        //console.log(`Fetch repositories successfully`);
      });
  } else {
    //clear profile
    ui.clearProfile();
    document.querySelector(".ripContainer").innerHTML = "";
  }

  // if (userText != "") {
  //   //Fetch API
  //   fetch(`https://api.github.com/users/${userText}/repos`)
  //     .then((result) => result.json())
  //     .then((data) => {
  //       // console.log(data[0]);
  //       ui.showRepositories2(data);
  //     });
  // } else {
  //   //clear profile
  //   ui.clearProfile();
  //   document.querySelector(".ripContainer").innerHTML = "";
  // }
});
//https://docs.github.com/rest/reference/users/
//http://api.github.com/user/
