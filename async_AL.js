var slideshow = {
  photolist: ['0', '1', '2', '3', '4'],
  currentPhotoIndex: 0,
};
var playInterval = {};
function playslide(){
  if (slideshow.currentPhotoIndex < slideshow.photolist.length) {
    console.log(slideshow.photolist[slideshow.currentPhotoIndex]);
    slideshow.currentPhotoIndex += 1;
}else {
  return pause;
};
};
function play(){
playInterval = setInterval(playslide ,2000);
};
function pause(){
  clearInterval(playInterval)
};
play()
