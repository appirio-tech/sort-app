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
 * Sort an array of objects passed to it using "merge sort", complexity O(n*log(n))
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
    if (!comparator || typeof comparator != "function") {
        comparator = this.defaultComparator;
    }

    var length = array.length
        , mid    = Math.ceil(length / 2)
        , left   = array.slice(0, mid)
        , right  = array.slice(mid, length);

    // Array is sorted, return
    if (length <= 1) {
        return array;
    }

    /**
     * Merges two arrays. Shifts either left or right object
     * onto result array depending which is lower value || exists.
     *
     * @param {Array} left The left sub-array
     * @param {Array} right The right sub-array
     */
    function merge(left, right) {

        var result = [];

        // While either array exists
        while(left.length || right.length) {
            // If both exist
            if(left.length && right.length) {
                // Left value less than right value, shift left onto result
                if(comparator(left[0], right[0]) < 0) {
                    result.push(left.shift());
                }
                // Shift right onto result
                else {
                    result.push(right.shift());
                }
            }
            // If only left exists, shift left onto result
            else if (left.length) {
                result.push(left.shift());
            }
            // If only right exists, shift right onto result
            else {
                result.push(right.shift());
            }
        }

        // Return merged array
        return result;
    }
    // Merge recursively sorted sub arrays
    return merge(this.fastSort(left, comparator), this.fastSort(right, comparator));
};


/**
 * Linearly check if array is sorted at O(n) complexity
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
