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
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['Hello world!', '¡Hola Mundo!', '你好，世界！', 'Bonjour le monde!'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

/**
 * Adds a random greeting to the page.
 */
function addRandomMeme() {
  const imgSources =
      ['images/meme1.jpg',
      'images/meme2.jpg',
      'images/meme3.jpg',
      'images/meme4.jpg',
      'images/meme5.jpg',
      'images/meme6.jpg'];

  // Pick a random url.
  const imgSource = imgSources[Math.floor(Math.random() * imgSources.length)];

  // Create an image element
  var img = document.createElement('img');
  img.src = imgSource;
  img.alt = "meme";
  img.width = "600";

  // Remove the current image, if any
  const memeContainer = document.getElementById('meme-container');
  if (memeContainer.firstChild) {
      memeContainer.removeChild(memeContainer.firstChild);
  }

  // Add it to the page.
  memeContainer.appendChild(img);
}

