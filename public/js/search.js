const searchInput = document.getElementById("vidsearch");
const searchBtn = document.querySelector('#searchBtn');

searchInput.addEventListener("keyup", (e) => {

  fetch("searchvidSuggest", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ payload: searchInput.value }),
  })
    .then((res) => res.json())
    .then((data) => {
      let payload = data.payload;
      SearchPopupFill(payload)
  });
});


const searchDisplay = () => {
  fetch("searchvid", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ payload: searchInput.value }),
  })
  
}

searchBtn.addEventListener('click',searchDisplay);



function SearchPopupFill(payload) {
  let turn = 0;
  let suggetions = document.querySelectorAll('.sugestion p');
    suggetions.forEach(el => {
      el.addEventListener('click',searchDisplay);
      el.innerText = payload[turn].title;
      turn++;
    })
  
}


function SearchPopup() {
  search = document.querySelector('#search input');
  suggetion = document.querySelector('.serch_pop_up');
  
  search.addEventListener('click', () => {
      suggetion.style.display = 'block';
  });   
};

SearchPopup()

