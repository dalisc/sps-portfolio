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
      ['https://i.chzbgr.com/full/9340630528/hFC589711/spotify-playlist-songs-about-git',
      'https://www.probytes.net/wp-content/uploads/2018/01/3.jpg!',
      'https://scontent-xsp1-1.xx.fbcdn.net/v/t1.15752-9/59408853_2016918848436701_5907180139245993984_n.png?_nc_cat=110&_nc_sid=b96e70&_nc_ohc=faMQj0KFoPwAX8eRmA1&_nc_ht=scontent-xsp1-1.xx&oh=cf34b166e78195d2efd71eb1446126d6&oe=5EFEE7F2',
      'https://qph.fs.quoracdn.net/main-qimg-50da7dacced9bcc11c246394388fc911.webp',
      'https://miro.medium.com/max/3200/0*FL03kQRXT_TFerSD',
      'https://cdn-images-1.medium.com/max/1600/1*OVo5mxqgkAs8x8rZloCD8A.png'];

  // Pick a random url.
  const imgSource = imgSources[Math.floor(Math.random() * imgSources.length)];

  // Create an image element
  var img = document.createElement('img');
  img.src = imgSource;
  img.alt = "meme";
  img.width = "300";

  // Remove the current image, if any
  const memeContainer = document.getElementById('meme-container');
  if (memeContainer.firstChild) {
      memeContainer.removeChild(memeContainer.firstChild);
  }

  // Add it to the page.
  memeContainer.appendChild(img);
}

