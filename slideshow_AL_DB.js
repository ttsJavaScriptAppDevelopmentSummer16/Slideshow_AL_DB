var slideshow = {
  photolist: ['0', '1', '2', '3', '4'],
  currentPhotoIndex: 0,
  nextPhoto: function(){
    if (this.currentPhotoIndex < this.photolist.length) {
    this.currentPhotoIndex += 1;
    return this.photolist[this.currentPhotoIndex];
  }else {
    return 'End of Slideshow');
    }
  },
  prevPhoto: function(){
    if (this.currentPhotoIndex > 0) {
      this.currentPhotoIndex -= 1;
      return this.photolist[this.currentPhotoIndex];
    }else {
      return 'End of Slideshow';
    }
  },
  getCurrentPhoto: function(){
    return this.photolist[this.currentPhotoIndex];
  }
};


slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.prevPhoto();
slideshow.prevPhoto();
slideshow.prevPhoto();
slideshow.getCurrentPhoto();
