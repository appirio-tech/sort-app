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
 * Sort an array of objects passed to it, using 'insertion' sort - Complexity - O(n^2)
 *
 * @param {Array} array Array to be sorted.
 * @param {Function} comparator Comparison function.
 *
 * @return {Array} returns the sorted Array.
 */
Sort.prototype.fastSort = function(array, comparator) {
    // If array is null, no data to sort. Throw error.
    if (array == null) {
        throw new Error('ERROR: Array cannot be null.');
    }
    // If array is not of type Array. Throw error.
    else if (!Array.isArray(array)) {
        throw new Error('ERROR: Array passed is not of type "Array"');
    }

    // If comparator was passed but not a function use default
    if (typeof comparator != "function") {
        comparator = this.defaultComparator;
    }

    // Array is sorted, return
    if (array.length <= 1) {
        return array;
    }

    for (var i = 1;  i < array.length; i++) {
        var key = array[i];
        var k = i - 1;

        while (k >= 0 && (comparator(array[k], key) > 0)) {
            array[k + 1] = array[k];
            k = k - 1;
        }
        array[k + 1] = key;
    }
    return array;
};


/**
 * Linearly check if array is sorted
 *
 * @param {Array} array Array to check
 * @param {Function} comparator Comparator function.
 *
 * @return {boolean} returns true if the array is already sorted, else returns false.
 */
Sort.prototype.isSorted = function(array, comparator) {
    // If array is null, no data to check. Throw error.
    if (array == null) {
        throw new Error('ERROR: Array cannot be null.');
    }
    // If array is not of type Array. Throw error.
    else if (!Array.isArray(array)) {
        throw new Error('ERROR: Array passed is not of type "Array"');
    }
    // If comparator was passed but not a function use default
    if (typeof comparator != "function") {
        comparator = this.defaultComparator;
    }

    for(var i = 1; i < array.length; i++) {
        if (comparator(array[i - 1], array[i]) > 0) {
            return false;
        }
    }
    return true;
};

module.exports = Sort;
