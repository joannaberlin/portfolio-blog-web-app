<script lang="ts" setup>
const { params } = useRoute();

const { data: posts } = await useWpApi().getPost<any>(params.slug as string);
const post = posts.value[0];
</script>
<template>
	<main>
		<section class="header container py-12 sm:py-24">
			<div class="post-title text-center mb-5">
				<h1 class="text-3xl sm:text-5xl font-bold">
					{{ post.title.rendered }}
				</h1>
			</div>
			<div class="post-meta text-center mb-8">
				<span class="mr-5"
					>Written by {{ post._embedded['author'][0].name }}
				</span>
				<span>Published on by {{ post.date }}</span>
			</div>
			<div
				class="w-full h-[250px] sm:h-[450px] relative shadow-xl rounded overflow-hidden mb-10"
			>
				<img
					:src="post._embedded['wp:featuredmedia'][0]?.source_url"
					alt="Blog Thumb"
					class="absolute w-full h-full object-cover"
				/>
			</div>
			<div class="post-content">
				<div v-html="post.content.rendered"></div>
			</div>
		</section>
	</main>
</template>
