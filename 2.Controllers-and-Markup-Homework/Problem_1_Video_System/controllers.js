
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
		$scope.vSystemData.push(this.video);
	
		document.getElementsByName('add_new')[0].reset();  // Reset
	};

};
vSystemModule.controller('vSystemCtrl', vObjects );
