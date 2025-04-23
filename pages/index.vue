<script setup>
	const response = await $fetch('/api/hello');

	console.log(response);
</script>

<template>
  <div>hello</div>
</template>