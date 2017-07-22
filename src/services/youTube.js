angular.module('video-player')
.service('youTube', function($http) {
  
  this.search = function (callbackFun, query) { 
    //console.log('in search: ', query);
    // Simple GET request example:
    $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        key: YOUTUBE_API_KEY,
        part: 'snippet',
        q: query,
        maxResults: '5',
        videoEmbeddable: 'true',
        type: 'video',
        datatype: 'json',
      }
    }).then(function successCallback(response) {
      callbackFun(response);
      //console.log('success: ', response);
        // this callback will be called asynchronously
        // when the response is available
    }, function errorCallback(response) {
      //console.log('error: ', response);
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });
        
  };
});



// var searchYouTube = (options, callback) => {
//   // return exampleVideoData;
//   // callback must be the event handler
//   $.ajax({
//     url: 'https://www.googleapis.com/youtube/v3/search',
//     type: 'GET',
//     data: {
//       key: options.key,
//       part: 'snippet',
//       q: options.query,
//       maxResults: options.max,
//       videoEmbeddable: 'true',
//       type: 'video'
//     },
//     datatype: 'json',
    
//     success: (data) => {
//       // console.log(data);
//       callback(data.items);
//     },
//     error: (error) => {
//       console.error(error.responseText);
//     }
//   });
// };



//angular.element(document).injector().get('service.youTube');

// var $inj = angular.injector(['video-player']);
// var serv = $inj.get('youTube');
// serv.search();

//var t = angular.element(document.querySelector('body')).injector().get('youTube');
//t.myServiceMethod().then(function(response) { console.log(response); });


// The $http provider should receive a params object with the following properties:
// query - the string to search for
// maxResults - the maximum number of videos to get, which should default to 5
// key - an authorized YouTube Browser API key
// Only fetch embeddable videos
