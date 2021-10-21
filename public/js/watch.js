//show replies

const showReplies = () => {
    const show_replies_btn = document.querySelectorAll('.replies_btn');
    
    show_replies_btn.forEach(el => {
        const replies = el.parentElement.lastElementChild;
        el.addEventListener('click', () => {
            if(replies.classList[1] != 'show'){
                replies.classList.add('show');
                el.innerHTML = `<img src="/img/angle-arrow-pointing-to-right.png" alt="" class="comment_icon"> Hide ${2} Reply`
                
            }
            else {
                replies.classList.value = "replies"
                el.innerHTML = `<img src="/img/angle-arrow-down.png" alt="" class="comment_icon"> View ${2} Reply`

            }
            
        })
    })

}

showReplies();


// side menu click


// comment loading

//Show reply input
showRepliesInput = () => {
    replyBtns = document.querySelectorAll('.comment_interact button');

    replyBtns.forEach(el => {
        el.addEventListener('click', () => {
           let form = el.parentElement.nextElementSibling;
           if(form.classList[1] != 'show_reply'){
                form.classList.add('show_reply');
           }
           else {
               form.classList.value = 'reply_form';
           }
        })
    })
}

showRepliesInput();

//add comments

// add main comment

const createMAinComment = function(comment,appendTo){
    const commentMainContainner = document.querySelector('.comments')

    //create containner
    const commentContainner = document.createElement('div');
    commentContainner.className = 'comment';
    

    // create thumbanil
    const commenterThumbnail = document.createElement('img');
    commenterThumbnail.className = 'comment_thumbnail';
    commenterThumbnail.setAttribute('src','/img/background-618226__340.webp'); 

    // create comment data
    const commentDetails = document.createElement('div');
    commentDetails.className = 'comment_data';
    
    // create actual comment
    const userName = document.createElement('p');
    userName.className = 'comment_user';
    userNameText = document.createTextNode('mac Bumblebee');
    userName.appendChild(userNameText);
    const date = document.createElement('span');
    date.className = 'comment_date';
    dateText = document.createTextNode('1 year ago')
    date.appendChild(dateText);
    
    userName.appendChild(date);

    const actualComment = document.createElement('p');
    actualComment.className = 'comment_content';
    actualCommentText = document.createTextNode(comment);

    actualComment.appendChild(actualCommentText);

    // create comment interraction
    const commentInterraction = document.createElement('div');
    commentInterraction.className = 'comment_interact';

    const commentLikes = document.createElement('div');
    commentLikes.className = 'comment_likes';
    commentLikesImage = document.createElement('img');
    commentLikesImage.className = 'icons';
    commentLikesImage.setAttribute('src','/img/thumbs-up-hand-symbol.png'); 
    commentLikesP = document.createElement('p');
    commentLikesPText = document.createTextNode('10');
    commentLikesP.appendChild(commentLikesPText);
    

    commentLikes.appendChild(commentLikesImage);
    commentLikes.appendChild(commentLikesP);

    const commentDissLikes = document.createElement('div');
    commentDissLikes.className = 'comment_dislike';
    commentDissLikesImage = document.createElement('img');
    commentDissLikesImage.className = 'icons';
    commentDissLikesImage.setAttribute('src','/img/thumbs-down-silhouette.png'); 


    commentDissLikes.appendChild(commentDissLikesImage);


    const btnReply = document.createElement('button');
    btnReplyText = document.createTextNode('REPLY')
    btnReply.appendChild(btnReplyText);

    // reply form

    const replyForm = document.createElement('form');
    replyForm.className = 'reply_form';

    replyFormTextInput = document.createElement('input');
    replyFormTextInput.setAttribute('type','text');
    replyFormTextInput.className = 'reply_input';
    replyForm.appendChild(replyFormTextInput);

    replyFormSubmitInput = document.createElement('input');
    replyFormSubmitInput.setAttribute('type','submit');
    replyFormSubmitInput.setAttribute('value','Reply');
    replyFormSubmitInput.className = 'reply_submit';
    replyForm.appendChild(replyFormSubmitInput);

    // const pLikes = document.createElement('p');
    // pLikes.className = 'likes';
    // pLikesText = document.createTextNode('3 likes')
    // pLikes.appendChild(pLikesText);
    
    
    // // Create showReplies button
    // const showReply = document.createElement('button');
    // showReply.className = 'show_replies';
    // showReply.id = 'show_replies';
    // showReplyText = document.createTextNode('View Replies');
    // showReply.appendChild(showReplyText);


    // APPEND ALL

    // commentContainner.appendChild(mainComment);

    commentContainner.appendChild(commenterThumbnail);
    commentContainner.appendChild(commentDetails);

    commentDetails.appendChild(userName);
    commentDetails.appendChild(actualComment);
    commentDetails.appendChild(commentInterraction);
    commentDetails.appendChild(replyForm);

    commentInterraction.appendChild(commentLikes);
    commentInterraction.appendChild(commentDissLikes);
    commentInterraction.appendChild(btnReply);

    if(!arguments[1]){
        commentMainContainner.appendChild(commentContainner);
    }
    else {
        appendTo.appendChild(commentContainner);
    }

}

const commentForm = document.querySelector('.add_comment_form')
commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.dir(e.target)
    comment = e.target[0].value;
    createMAinComment(comment);
    showRepliesInput();
});


// add replies

const createReply = function(reply, parentEl) {

    // create reply btn
    const showReplyBtn = document.createElement('button');
    showReplyBtn.className = 'replies_btn';
    showReplyBtn.id= 'replies_btn';
    
    const showReplyBtnImg = document.createElement('img');
    showReplyBtnImg.className = 'comment_icon';
    showReplyBtnImg.setAttribute('src','/img/angle-arrow-down.png');
    const showReplyBtnImgText = document.createTextNode('View 2 Reply');
    showReplyBtnImg.appendChild(showReplyBtnImgText);

    showReplyBtn.appendChild(showReplyBtnImg);

    //create replies containner

    const ReplyContainner = document.createElement('div');
    ReplyContainner.className = 'replies';
    ReplyContainner.id= 'replies';

    parentEl.appendChild(ReplyContainner);

    createMAinComment(reply, parentEl);
}


const rep = document.querySelectorAll('.reply_submit')

rep.forEach(function(el) {
    el.addEventListener('click', function(e) {
        e.preventDefault();
        let form = el.parentElement;
        let inputValue = form[0].value;
        const parent = el.parentElement.parentElement;
        createReply(inputValue, parent);
        showRepliesInput();
    })
})

// show playlist

const showPlaylist = () => {
    const modal = document.getElementById('modal');
    const popup = document.getElementById('playlist_pop');
    const showBtn = document.getElementById('save');
    const cancelBtn = document.getElementById('playlist_cancel');
    showBtn.addEventListener('click', () => {
        modal.style.display = 'block';
        popup.style.display = 'flex';
        popup.style.flexDirection = 'column';
    });

    cancelBtn.addEventListener('click', () => {
        popup.style.display = 'none';
        modal.style.display = 'none';
        
    })
}

showPlaylist();








