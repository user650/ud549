function AddressBook() {
  this.contacts = [];
  this.initialComplete = false;
}

/** getInitContacts simulates an ansyc fucntion*/
 
AddressBook.prototype.getInitialContacts = function(cb) {
  var self = this;

  setTimeout(function () {
    self.initialComplete = true;
    if (cb) {
      return cb();
    }
  }, 3);
};

/** add a new contact to the AddressBook */ 
AddressBook.prototype.addContact = function(contact) {
  this.contacts.push(contact);
};

/** return the contact */
AddressBook.prototype.getContact = function(contactIndex) {
  return this.contacts[contactIndex];
};

/** delete the contact at the index location */
AddressBook.prototype.deleteContact = function(contactIndex) {
  this.contacts.splice(contactIndex, 1);
};

