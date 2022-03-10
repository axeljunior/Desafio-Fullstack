<script>
export default {
  name: "form",
  methods: {
	async handleSubmit() {
		const newMovie = {
			"tconst": "51",
			"titleType": "movie",
			"primaryTitle": `${this.PrimaryTitle}`,
			"originalTitle": `${this.originalTitle}`,
			"isAdult": `${this.isAdult ? '0' : '1'}`,
			"startYear": `${this.releaseYear.toString()}`,
			"endYear": "\\N",
			"runtimeMinutes": "\\N",
			"genres": "Short",
			"rating": {
				"tconst": "tt0000048",
				"averageRating": "4.9",
				"numVotes": "175"
			}
		}
		await this.$api.$post('/create',{body: newMovie})
		this.$emit('close-form-modal')
	}
  },
  data() {
	return {
	  loading: false,
	  PrimaryTitle: '',
	  originalTitle: '',
	  runningTime: '',
	  releaseYear: '',
	  isAdult: '',
	  options:['Yes','No']
	}
  }
}
</script>

<template>
  <div class="modal-overlay"
  	@click="$emit('close-form-modal')">
	<section class="modal" @click.stop> 
	  <form class="form-container" @submit.prevent="handleSubmit">
		  <div class="form-title-container">
			<h1>Add new movie</h1>
		  </div >
			<div class="inputs-form-group">
			  <label class="control-label">Primary title</label>  
			  <div class="input-container">
				  <div class="input-group">
					<input class="form-text-input" type="text" v-model="PrimaryTitle">
				  </div>
			  </div>
			</div>

			<div class="inputs-form-group">
			  <label class="control-label">Original title</label>  
			  <div class="input-container">
				  <div class="input-group">
					<input class="form-text-input" type="text" v-model="originalTitle">
				  </div>
			  </div>
			</div>

			<div class="inputs-form-group">
			  <label class="control-label">Running time</label>  
			  <div class="input-container">
				  <div class="input-group">
					<input class="form-text-input" type="text" v-model="runningTime">
				  </div>
			  </div>
			</div>

			<div class="inputs-form-group">
			  <label class="control-label">Release year</label>  
			  <div class="input-container">
				  <div class="input-group">
					<input class="form-text-input" type="text" v-model="releaseYear">
				  </div>
			  </div>
			</div>

			<div class="inputs-form-group">
			  <label class="control-label">Adult movie?</label>  
			  <div class="input-container">
				  <div class="input-group">
					<select name="isAdult" class="form-control" v-model="isAdult">
						<option value="" >Please select a option</option>
						<option 
							v-for="opt of options" 
							:key="opt"
							:value="opt">{{opt}}</option>
					</select>
				  </div>
			  </div>
			</div>

		  <div class="form-button-container">
			  <button class="form-button" type="submit">Send</button>
		  </div>
	  </form>
	</section>
  </div>
</template>

<style lang="scss" scoped>
  .modal-overlay {
	z-index: 1;
	position: fixed;
	top: -50px;
	bottom: 0;
	left: 0;
	right: 0;
	display: flex;
	justify-content: center;
	background-color: #000000da;
  }
  .modal {
	margin: 5% 0;
	padding: 60px 0;
	border-radius: 20px;

	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	.form-container {
		display: flex;
		flex-direction: column;
		justify-content: center;

		width: 335px;
		height: 550px;
		padding: 20px 10px;
		
		border: 2px solid #b73765;
		border-radius: 10px;
	
		background-color: #b2c2bf;
		.form-title-container{
		  display: flex;
		  justify-content: center;
		  margin-bottom: 20px;
		}
		.form-button-container {
			display: flex;
			justify-content: center;
			align-items: flex-end;

			height: 50%;
			margin-bottom: 10px;

			.form-button {
				width: 150px;
				height: 40px;
				border-radius: 16px;
				
				font-size: 0.87em;
				font-weight: bold;
				color: white;
				
				background-color: #b73765;
				border-color: #d7497c;
			}
		}
	  }
  }

  .inputs-form-group{
	display: flex;
	align-items: center;
	justify-content: flex-end;

	margin-bottom: 10px;
	label {
	  font-weight: bold;
	  font-size: 1em;
	}
	.input-container {
	  margin-left: 3px;
	  input {
		  padding-left: 3px;
		  height: 2em;
		  border: 1px solid rgba(68, 68, 68, 0.596);
		  border-radius: 5px;
	  }
	  input::placeholder {
		  color: rgba(68, 68, 68, 0.45);
	  }
	}
  }

	.radio-form-group{
		display: flex;
		align-items: center;
		justify-content: flex-end;

		margin-bottom: 10px;
		label {
			font-weight: bold;
			font-size: 1em;
		}
		.select-container {
			margin-left: 3px;
			select {
				padding-left: 3px;
				height: 2em;
				border: 1px solid rgba(68, 68, 68, 0.596);
				border-radius: 5px;
			}
		}
	}
</style>