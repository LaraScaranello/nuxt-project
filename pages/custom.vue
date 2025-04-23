<template>
	<div class="CustomPage">
		Custom Page
	</div>
</template>

<script setup>
	definePageMeta({
		layout: 'custom',
		// definindo o middleware que essa página vai usar
		middleware: 'auth',
	});
</script>