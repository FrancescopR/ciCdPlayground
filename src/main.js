import App from './App.svelte';

new App({
	target: document.body,
	props: {
		// What's your name?
		name: 'Francesco Rizzuto',
		// In the following fiels you can either give a single string, 
		// or an array of bullet points
		
		// What do you associate with the term 'CI/CD'?
		associations: [
			'Continous Integration, continous deployment'
		],
		// Which CI/CD tools do you use in your project?
		tools: 'Jenkins, github actions',
		// What do you want to learn in this workshop? 
		expectations: [
			'Have a better understanding of Jenkins'
		],
		// What do you like to do when you're not coding?
		hobbies: [
			'play chess', 
			'bouldering',
			'Haiking', 
		]
	}
});
