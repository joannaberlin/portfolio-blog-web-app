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
				class="w-full h-[250px] sm:h-[400px] relative shadow-xl rounded overflow-hidden mb-10"
			>
				<img
					src="/assets/images/jo-poster-frame.jpg"
					alt="Blog Thumb"
					class="absolute w-full h-full object-cover"
				/>
			</div>
			<div class="post-content">
				<p class="mb-10">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
					fuga modi porro dicta sint qui omnis ratione unde minima laboriosam
					amet magni? Nam, ut nulla? Explicabo, fuga modi porro dicta sint qui
					omnis ratione unde minima laboriosam amet magni? Nam, ut nulla?
				</p>
				<p class="mb-10">
					Voluptatibus ab officiis amet error. Aliquid tenetur culpa harum
					voluptatibus veniam vel qui nobis eaque. Velit maiores facere
					aspernatur recusandae voluptates placeat reiciendis quidem possimus?
				</p>
				<p class="mb-10">
					Commodi voluptates eius rerum cumque voluptas quia iusto veniam
					veritatis aspernatur voluptate sapiente beatae debitis itaque ratione,
					odit ex dolore impedit corporis eveniet id nemo. Commodi voluptates
					eius rerum cumque voluptas quia iusto veniam veritatis aspernatur
					voluptate sapiente beatae debitis itaque ratione, odit ex dolore
					impedit corporis eveniet id nemo.
				</p>
				<p class="mb-10">
					Neque reiciendis veniam natus. Illum corporis aut iusto, omnis amet
					impedit quo corrupti, id quidem labore, dolor eligendi. Recusandae et
					provident autem hic nihil totam?
				</p>
				<p class="mb-10">
					Excepturi magnam ea velit maiores vero nobis ullam, magni animi
					veritatis eum voluptates officiis illo ipsa ex, enim consequatur eaque
					illum? Aperiam nostrum unde voluptatum?
				</p>
			</div>
		</section>
	</main>
</template>
