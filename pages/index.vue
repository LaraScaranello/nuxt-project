<script setup>
	import { useCounterStore } from '@/stores/myStore';
	const store = useCounterStore();

	console.log('store', store);
</script>

<template>
  <div>hello</div>
</template>