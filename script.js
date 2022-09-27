const checkOnlineStatus = async () => {
  try {
    const online = await fetch("https://jsonplaceholder.typicode.com/posts");
    return online.status >= 200 && online.status < 300;
  } catch (err) {
    return false;
  }
}

setInterval(async () => {
  const result = await checkOnlineStatus();
  const statusDisplay = document.getElementById("status");
  statusDisplay.textContent = result ? "online" : "offline";
}, 3000);


