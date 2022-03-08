<template>
	<div class="card">
		<button @click="onBtnClick">
			<img src="../assets/icon-dice.svg" alt="" />
		</button>
	</div>
</template>

<script setup>
import { toRefs } from 'vue';
const props = defineProps({
	data: {
		type: Object,
	},
});

const emit = defineEmits(['btnClicked']);
const { data } = toRefs(props);

const onBtnClick = () => {
	emit('btnClicked');
};
</script>

<style scoped>
.card {
	min-height: 50vh;
	min-width: 300px;
	width: 40%;
	background: var(--blue-2);
	border-radius: 1rem;
	position: relative;
}
button {
	outline: none;
	border: none;
	background: var(--green);
	padding: 1rem;
	display: grid;
	place-content: center;
	border-radius: 50%;
	cursor: pointer;
	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translateY(50%);
	transition: 0.3s;
}
button img {
	transition: 0.3s;
}
button:hover {
	filter: drop-shadow(0 0 20px var(--green));
}
button:hover img {
	transform: rotate(90deg);
}
</style>
