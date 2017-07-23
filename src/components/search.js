angular.module('video-player')

.component('search', {

  bindings: {
    result: '<'
  },

  controller: function() { 
    this.keyPress = ( event, searchstring ) => { 
      if (event.key === 'Enter') {
        this.result(searchstring);
      }
    };
    
  },

  templateUrl: 'src/templates/search.html'
});
