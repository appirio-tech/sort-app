// Dependencies
var Sort = require('..'),
    should = require('should');

// Globals
var sort
  , unsorted
  , sortedCustom
  , unsortedCustom
  , comparePeople;

// Before Each Test Case
beforeEach(function(){
	sort = new Sort();
	unsorted = new Array();
	unsortedCustom = { 
		people: [
			{ name: "Bob", age: 1 }, 
			{ name: "Susan", age: 0 }, 
			{ name: "Kelly", age: 5 }, 
			{ name: "Ray", age: 3 }
		]
	};
	sortedCustom = { 
		people: [
			{ name: "Susan", age: 0 }, 
			{ name: "Bob", age: 1 }, 
			{ name: "Ray", age: 3 }, 
			{ name: "Kelly", age: 5 }
		]
	};

	// Generate random ints and populate array
	for(var i = 0; i < 20; i++) {
		unsorted.push(Math.round(Math.random() * 100));
	}

	/**
	 * Custom Comparator Function to compare values of "Person" objects in People array
	 *
	 * @param {Object} left Object from left array
	 * @param {Object} right Object from right array
	 */
	comparePeople = function comparePeople(left, right) {
						if (left.age > right.age) return 1
						else if (left.age < right.age) return -1
						else if (left.age == right.age) return 0
					}
});

// Sort Client Methods Test Suite
describe('Sort Client Methods', function() {
	// sort.defaultComparator( left, right )
	describe('.defaultComparator(left, right)', function() {
		// Sort's default comparison function
		var defaultComparator = new Sort().defaultComparator;
		// left < right
		it('should return -1 for less than', function() {
			defaultComparator(1,2).should.equal(-1);
		});
		// left = right
		it('should return 0 for equal to', function() {
			defaultComparator(1,1).should.equal(0);
		});
		// left > right
		it('should return 1 for greater than', function() {
			defaultComparator(2,1).should.equal(1);
		});
	});


	// isSorted( array, comparator );
	describe('isSorted()', function() {
		it('should throw error if array is null', function () {
			(function() {
			  sort.isSorted(null, null);
			}).should.throwError('ERROR: Array cannot be null.');
		});

		it('should throw error if array is not of type Array', function () {
			(function() {
			  sort.isSorted('string', null);
			}).should.throwError('ERROR: Array passed is not of type "Array"');
		});

		it('Should check if array is sorted and return boolean.', function() {
			var sorted 		= [ 1, 2, 3, 4, 5 ]
			  , notSorted 	= [ 2, 1, 7, 3, 8 ];

			sort.isSorted(sorted).should.be.true;
			sort.isSorted(notSorted).should.be.false;
		});

		it('Should check if array is sorted using custom comparator function and return boolean.', function() {
			sort.isSorted(sortedCustom.people, comparePeople).should.be.true;
			sort.isSorted(unsortedCustom.people, comparePeople).should.be.false;
		});
	});

	// sort( array, comparator );
	describe('sort()', function() {
		it('should throw error if array is null', function () {
			(function() {
			  sort.fastSort(null, null);
			}).should.throwError('ERROR: Array cannot be null.');
		});

		it('should throw error if array is not of type Array', function () {
			(function() {
			  sort.fastSort('string', null);
			}).should.throwError('ERROR: Array passed is not of type "Array"');
		});

		it('Should sort array using a faster Sort Algorithm', function() {
			sort.isSorted(sort.fastSort(unsorted, null)).should.be.true;
		});

		it('Should sort array using a faster Sort Algorithm and Custom Comparator Function', function() {
			sort.isSorted(sort.fastSort(unsortedCustom.people, comparePeople)).should.be.true;
		});
	});
});