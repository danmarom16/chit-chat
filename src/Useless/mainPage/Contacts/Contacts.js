import ContactCard from './ContactCard';
import ContactsList from './contactsList';

function DisplayContacts() {
    const contacts = ContactsList.map((c, key) => {
        return <ContactCard name={c.name} img={c.img} msg={c.msg} lastSeen={c.lastSeen} key={key}/>
    });

    return (
        <ol className="list-group-flush list-group">
        {contacts}
        </ol>
    );
}

export default DisplayContacts;