// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Creates images for photography gallery
 */

document.addEventListener("DOMContentLoaded", function() {
    addFilmImages();
    getComments();
});

function zoomOut() {
    console.log("trigger");
}
function addFilmImages() {
    const fileNames = [
        "1-dalis.jpg",
        "1-dog1.jpg",
        "1-valley1.jpg",
        "1-dog2.jpg",
        "1-fog.jpg",
        "1-halo.jpg",
        "1-mountains.jpg",
        "1-houses2.jpg",
        "1-people.jpg",
        "1-silhouette.jpg",
        "1-sunrise.jpg",
        "2-bridge.jpg",
        "2-farm.jpg",
        "2-horse.jpg",
        "2-sky1.jpg",
        "2-forest.jpg",
        "2-silhouette2.jpg",
        "2-sky2.jpg",
        "2-sunrise2.jpg",
        "3-plane.jpg",
        "3-waterfall.jpg",
        "3-cliff.jpg",
        "3-mountain.jpg",
        "3-wave.jpg",
        "3-boats.jpg",
        "4-vivocity2.jpg",
        "4-vivocity3.jpg",
        "4-vivocity1.jpg",
        "4-jewel3.jpg",
        "4-lightleak.jpg",
        "4-jewel1.jpg",
        "4-jewel5.jpg",
        "4-jewel2.jpg",
        "4-jewel4.jpg",
        "4-mrt.jpg",
        "4-universitytown.jpg",
        "5-dexposed1.jpg",
        "5-dexposed10.jpg",
        "5-dexposed2.jpg",
        "5-dexposed3.jpg",
        "5-dexposed4.jpg",
        "5-dexposed5.jpg",
        "5-dexposed6.jpg",
        "5-dexposed8.jpg",
        "5-dexposed9.jpg",
    ];

    const imagesContainer = document.getElementById("image-gallery-container");

    fileNames.forEach((fileName) => {
        // Create a wrapper for zool colorize effect
        var wrapper = document.createElement("div");
        wrapper.className = "img-hover-zoom img-hover-zoom-gallery";
        // Create an image element
        var img = document.createElement("img");
        img.src = "images/photography/" + fileName;
        img.alt = fileName;
        img.class = "image-gallery-item";
        // Put the image in the wrapper
        wrapper.appendChild(img);
        // Append the image wrapper to the container.
        imagesContainer.appendChild(wrapper);
    });
}

function toggleImageGallery() {
    var gallery = document.getElementById("image-gallery-wrapper");
    var toggleButton = document.getElementById("view-gallery-button");
    if (gallery.style.display === "none") {
        gallery.style.display = "block";
        toggleButton.innerHTML = "close gallery";
    } else {
        gallery.style.display = "none";
        toggleButton.innerHTML = "view image gallery";
    }
}

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
