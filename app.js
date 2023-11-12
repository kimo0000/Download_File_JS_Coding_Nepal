const downloadBtn = document.querySelector(".btn_download");

const fileLink =
  "https://drive.google.com/uc?export=download&id=1aYiaLn3YOjL-_o5QBCy7tU1epqA6gZoi";

let timer = 5;
let timeout;

const downloadFile = () => {
  if (downloadBtn.classList.contains("disable_timer")) {
    return (location.href = fileLink);
  }

  downloadBtn.innerHTML = `your File Wel be Download In <span class="counter">${timer}</span> Secondes`;
  downloadBtn.classList.add("timer");

  const interval = setInterval(() => {
    if (timer > 0) {
      --timer;
      return (downloadBtn.innerHTML = `your File Wel be Download In <span class="counter">${timer}</span> Secondes`);
    }

    clearInterval(interval);
    timer = 5;
    downloadBtn.innerText = `your File is Downloading...`;
    location.href = fileLink;

    timeout = setTimeout(() => {
      downloadBtn.classList.replace("timer", "disable_timer");
      downloadBtn.innerHTML = `<i class="fa-solid fa-download"></i>
                     <span>Download Again</span>`;
      // clearTimeout(timeout);
    }, 3000);

    // setTimeout(() => {
    //     downloadBtn.classList.remove("disable_timer");
    //     downloadBtn.innerHTML = `<i class="fa-solid fa-download"></i>
    //              <span>Download File</span>`;
    // }, 3500);
  }, 1000);
};

downloadBtn.addEventListener("click", downloadFile);
