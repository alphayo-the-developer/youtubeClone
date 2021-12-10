//show replies

const  changeArrow =  (count) => {
  if (count.currentTarget.replies.classList[1] != "show") {
    getReplies(count.currentTarget.id,count.currentTarget.replies);
    count.currentTarget.replies.classList.add("show");
    count.currentTarget.innerHTML = `<img src="/img/angle-arrow-pointing-to-right.png" alt="" class="comment_icon"> Hide ${count.currentTarget.number} Reply`;
  } else {
    count.currentTarget.replies.classList.value = "replies";
    count.currentTarget.innerHTML = `<img src="/img/angle-arrow-down.png" alt="" class="comment_icon"> View ${count.currentTarget.number} Reply`;
  }
}

const showReplies = () => {
  const show_replies_btn = document.querySelectorAll(".replies_btn");

  show_replies_btn.forEach((el) => {
    const replies = el.parentElement.lastElementChild;
    const f4m = el.previousElementSibling;
    let id = f4m[1].value;
    num = el.innerHTML;
    count = num.slice(72,75);
    el.addEventListener("click", changeArrow);
    el.replies = replies;
    el.id= id;
    el.number = count;
  });
};

// add comment like
const addCommentLikes = () => {
  const comment_likes_btn = document.querySelectorAll(".comment_likes");
  comment_likes_btn.forEach((el) => {
    el.addEventListener('click', (id)=> {
      // el.style.filter = "invert(3)"
      formEl = el.parentElement.nextElementSibling;
      id= formEl[1].value;
      addLikes(id)
    })
  })
}

setTimeout(() => {
  addCommentLikes()  
}, 5000);


// side menu click

// comment loading

//Show reply input
showRepliesInput = () => {
  replyBtns = document.querySelectorAll(".comment_interact button");

  replyBtns.forEach((el) => {
    el.addEventListener("click", () => {
      let form = el.parentElement.nextElementSibling;
      if (form.classList[1] != "show_reply") {
        form.classList.add("show_reply");
      } else {
        form.classList.value = "reply_form";
      }
    });
  });
};


//add comments

const createMAinComment = (data, id, replyCount,likes) => {
  const commentMainContainner = document.querySelector(".comments");

  // create containner
  const commentContainner = document.createElement("div");
  commentContainner.className = "comment";

  comment = `
    <img src="/img/background-618226__340.webp" alt="" class="comment_thumbnail">
    <div class="comment_data">
        <p class="comment_user">mac Bumblebee <span class="comment_date">1 year ago</span></span></p>
        <p class="comment_content">${data}</p>
        <div class="comment_interact">
            <div class="comment_likes">
                <img src="/img/thumbs-up-hand-symbol.png" alt="" class="icons">
                <p>${likes}</p>
            </div>
            <div class="comment_dislike">
                <img src="/img/thumbs-down-silhouette.png" alt="" class="icons">
                <!-- <p>592</p> -->
            </div>
            <button >REPLY</button>
        </div>
        <form action="" class="reply_form">
            <input type="text" class="reply_input">
            <input type="text" value="${id}" hidden>
            <input type="submit" value="Reply" class="reply_submit">
        </form>
        <button class="replies_btn" id="replies_btn"> <img src="/img/angle-arrow-down.png" alt="" class="comment_icon"> View ${replyCount} Reply</button>
        <div class="replies" id="replies">
        </div>
        `;
  commentContainner.innerHTML = comment;
  commentMainContainner.appendChild(commentContainner);
};

const commentForm = document.querySelector(".add_comment_form");
commentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  commentvalue = e.target[0].value;
  vidId = e.target[1].value;
  createMAinComment(commentvalue, "id");
  showRepliesInput();
  uploadComment(commentvalue,vidId);
});


//add like

const addLikes = (id) => {
  fetch("/addLike", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({id: id }),
  });
};




//upload comment

const uploadComment = (comment, id) => {
  fetch("/addComments", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ payload: comment, id: id }),
  });
};

//upload reply

const uploadReply = (comment, id) => {
  fetch("/addReplies", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ payload: comment, id: id }),
  });
};

// add replies

