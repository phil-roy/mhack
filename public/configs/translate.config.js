(function(angular) {
	angular
		.module('collaboratio.app')
		.config([
			'$translateProvider',
			function($translateProvider) {
				var locale = navigator.languages ? navigator.languages[0] : navigator.language;

				$translateProvider.translations('en', {
					close : 'Close',
					menu : 'Menu',
					'menu.eventReporter' : 'Report an event',
					'menu.eventManager' : 'Resolve an event',
					'menu.groupManager' : 'Manage groups',
					title: 'Hello'
				});
				$translateProvider.translations('fr', {
					close : 'Fermer',
					menu : 'Menu',
					'menu.eventReporter' : 'Rapporter un événement',
					'menu.eventManager' : 'Résoudre un événement',
					'menu.groupManager' : 'Gérer les groupes',
					title: 'Allo'
				});

				$translateProvider.preferredLanguage(locale);
			}
		]);
})(angular);
