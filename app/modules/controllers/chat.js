(function() {

	'use strict';

	angular.module('app')
		.controller('chatCtrl', ChatCtrl);

	ChatCtrl.$inject = ['$scope'];

	function ChatCtrl( $scope ) {
		var vm = this;

		vm.chat = {
			friend: {
				status: 'online',
				name: 'Caterina Kohan',
				dp_url: 'http://cs625730.vk.me/v625730358/1126a/qEjM1AnybRA.jpg',
			},
			messages: [
				{
					msg: "Rob's home phone number is 833-1019.",
					is_friend: true,
					timstamp: '10:13 AM, Today',
				},
				{
					msg: "I wrote this person's phone number in my phone book.",
					is_friend: false,
					timstamp: '10:13 AM, Today'
				},
			
				{
					msg: "Rob's office phone number is 835-2351.",
					is_friend: true,
					timstamp: '10:13 AM, Today',
				},
				{
					msg: "Hal: I wrote this person's phone number in my phone book.",
					is_friend: false,
					timstamp: '10:13 AM, Today'
				},
			
				{
					msg: "Open winzip.",
					is_friend: true,
					timstamp: '10:13 AM, Today',
				},
				{
					msg: "I'll now run the program Winzip. I can offer you help with this program. If you have questions ask me. If you have no questions and would like to talk to me, please say no. (Hal actually opens the program Winzip)",
					is_friend: false,
					timstamp: '10:13 AM, Today'
				},
			
				{
					msg: "What's the weather like?",
					is_friend: true,
					timstamp: '10:13 AM, Today',
				},
				{
					msg: "I will now open your favorite weather web site. (Hal actually opens a browser window and downloads your local weather forecast)",
					is_friend: false,
					timstamp: '10:13 AM, Today'
				}
			]
		}
	}
})();
