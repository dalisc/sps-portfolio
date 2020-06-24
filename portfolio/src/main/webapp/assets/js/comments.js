function getComments() {
    fetch("/comments")
        .then((response) => response.json())
        .then((comments) => {
            const commentsContainer = document.getElementById("comments-container");
            comments.map((comment) =>
                commentsContainer.appendChild(createCommentSection(comment))
            );
        });
}

function createCommentSection(comment) {
    const commentWrapper = document.createElement("div");
    commentWrapper.id = "comment-wrapper";
    commentWrapper.innerHTML =
        `<div id="comment-header">
            <p id="username-display">${comment.username}</p>
            <p id="timestamp-display">${comment.timestamp}</p>
        </div> 
        <p style="white-space: pre-line;" id="comments-display">${comment.comments}</p>
        <hr class="solid" />`;

    return commentWrapper;
}
