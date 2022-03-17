<script>
export default {
	methods: {
		handleSubmit() {
			this.$emit('search-movie',this.inputedValue)
		},
		handleNavigate(btn) {
			this.$emit('navigate-page',btn)
		}
	},
	data() {
		return {
			inputedValue: this.$route.query.id || "",
			options:['Title','Year']
		}
	}
}
</script>

<template>
	<nav class="nav-bar">
		<button class="toggle-button" @click="$emit('show-sidebar')">|||</button>
		<form class="search-container" @submit.prevent="handleSubmit">
			<input class="searchbar" type="text" placeholder="Search" v-model="inputedValue">
			<select class="select-btn-searchbar" type="select">
				<option 
					v-for="opt of options" 
					:key="opt"
					:value="opt">{{opt}}</option>
			</select>
			<input class="submit-searchbar" type="submit">
			<img src="~/assets/search.png" alt="searcIcon"/>
		</form>
		<div class="button-container">
			<span id="button-previous" class="big">
				<button @click="handleNavigate('prev')"/>
				<img src="~/assets/arrow.png" alt="searcIcon"/>
			</span>
			<!-- <button>1</button>
			<button>2</button>
			<button>3</button> -->
			<span id="button-next" class="big">
				<button @click="handleNavigate('next')"/>
				<img src="~/assets/arrow.png" alt="searcIcon"/>
			</span>
		</div>
	</nav>
</template>

<style lang="scss" scoped>
	.nav-bar{
		display: flex;
		justify-content: space-between;
		padding: 0 16px;
		background-color: #b2c2bf;
		height: 2em;
		width: 100%;
		align-items: center;

		.search-container{
			width: 30vw;
			position: relative;
			display: flex;
			.select-btn-searchbar{
				padding-right: 10px;
				border-radius: 3px;
				border: 1px solid black;
				color: rgba(0, 0, 0, 0.5);
			}
			.searchbar{
				width: 100%;
				height: 22px;
				padding-left: 20px;
				border-radius: 3px;
				border: 1px solid black;
			}
			.submit-searchbar{
				display: none;
			}
			img{
				width: 15px;
				height: 15px;
				position: absolute;
				left: 5px;
				top: calc(50% - 8px);

				-webkit-user-select: none;
				-moz-user-select: none;
				-ms-user-select: none;
				user-select: none;
				pointer-events: none;
			}
		}
		.button-container{
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 10vw;
			button {
				height: 1rem;
				width: 1rem;
				
				margin: 0 1px;
				border-radius: 50%;
				border: none;
				font-weight: bold;
				color: rgba(46, 46, 46, 0.55);
			}
			.big {
				display: flex;
				justify-content: center;
			}
			.big > button{
				height: 1.5em;
				width: 1.5em;
				cursor: pointer;
			}
			.big > img{
				position: absolute;
				width: 15px;
				height: 15px;
				-webkit-user-select: none;
				-moz-user-select: none;
				-ms-user-select: none;
				user-select: none;
				pointer-events: none;
			}
			#button-next, #button-previous{
				position: relative;
			}
			#button-previous > img {
				left: calc(50% - 7.5px);
				top: calc(50% - 7.5px);
			}
			#button-next > img {
				right: calc(50% - 7.5px);
				top: calc(50% - 7.5px);
				transform: scaleX(-1)
			}
		}
		.toggle-button{
			display: none;
			height: 2rem;
			width: 1.5rem;
			font-size: 1em;
			transform: rotate(90deg);
			background-color: #98b6b0;
			border-radius: 3px;
			font-weight: bold;
			color: rgba(255, 255, 255, 0.575);
		}
	}
	@media (max-width: 768px) {
		.toggle-button {
			display: inline-block !important;
		}
		.nav-bar > .button-container {
		    width: 15vw;
		}
		.nav-bar > .search-container {
		    width: 50vw;
		}
  	}
</style>