//
//
// app.controller('AllPostsCtrl',['$scope', '$location', 'Post', function ($scope, $location, Post) {
//   if ($location.path() === '/') {
//     $scope.posts = Post.all;
//   }
//   $scope.post = {url: 'http://'};
//
//   $scope.deletePost = function (postId){
//     Post.delete(postId);
//   };
//
// }]);

(function () {
    app.controller('ItemsListController', ['$scope', 'ItemsFactory',
      function ($scope, ItemsFactory) {



        $scope.addItem = function (item) {
          ItemsFactory.addItem(item); // Add item
          $('#addForm')[0].reset(); // Reset my Form
        };

        $scope.deleteItem = function (item) {
          ItemsFactory.deleteItem(item);
        };

    }]);

}());
