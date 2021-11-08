const searchBtn = document.getElementById("vidsearch");

searchBtn.addEventListener("keyup", (e) => {
  console.log();
  fetch("searchvid", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ payload: searchBtn.value }),
  })
    .then((res) => res.json())
    .then((data) => {
      let payload = data.payload;
      console.log(payload);
    });
});
