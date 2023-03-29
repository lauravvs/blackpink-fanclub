const bpSongs = [
  {
    name: "Lovesick Girls",
    album: "The Album",
    year: 2018,
    level: 3,
  },
  {
    name: "Pink Venom",
    album: "Born Pink",
    year: 2022,
    level: 3,
  },
  {
    name: "Shut Down",
    album: "Born Pink",
    year: 2023,
    level: 8,
  },
  {
    name: "Whistle",
    album: "Square",
    year: 2016,
    level: 8,
  },
  {
    name: "Crazy Over You",
    album: "The Album",
    year: 2018,
    level: 6,
  },
  {
    name: "SOLO",
    album: "JENNIE",
    year: 2020,
    level: 9,
  },
  {
    name: "TALLY",
    album: "BORN PINK",
    year: 2023,
    level: 10,
  },
  {
    name: "GONE",
    album: "R",
    year: 2021,
    level: 9,
  },
];
let currentIndex = 0;

function showSongs() {
  let arrayPlaceholder = document.getElementById("array");

  let arrayString =
    "name: " +
    bpSongs[currentIndex].name +
    ", album: " +
    bpSongs[currentIndex].album +
    ", year:" +
    bpSongs[currentIndex].year +
    ", level:" +
    bpSongs[currentIndex].level;
  arrayPlaceholder.innerHTML = arrayString;
  currentIndex = (currentIndex + 1) % bpSongs.length;
}
