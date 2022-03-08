<template>
	<div class="loading-con">
		<div class="main-con">
			<img src="../assets/icon-dice.svg" alt="" />
		</div>
	</div>
</template>

<script setup></script>

<style scoped>
.loading-con {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background: rgba(0, 0, 0, 0.5);
	backdrop-filter: blur(5px);
	z-index: 99999;
	display: flex;
	justify-content: center;
	align-items: center;
}
.main-con {
	width: 7rem;
	height: 7rem;
	background: var(--green);
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	animation: rotate 1s ease-in-out forwards infinite;
}
@keyframes rotate {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}

img {
	width: 50%;
	height: auto;
}
</style>
