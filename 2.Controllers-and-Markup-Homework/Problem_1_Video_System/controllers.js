
function vObjects($scope, vDataService){

	$scope.vSystemData = vDataService.getData();
	$scope.addNewV = function(video){
		video.length = '';
		video.subscribers = '';
		video.date = new Date();
		video.haveSubtitles = false;
		video.comments = [
									{
										username: '',
										content: '',
										date: new Date().toDateString(),
										likes: 0,
										websiteUrl: ''
									}, 
									{
										username: '',
										content: '',
										date: new Date().toDateString(),
										likes: 0,
										websiteUrl: ''
									},
									{
										username: '',
										content: '',
										date: new Date().toDateString(),
										likes: 0,
										websiteUrl: ''
									}
						];
		$scope.vSystemData.push(video);
		// var frm = document.getElementsByName('add_new')[0];
		// frm.;  // Reset
  //  		return false; // Prevent page refresh
	};

};
vSystemModule.controller('vSystemCtrl', vObjects );
