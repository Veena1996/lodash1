var users = {
  'barney':  { 'age': 36, 'active': true },
  'fred':    { 'age': 40, 'active': false },
  'pebbles': { 'age': 1,  'active': true },
  'veena' : { 'age': 5,  'active': true}
};
const _ = require('lodash');
var c = _.findLastKey(users, function(o) { return o.age < 40; });
console.log(c);
// => returns 'pebbles' assuming `_.findKey` returns 'barney'

// The `_.matches` iteratee shorthand.
var a = _.findLastKey(users, { 'age': 36, 'active': true });
console.log(a);
// => 'barney'

// The `_.matchesProperty` iteratee shorthand.
_.findLastKey(users, ['active', false]);
// => 'fred'

// The `_.property` iteratee shorthand.
_.findLastKey(users, 'active');
// => 'pebbles'
