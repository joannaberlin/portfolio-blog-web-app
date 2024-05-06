// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			title: 'Joanna Did This',
			charset: 'utf-16',
			viewport: 'width=device-width, initial-scale=1',
		},
	},
	modules: ['@nuxtjs/tailwindcss'],
});
