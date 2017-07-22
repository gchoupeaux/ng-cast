angular.module('video-player')

.component('videoPlayer', {

  bindings: {
    video: '<' 
  },

  controller: function() { 
    console.log('clicked: ');
  },

  

  templateUrl: 'src/templates/videoPlayer.html'
});
