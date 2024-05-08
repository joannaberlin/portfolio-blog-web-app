<script lang="ts" setup>
const route = useRoute();
</script>

<template>
	<h1>Example of dynamic route: {{ route.params.slug }}</h1>
</template>
