angular.module('video-player')
.component('app', {

  controller: function() { 
    this.videos = exampleVideoData;
    this.currentVideo = null;
    
    // video player should not render a videoplayer if no video is provided ?
    if (exampleVideoData[0]) {
      this.currentVideo = exampleVideoData[0];
    }
  

    this.selectVideo = function() { 
    
    };

    this.searchResults = function() {
    };
    
  },

  


  // code that will render this component to the DOM
  templateUrl: 'src/templates/app.html'

});
