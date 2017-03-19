function getUrl($scope){
	var picUrl = "http://www.joomlaworks.net/images/demos/galleries/abstract/7.jpg";
	$scope.picUrl = picUrl;
}
picModule.controller('bindImageCtrl', getUrl);