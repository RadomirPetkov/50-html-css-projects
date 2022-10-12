const picElement = document.getElementById("pic");

const headerEl = document.getElementById("header");

let isLiked = false;

picElement.addEventListener("dblclick", () => {
  if (!isLiked) {
    picElement.innerHTML = '<i class="heart red fas fa-heart"></i>;';

    headerEl.innerHTML +=
      '<p>You have liked the photo</p> <button class="btn" id="dislike-btn">Dislike</button>';

    //Add liked paragraph and dislike button
    const dislikeBtn = document.getElementById("dislike-btn");

    //Handle Dislike button
    dislikeBtn.addEventListener("click", () => {
      isLiked = false;
      picElement.innerHTML =
        '<i class="heart heart-crack fas fa-heart-crack"></i>;';
      headerEl.innerHTML =
        '<h3>Double click the image to <i class="red fas fa-heart"></i> it</h3>';

      //Clear DOM elements
      setTimeout(() => {
        picElement.innerHTML = "";
      }, 300);
    });

    //Clear DOM elements
    setTimeout(() => {
      picElement.innerHTML = "";
    }, 300);
    isLiked = true;
  }
});
