// function getTempCallback (location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Philadelphia', function(err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise (location) {
//   return new Promise(function(resolve, reject) {
//     resolve(79);
//     reject('City not found');
//   });
// }
//
// getTempPromise('Philadelphia').then(function(temp) {
//   console.log('promise success', temp);
// }, function(err) {
//   console.log('promise error', err);
// });

// Challenge - promise prac
if (typeof someNumber === 'number')

function addPromise (a, b) {
  return new Promise(function(resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject("Cannot add non-numeric values");
    }
  });
}

addPromise(5, 10).then(function(result) {
  console.log('Success; total = ', result);
}, function(err) {
  console.log('Failure:', err);
});

addPromise('hi', 10).then(function(result) {
  console.log('Success; total = ', result);
}, function(err) {
  console.log('Failure:', err);
});
