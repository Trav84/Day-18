var AppView = Backbone.View.extend({

	el: '#app-view',
	initialize: function() {

		_.bindAll(
			this,
			'onMouseClick',
			'onPlayAgainClick'
		);

		this.$textBox = $('#text-box');
		this.$clickButton = $('#start-button');
		this.$playAgainButton = $('#play-again');
		this.$gameFeedback = $('#win-lose-box');
		this.$scoreBox = $('#score-box');
		this.generatedNumber = this.generateNum();

		this.$clickButton.on('click', this.onMouseClick);
		this.$playAgainButton.on('click', this.onPlayAgainClick);
	},

	generateNum: function () {
		return Math.ceil(Math.random() * 100);
	},

	numberGame: function(value) {
		console.log(this.generatedNumber);
		var win = false;
		var score = 0;

			if (isNaN(value)) {
				throw "You did not enter a number";
			}	

			if (value == this.generatedNumber) {
				this.$gameFeedback.html('YOU WIN! YAAAAY!');
				score++;
				this.$scoreBox.html(parseInt(this.$scoreBox.html(), 10)+1);
			}

			else if (value > this.generatedNumber) {
				this.$gameFeedback.html('Too high, guess again');
				this.$textBox.val('');
			}

			else {
				this.$gameFeedback.html('Too low, guess again');
				this.$textBox.val('');
			}
		return score;
	},

	onMouseClick: function() {
		this.numberGame(this.$textBox.val());
	},

	onPlayAgainClick: function() {
		this.generatedNumber = this.generateNum();
	}
});