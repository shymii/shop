<template>
	<div id="app">
		<h1>Hola amigos</h1>
		<app-header />
		<router-view />
		<app-footer />
	</div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
	components: {
		'app-header': Header,
		'app-footer': Footer
	}
}
</script>

<style>

</style>
