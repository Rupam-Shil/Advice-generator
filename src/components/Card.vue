<template>
	<div class="card">
		<div class="id">ADVICE #{{ data.id }}</div>
		<div class="advice">"{{ data.advice }}"</div>
		<img src="../assets/pattern-divider-desktop.svg" alt="" />
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
	height: max-content;
	background: var(--blue-2);
	border-radius: 1rem;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	padding: 1rem 1rem 4rem 1rem;
	gap: 2rem;
}
.id {
	color: var(--green);
	letter-spacing: 4px;
	font-size: 12px;
}
.advice {
	max-width: 70%;
	font-weight: 500;
	color: #fff;
	font-size: 1.8rem;
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
	transform: translate(-50%, 50%);
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
