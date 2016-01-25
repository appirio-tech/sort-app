"use strict";

/*!
 *  Sorting an array for Node.js
 */

/**
 * Sorting Algorithm Client
 */
function Sort() {
  if (!(this instanceof Sort)) {
		return new Sort();
	}

	/** 
	 * Default Comparison Function
	 *
	 * @param {Object} left Object from left array
	 * @param {Object} right Object from right array
	 */
	this.defaultComparator = function(left, right) {
		if (left > right) return 1;
		else if (left < right) return -1;
		else if (left == right) return 0
	}
}

/**
 * TODO: Sort an array of objects passed to it
 * TODO: Validation - Check if the array is null
 * TODO: Validation - Check if the argument is of type array
 * TODO: Validation - Use the default comparator if the comparator is not a function
 *
 * @param {Array} array Array to be sorted.
 * @param {Function} comparator Comparison function.
 *
 * @return {Array} returns the sorted Array.
 */
Sort.prototype.fastSort = function(array, comparator) {
	throw new Error('Not implemented');
};


/**
 * TODO: Linearly check if array is sorted
*  TODO: Validation - Check if the array is null
 * TODO: Validation - Check if the argument is of type array
 * TODO: Validation - Use the default comparator if the comparator is not a function
 *
 * @param {Array} array Array to check
 * @param {Function} comparator Comparator function.
 *
 * @return {boolean} returns true if the array is already sorted, else returns false.
 */
Sort.prototype.isSorted = function(array, comparator) {
    throw new Error('Not implemented')
};

module.exports = Sort;
