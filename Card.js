
MemoryGame.Card = function(value) {
  this.value = value;
  this.isRevealed = false;

  this.reveal = function() {
    this.isRevealed = true;
  }

  this.conceal = function() {
    this.isRevealed = false;
  }
};