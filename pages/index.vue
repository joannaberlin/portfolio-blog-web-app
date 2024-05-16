<script lang="ts" setup></script>
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
				<div v-for="i in 9" :key="i" class="col-span-1 shadow-lg">
					<!-- Blog Image -->
					<div class="w-full h-[180px] relative">
						<img
							src="/assets/images/jo-poster-frame.jpg"
							alt="Blog Thumbnail"
							class="w-full h-full absolute object-cover"
						/>
					</div>
					<!-- Blog Content -->
					<div class="p-5">
						<h3 class="text-xl font-semibold mb-3">Blog Title</h3>
						<p class="text-sm mb-3">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
						</p>
						<NuxtLink :to="`/${i}`">Read More</NuxtLink>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>