const createReply = function (reply, parentEl) {
  const commentContainner = document.createElement("div");
  commentContainner.className = "comment";

  const replyy = `
        <img src="/img/background-618226__340.webp" alt="" class="comment_thumbnail">
        <div class="comment_data">
            <p class="comment_user">maccc Bumblebee <span class="comment_date">1 year ago</span></span></p>
            <p class="comment_content">${reply}</p>
            <div class="comment_interact">
                <div class="comment_likes">
                    <img src="/img/thumbs-up-hand-symbol.png" alt="" class="icons">
                    <p>10</p>
                </div>
                <div class="comment_dislike">
                    <img src="/img/thumbs-down-silhouette.png" alt="" class="icons">
                </div>
                
            </div>
            <form action="" class="reply_form">
                <input type="text" class="reply_input">
                <input type="submit" value="Reply" class="reply_submit">
            </form>
            <!-- <button class="replies_btn"> <img src="/img/angle-arrow-down.png" alt="" class="comment_icon"> View Reply</button> -->
        </div>
        
    `;
  commentContainner.innerHTML = replyy;
  parentEl.appendChild(commentContainner);
};

const toReply = () => {
    rep = document.querySelectorAll(".reply_submit");

    rep.forEach(function (el) {
    el.addEventListener("click", function (e) {
        e.preventDefault();
        let form = el.parentElement;
        let inputValue = form[0].value;
        let id = form[1].value;
        const parent = el.parentElement.parentElement.lastElementChild
        createReply(inputValue, parent);
        

        uploadReply(inputValue, id);
        // createReply(inputValue, parent);
        // showRepliesInput();
        // showReplies();

    });
    });

}

// show playlist

const showPlaylist = () => {
  const modal = document.getElementById("modal");
  const popup = document.getElementById("playlist_pop");
  const showBtn = document.getElementById("save");
  const cancelBtn = document.getElementById("playlist_cancel");
  showBtn.addEventListener("click", () => {
    modal.style.display = "block";
    popup.style.display = "flex";
    popup.style.flexDirection = "column";
  });

  cancelBtn.addEventListener("click", () => {
    popup.style.display = "none";
    modal.style.display = "none";
  });
};

showPlaylist();

// fetch comments

const getComments = () => {
  fetch("/getComments")
    .then((response) => {
    //   console.log(comments.body);
      return response.body
    })
    .then(rb => {
        const reader = rb.getReader();
      
        return new ReadableStream({
          start(controller) {
            // The following function handles each data chunk
            function push() {
              // "done" is a Boolean and value a "Uint8Array"
              reader.read().then( ({done, value}) => {
                // If there is no more data to read
                if (done) {
                  controller.close();
                  return;
                }
                // Get the data and send it to the browser via the controller
                controller.enqueue(value);
                push();
              })
            }
      
            push();
          }
        });
      })
      .then(stream => {
        // Respond with our stream
        return new Response(stream, { headers: { "Content-Type": "text/html" } }).text();
      })
      .then(result => {
        // Do things with result
        comments = JSON.parse(result).coments;
        comments.forEach(comment => {
            createMAinComment(comment.commentData,comment._id, comment.replyCount,comment.likes);
        })
        showReplies();
        showRepliesInput();
        toReply()
      });
};

getComments();


const getReplies = (id,parent) => {
  fetch("/getReplies", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ replyId: id }),
  })
    .then((response) => {
    //   console.log(comments.body);
      return response.body
    })
    .then(rb => {
        const reader = rb.getReader();
      
        return new ReadableStream({
          start(controller) {
            // The following function handles each data chunk
            function push() {
              // "done" is a Boolean and value a "Uint8Array"
              reader.read().then( ({done, value}) => {
                // If there is no more data to read
                if (done) {
                  controller.close();
                  return;
                }
                // Get the data and send it to the browser via the controller
                controller.enqueue(value);
                push();
              })
            }
      
            push();
          }
        });
      })
      .then(stream => {
        // Respond with our stream
        return new Response(stream, { headers: { "Content-Type": "text/html" } }).text();
      })
      .then(received => {
        // Do things with result
        replyData = JSON.parse(received);
        allReplies = replyData.replies;
        allReplies.forEach((reply) => {
          data = reply.commentData
          createReply(data,parent);
        })
        
        // showRepliesInput();
        // showReplies();
        // toReply()
      });
};
