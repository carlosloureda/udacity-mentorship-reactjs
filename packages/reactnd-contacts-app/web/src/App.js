import React, { Component } from "react";
import ListContacts from "./ListContacts";
import CreateContact from "./CreateContact";
import * as ContactsAPI from "./utils/ContactsAPI";
import { Route } from "react-router-dom";

class App extends Component {
  state = {
    contacts: [],
    screen: "list"
  };

  componentDidMount() {
    ContactsAPI.getAll().then(contacts => {
      this.setState(() => ({
        contacts
      }));
    });
  }

  removeContact = contact => {
    ContactsAPI.remove(contact).then(() => {
      this.setState(currentState => ({
        contacts: currentState.contacts.filter(c => c.id !== contact.id)
      }));
    });
  };

  createContact = contact => {
    ContactsAPI.create(contact).then(contact => {
      this.setState(currentState => ({
        contacts: currentState.contacts.concat([contact])
      }));
    });
  };
  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <ListContacts
              contacts={this.state.contacts}
              onDeleteContact={this.removeContact}
            />
          )}
        />
        <Route
          path="/create"
          render={({ history }) => (
            <CreateContact
              onCreateContact={contact => {
                this.createContact(contact);
                history.push("/");
              }}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
