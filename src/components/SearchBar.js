import "../app/globals.css"
import Form from 'next/form'

export default function SearchBar() {

    return (
        <>
            <Form action="/search">
                <input text="text" placeholder="SEARCHBAR" />
                <button type="submit">🔎</button>
            </Form>

        </>
    )
}