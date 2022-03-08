<template>
	<LoadingModal v-if="showLoadingModules" />
	<section class="main">
		<Card @btnClicked="onBtnClicked" :data="quote" />
	</section>
</template>

<script setup>
import Card from './components/Card.vue';
import LoadingModal from './components/LoadingModal.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';
const store = useStore();

const quote = computed(() => store.state.quote);
const showLoadingModules = computed(() => store.state.showLoadingModules);

store.dispatch('getQuote');

const onBtnClicked = () => {
	store.dispatch('getQuote');
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900&display=swap');
*,
*::before,
*::after {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	font-family: 'Poppins', sans-serif;
}

:root {
	--cyan: hsl(193, 38%, 86%);
	--green: hsl(150, 100%, 66%);
	--blue-1: hsl(217, 19%, 38%);
	--blue-2: hsl(217, 19%, 24%);
	--blue-3: hsl(218, 23%, 16%);
	--font-size: 28px;
}

.main {
	width: 100vw;
	height: 100vh;
	background: var(--blue-3);
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
