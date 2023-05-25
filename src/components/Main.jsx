import React, { useState } from "react";
import dummyContacts from "../dummyData";

const Main = () => {
  const [contacts, setContacts] = useState(dummyContacts);

  const list = contacts.map((contact) => {
    return (
      <tr key={contact.id}>
        <td>{contact.name}</td>
        <td>{contact.phone}</td>
        <td>{contact.email}</td>
      </tr>
    );
  });
  return (
    <div id="main">
      <div id="navbar">
        <div>Contact List</div>
      </div>
      <div id="container">
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
            </tr>
            {list}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Main;
