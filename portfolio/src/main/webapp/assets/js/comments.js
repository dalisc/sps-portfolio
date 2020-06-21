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

/** Creates some HTML that displays the comments 
    A comment in HTML will look like below:
    <div id="comment-wrapper">
        <div id="comment-header">
            <p id="username-display">daliscious123</p>
            <p id="timestamp-display">Wed 10/06/2020 00:11:54 BNT</p>
        </div>
        <p id="comments-display">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Dapibus ultrices in iaculis nunc sed augue lacus. Quam nulla
        porttitor massa id neque aliquam. Ultrices mi tempus imperdiet
        nulla malesuada. Eros in cursus turpis massa tincidunt dui ut
        ornare lectus.
        </p>
        <hr class="solid" />
    </div>
*/
function createCommentSection(comment) {
    const commentWrapper = document.createElement("div");
    commentWrapper.id = "comment-wrapper";
    commentWrapper.innerHTML =
        `<div id="comment-header">
            <p id="username-display">${comment.username}</p>
            <p id="timestamp-display">${comment.timestamp}</p>
        </div> 
        <p id="comments-display">${comment.comments}</p>
        <hr class="solid" />`;

    return commentWrapper;
}
