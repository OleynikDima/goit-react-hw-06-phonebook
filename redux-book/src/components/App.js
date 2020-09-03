import React from 'react'
import Form from './Form'
import ContactsList from './Contacts'
import ContactFilter from './Contacts/ContactFilter'



function App () {
        return (
            <>
                <Form />
                <ContactFilter />        
                <ContactsList/>
            </>
        )
    }

export default App;