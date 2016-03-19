describe("Address Book", function() {
  var addressBook,thisContact;
  
  beforeEach(function () {
      addressBook = new AddressBook();
      thisContact = new Contact('Bob');
  });

  it("should be able to add a contact", function() {
    var addressBook = new AddressBook();
        thisContact = new Contact('Bob');
        
    addressBook.addContact(thisContact);
    
    expect(addressBook.getContact(0)).toBe(thisContact);
  });

  it("should be able to delete a contact", function() {
    var addressBook = new AddressBook();
        thisContact = new Contact('Bob');
    addressBook.addContact(thisContact);
    addressBook.deleteContact(0);
    expect(addressBook.getContact(0)).not.toBeDefined();
  });

});

describe("Async Address Book", function() {
    var addressBook = new AddressBook();
        thisContact = new Contact('Bob');
  beforeEach(function(done){
    addressBook.getInitialContacts(function() {
      done();
    });
    
  });
  
  
  it("should should grab initial contacts", function(done) {
    expect(addressBook.initialComplete).toBe(true);
    done();
  });
});

