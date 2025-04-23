export default defineNuxtRouteMiddleware((to, from) => {
	console.log('Auth middleware triggered');
	
	// const isLoggedIn = false;

	// if (isLoggedIn) {
	// 	return navigateTo(to.fullPath);
	// }
	
	// return navigateTo('/login');
});