const users = [
  {
    username: "sugxrval",
    password: "jenliser",
    phone: 1234,
  },
  {
    username: "jennierubyjane",
    password: "lilinme",
    phone: 5678,
  },
  {
    username: "lalalisa",
    password: "nininme",
    phone: 9123,
  },
  {
    username: "rosesarerosie",
    password: "girlsfe",
    phone: 4567,
  },
  {
    username: "sooya",
    password: "imokay",
    phone: 8912,
  },
];

const pinksPets = [
  {
    petName: "Hank",
    owner: "Rose",
  },
  {
    petName: "Love",
    owner: "Lalisa",
  },
  {
    petName: "Dalgom",
    owner: "Jiso",
  },
  {
    petName: "Lego",
    owner: "Lalisa",
  },
  {
    petName: "Kuma",
    owner: "Jennie",
  },
];

const username = document.getElementById("username"),
  password = document.getElementById("password"),
  btnLogin = document.getElementById("btnLogin"),
  toggles = document.querySelectorAll(".toggles"),
  petPic = document.getElementById("petpic");
remember = document.getElementById("remember");

function validUser(savedUsers, user, password) {
  let found = savedUsers.find((savedUsers) => savedUsers.username == user);

  if (typeof found === "undefined") {
    return false;
  } else {
    if (found.password != password) {
      return false;
    } else {
      return found;
    }
  }
}

function savingData(savedUser, storage) {
  const user = {
    username: savedUser.username,
    password: savedUser.password,
    phone: savedUser.phone,
  };
  storage.setItem("user", JSON.stringify(user));
}

function forgetUser(storage) {
  let storageUser = JSON.parse(storage.getItem("user"));
  return storageUser;
}

function greetings(user) {
  usernameIn.innerHTML = `Welcome <span>${user.userName}</span>`;
}
function showInfo(array, type) {
  array.forEach((element) => {
    element.classList.toggle(type);
  });
}

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();

  if (!username.value || !password.value) {
    alert("you must enter the info");
  } else {
    let data = validUser(users, username, password);
    if (!data) {
      alert("User or password incorrect");
    } else {
      if (remembered.checked) {
        savingData(data, localStorage);
        greetings(forgetUser(localStorage));
      } else {
        savingData(data, sessionStorage);
        greetings(forgetUser(sessionStorage));
      }
    }
  }
});
