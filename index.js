module.exports = Phrase;

// Adds 'reverse' to all strings.
String.prototype.reverse = function() {
	return Array.from(this).reverse().join("");
}

// Adds 'blank' to all strings.
String.prototype.blank = function() {
	return !!this.match(/^\s+$/gm);
}

// Adds 'last' method to all Arrays.
Array.prototype.last = function() {
	return this[this.length-1];
}

// Defines a Phrase object.
function Phrase(content) {
	this.content = content;

	this.processor = function(string) {
		return string.toLowerCase();
	}

	// Returns content processed for palindrome testing.
	this.processedContent = function processedContent() {
		return this.letters().toLowerCase();
	}

	// Returns true if the phrase is a palindrome, false otherwise.
	this.palindrome = function palindrome() {
		return this.processedContent() === this.processedContent().reverse();
	}

	// Makes the phrase LOUDER
	this.louder = function louder() {
		return this.content.toUpperCase();
	}

	// Returns the letters in the content.
	this.letters = function letters() {
		return (this.content.match(/[a-z]/gi) || []).join("");
	}
}

// Defines a TranslatedPhrase object
function TranslatedPhrase(content, translation) {
	this.content = content;
	this.translation = translation;

	// Returns translation processed for palindrome testing.
	this.processedContent = function processedContent() {
		return this.processor(this.translation);
	}
}

TranslatedPhrase.prototype = new Phrase();