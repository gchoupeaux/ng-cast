angular.module('video-player')
.component('app', {

  controller: function(youTube) { 
    this.videos = exampleVideoData;
    this.currentVideo = exampleVideoData[0];
    this.selectVideo = (video) => { 
      this.currentVideo = video;
    };
    this.searchResults = (searchstring) => {
      //console.log('before search: ', searchstring);
      youTube.search((response) => { 
        this.videos = response.data.items; 
        this.currentVideo = response.data.items[0];
      }, searchstring);
      //console.log('succes :', this.videos);// calling the service
      
    };
    
  },


  // code that will render this component to the DOM
  templateUrl: 'src/templates/app.html'

});
