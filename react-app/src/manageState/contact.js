import { useState } from 'react';


export default function Messenger() {
  const [to, setTo] = useState(contacts[0]);
  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedContact={to}
        onSelect={contact => setTo(contact)}
      />

      {/* //here key to teh chat specifies that when user is different 
      //the message field gets reset to empty  */}
      <Chat key={to.email} contact={to} />
    </div>
  )
}

const contacts = [
  { name: 'Taylor', email: 'taylor@mail.com' },
  { name: 'Alice', email: 'alice@mail.com' },
  { name: 'Bob', email: 'bob@mail.com' }
];

 function ContactList({
    selectedContact,
    contacts,
    onSelect
  }) {
    return (
      <section className="contact-list">
        <ul>
          {contacts.map(contact =>
            <li key={contact.email}>
              <button onClick={() => {
                onSelect(contact);
              }}>
                {contact.name}
              </button>
            </li>
          )}
        </ul>
      </section>
    );
  }

function Chat({ contact }) {
  const [text, setText] = useState('');
  return (
    <section className="chat">
      <textarea
        value={text}
        placeholder={'Chat to ' + contact.name}
        onChange={e => setText(e.target.value)}
      />
      <br />
      <button>Send to {contact.email}</button>
    </section>
  );
}


  