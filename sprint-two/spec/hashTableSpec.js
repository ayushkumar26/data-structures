describe('hashTable', function() {
  var hashTable;
  var people = [['Steven', 'Tyler'], ['George', 'Harrison'], ['Mr.', 'Doob'], ['Dr.', 'Sunshine'], ['John', 'Resig'], ['Brendan', 'Eich'], ['Alan', 'Turing']];


  beforeEach(function() {
    hashTable = new HashTable();
  });

  // it('should have methods named "insert", "remove", and "retrieve', function() {
  //   expect(hashTable.insert).to.be.a('function');
  //   expect(hashTable.remove).to.be.a('function');
  //   expect(hashTable.retrieve).to.be.a('function');
  // });

  // it('should store values that were inserted', function() {
  //   hashTable.insert('Steven', 'Seagal');
  //   expect(hashTable.retrieve('Steven')).to.equal('Seagal');
  // });

  // it('should not contain values that were not inserted', function() {
  //   hashTable.insert('Steven', 'Spielberg');
  //   expect(hashTable.retrieve('Steven')).not.to.equal('Seagal');
  // });

  // it('should overwrite values that have the same key', function() {
  //   hashTable.insert('Bob', 'Loblaw');
  //   hashTable.insert('Bob', 'Barker');
  //   expect(hashTable.retrieve('Bob')).to.equal('Barker');
  // });

  // it('should not contain values that were removed', function() {
  //   hashTable.insert('Steven', 'Tyler');
  //   hashTable.remove('Steven');
  //   expect(hashTable.retrieve('Steven')).to.equal(undefined);
  // });

  // it('should handle hash function collisions', function() {
  //   var v1 = 'val1';
  //   var v2 = 'val2';
  //   var oldHashFunction = window.getIndexBelowMaxForKey;
  //   window.getIndexBelowMaxForKey = function() { return 0; };
  //   hashTable.insert(v1, v1);
  //   hashTable.insert(v2, v2);
  //   expect(hashTable.retrieve(v1)).to.equal(v1);
  //   expect(hashTable.retrieve(v2)).to.equal(v2);
  //   window.getIndexBelowMaxForKey = oldHashFunction;
  // });

  // // (Advanced! Remove the extra "x" when you want the following tests to run)
  // xit ('should double in size when needed', function() {
  //   _.each(people, function(person) {
  //     var firstName = person[0];
  //     var lastName = person[1];
  //     hashTable.insert(firstName, lastName);
  //     expect(hashTable.retrieve(firstName)).to.equal(lastName);
  //   });
  //   expect(hashTable._limit).to.equal(16);
  // });

  // xit ('should halve in size when needed', function() {
  //   _.each(people, function(person) {
  //     var firstName = person[0];
  //     var lastName = person[1];
  //     hashTable.insert(firstName, lastName);
  //     expect(hashTable.retrieve(firstName)).to.equal(lastName);
  //   });
  //   expect(hashTable._limit).to.equal(16);
  //   hashTable.remove('George');
  //   hashTable.remove('Dr.');
  //   hashTable.remove('Steven');
  //   hashTable.remove('John');
  //   hashTable.remove('Mr.');
  //   expect(hashTable._limit).to.equal(8);
  // });

  // it('our unit test: should return same value when given Kiyeon', function() {
  //   hashTable.insert('Kiyeon', 'Park');
  //   expect(hashTable.retrieve('Kiyeon')).to.equal('Park');
  //   expect(hashTable.retrieve('Kiyeon')).to.equal('Park');
  // });

  it('Hash table should expand', function() {
    //console.log('Type of HASHTABLE:', Array.isArray(hashTable));
    hashTable.insert('Kiyeon', 'Park');
    hashTable.insert('Kiyeo', 'Park');
    hashTable.insert('Kiye', 'Park');
    hashTable.insert('Kiy', 'Park');
    hashTable.insert('Ki', 'Park');
    hashTable.insert('K', 'Parcccck');
    hashTable.insert('A', 'Parkkkkkkk');
    hashTable.insert('Aasdkfaslkf', 'Prku');
    hashTable.insert('B', 'Parku');
    hashTable.insert('A', 'Parsdfku');
    hashTable.insert('As', 'Pasdfu');
    hashTable.insert('Agg', 'Pddarku');
    hashTable.insert('A', 'Pahgrku');
    hashTable.insert('Addd', 'Parku');
    hashTable.insert('Ad', 'Pargddjku');
    hashTable.insert('Aa', 'Parku');
    hashTable.insert('A', 'Pargku');

    //expect(Object.keys(hashTable).length).to.equal(16);
   
    
    
  });
});
