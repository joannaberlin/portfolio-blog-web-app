<script lang="ts" setup>
const route = useRoute();
const { data: categories } = await useWpApi().get<any>(
	`categories?slug=${route.params.slug}`
);
const { data: posts } = await useWpApi().getPosts<any>(categories.value[0].id);
</script>

<template>
	<PageHeader :title="`Archive: ${categories[0].name}`" />
	<section class="container py-12">
		<div class="grid sm:grid-cols-3">
			<BlogCard
				v-for="post in posts"
				:key="post.id"
				:title="post.title.rendered"
				:excerpt="post.uagb_excerpt"
				:image="post._embedded['wp:featuredmedia'][0]?.source_url"
				:slug="post.slug"
			/>
		</div>
	</section>
</template>
