/** С L A S S  С O M P O N E N T
 * For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.

  The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.

  The following are some examples of how this class is used:
 */

class PaginationHelper {
	constructor(collection, itemsPerPage) {
		// The constructor takes in an array of items and a integer indicating how many
		// items fit within a single page
		this._collection = collection;
		this._itemsPerPage = itemsPerPage;
	}

	itemCount() {
		// returns the number of items within the entire collection
		return this._collection ? this._collection.length : 0;
	}

	pageCount() {
		// returns the number of pages
		return Math.ceil(this.itemCount() / this._itemsPerPage);
	}

	pageItemCount(pageIndex) {
		// returns the number of items on the current page. page_index is zero based.
		// this method should return -1 for pageIndex values that are out of range

		if (pageIndex < 0 || pageIndex >= this.pageCount()) {
			return -1;
		}

		if (pageIndex === this.pageCount() - 1) {
			//if it is last page
			return this.itemCount() % this._itemsPerPage || this._itemsPerPage;
		}

		return this._itemsPerPage;
	}

	pageIndex(itemIndex) {
		// determines what page an item is on. Zero based indexes
		// this method should return -1 for itemIndex values that are out of range
		if (itemIndex < 0 || itemIndex >= this.itemCount()) {
			return -1;
		}
		return Math.floor(itemIndex / this._itemsPerPage);
	}
}

/**
 * constructor should accept two arguments in the following order: fullName and contents, where fullName is the full name of the file (including file extension) and contents is the file contents.
For the purposes of this Kata, all filenames used in this Kata will be valid filenames. Valid filenames are summarized as follows:

Contains a filename and extension (e.g. LICENSE.txt is a valid filename, LICENSE is not)
Filename contains only alphanumeric characters (both uppercase and lowercase), underscores, spaces and/or dots (e.g. index.php, class.phptester.php, alpha beta.gamma_delta01.complicatedExample.txt are all valid filenames). Edge cases will not be considered (e.g. successive dots - Hello World..txt - will not appear in the test cases)
Extension contains only lowercase alphanumeric characters (e.g. txt, php, php3 are all valid)
 */
class File {
	constructor(fullName, contents) {
		this._fullName = fullName;
		this._contents = contents;
		this._currentLine = 0;
		this._currentChar = 0;
	}

	get fullName() {
		return this._fullName;
	}

	get filename() {
		return this._fullName.split('.').slice(0, -1).join('.');
	}

	getContents() {
		return this._contents;
	}

	get extension() {
		return this._fullName.split('.').pop();
	}

	write(str) {
		this._contents += (this._contents ? '\n' : '') + str;
	}

	gets() {
		const lines = this._contents.split('\n');
		this._currentLine += 1;
		return lines[this._currentLine - 1];
	}

	getc() {
		const chars = this._contents.split('');
		this._currentChar += 1;
		return chars[this._currentChar - 1];
	}
}

/**
 * Defining getters and setters on an existing class
  // You can't redeclare "Person", so this won't work...
  }

  Person.prototype.name = ???; // Will this work?

  // Maybe javascript provides the ability to add
  // getter and setters to an existing class?
*/
Object.defineProperty(Person.prototype, 'name', {
	get() {
		return this.firstName + ' ' + this.lastName;
	},
	set(value) {
		[this.firstName, this.lastName] = value.split(' ');
	},
});
/**
 * @param Create a class Hex which takes a number as an argument.
  Adding a hex object to a number (by using valueOf) generates a number, 
  but calling toString or toJSON will show its hexadecimal value starting with "0x". 
  To make hex objects comparable you have to provide a method equals.} value 
 */
function Hex(value) {
	this._value = value;

	this.valueOf = function () {
		return this._value;
	};

	this.toString = function () {
		return `0x${this._value.toString(16).toUpperCase()}`;
	};

	this.toJSON = function () {
		return `0x${this._value.toString(16).toUpperCase()}`;
	};

	this.plus = function (num) {
		const sum = this._value + num;
		return new Hex(sum);
	};

	this.minus = function (num) {
		const difference = this._value - num;
		return new Hex(difference);
	};
}

Hex.parse = function (string) {
	return parseInt(string, 16);
};
// prototype - a prototype to be inherited by newly created object
// properties (optional) - argument, to be passed to Object.defineProperties
//
// throws TypeError if `prototype` parameter is not object and is not null
//
// returns newly created object

Object.create = function (prototype, properties) {
	if (typeof prototype !== 'object' && prototype !== null) {
		throw new TypeError('Object prototype may only be an Object or null');
	}
	const obj = {};
	Object.setPrototypeOf(obj, prototype);
	if (properties !== undefined) {
		Object.defineProperties(obj, properties);
	}
	return obj;
};

// Let's make a Cat constructor!

/**
 * In object-oriented programming, it is sometimes useful to have private shared state among all instances of a class; 
 * in other languages, like ruby, this shared state would be tracked with a class variable. 
 * In javascript we achieve this through closures and immediately-invoked function expressions.
  In this kata, I want you to write make a Cat constructor that takes arguments name and weight to instantiate 
  a new cat object. The constructor should also have an averageWeight method that returns the average weight of cats 
  created with the constructor.
 */
var Cat = (function () {
	var cats = [];
	var totalWeight = 0;

	function Cat(name, weight) {
		if (!name || !weight) {
			throw new Error('Name and weight must be specified');
		}

		Object.defineProperty(this, 'weight', {
			get: function () {
				return weight;
			},

			set: function (newWeight) {
				totalWeight += newWeight - weight;
				weight = newWeight;
			},
		});

		cats.push(this);
		totalWeight += weight;
	}

	Cat.averageWeight = function () {
		return cats.length === 0 ? 0 : totalWeight / cats.length;
	};

	return Cat;
})();

//redo/undo
function undoRedo(object) {
	const history = [];
	const undoOperations = [];

	return {
		set: function (key, value) {
			if (object.hasOwnProperty(key)) {
				history.push(['edit', key, object[key], value]);
			} else {
				history.push(['set', key, value]);
			}

			object[key] = value;
			undoOperations.length = 0;
		},

		get: function (key) {
			return object[key];
		},

		del: function (key) {
			if (key in object) {
				history.push(['delete', key, object[key]]);

				delete object[key];
				undoOperations.length = 0;
			}
		},

		undo: function () {
			if (!history.length) {
				throw new Error('No operation to redo');
			}

			const operationUndo = history.pop(); //['delete', key, object[key]]
			const [type, key, oldValue] = operationUndo;

			if (type === 'set') {
				delete object[key];
			} else if (type === 'edit' || type === 'delete') {
				object[key] = oldValue;
			}
			undoOperations.push(operationUndo);
		},

		redo: function () {
			if (!undoOperations.length) {
				throw new Error('No operation to redo');
			}

			const operationToRedo = undoOperations.pop();
			const [type, key, oldValue, value] = operationToRedo;

			if (type === 'set') {
				object[key] = oldValue;
			} else if (type === 'edit') {
				object[key] = value;
			} else if (type === 'delete') {
				delete object[key];
			}
			history.push(operationToRedo);
		},
	};
}
