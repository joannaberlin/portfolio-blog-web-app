<script lang="ts" setup>
const { data: posts } = await useFetch<any>(
	'https://dev-joannadidthis.pantheonsite.io/wp-json/wp/v2/posts'
);
</script>
<template>
	<main>
		<PageHeader>
			<div class="container flex min-h-[200px]">
				<div class="w-[350px] relative h-[auto] mr-5 rounded overflow-hidden">
					<img
						src="/assets/images/jo-poster-frame.jpg"
						alt="Poster graphic of the blog's author."
						class="absolute object-cover shadow-md"
					/>
				</div>
				<div>
					<h1 class="text-4xl font-bold mb-2">About Joanna</h1>
					<p class="mb-3">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
						aspernatur tenetur cupiditate laboriosam. Tempore dolorum accusamus
						aperiam quaerat dicta, veniam officia quisquam omnis ab, doloribus
						necessitatibus quod eligendi ad eveniet.
					</p>
					<a
						class="btn bg-sky-500 text-sky-50 py-2 px-4 rounded inline-block hover:bg-sky-600 duration-200"
						href="*"
						>Let's connect!</a
					>
				</div>
			</div>
		</PageHeader>
		<section class="container py-16">
			<div class="grid sm:grid-cols-3 gap-5">
				<BlogCard
					v-for="post in posts"
					:key="post.id"
					:title="post.title.rendered"
					:excerpt="post.uagb_excerpt"
					image="https://i.postimg.cc/6pX41VW0/3.jpg"
					:slug="post.slug"
				/>
			</div>
		</section>
	</main>
</template>
