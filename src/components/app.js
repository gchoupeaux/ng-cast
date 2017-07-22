angular.module('video-player')
.component('app', {

  controller: function() { 
    this.videos = exampleVideoData;
    this.currentVideo = exampleVideoData[0];
    this.selectVideo = (video) => { 
      this.currentVideo = video;
    };
    this.searchResults = function() {
    };
    
  },

  


  // code that will render this component to the DOM
  templateUrl: 'src/templates/app.html'

});
