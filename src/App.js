import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import fetchContacts from "./redux/contacts/contacts-operetions";

import style from "./App.module.css";

function App() {
  const isLoading = useSelector((state) => state.contacts.loading);
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  return (
    <div className={style.container}>
      <h2>Phonebook</h2>
      {isLoading && <h1>Loading...</h1>}
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;
