import { createContext, useReducer } from 'react';
import NotesReducer from '../reducer/NotesReducer';
import { resizeAllGridItems } from '../resize';

export const NotesContext = createContext();

export const NotesState = (props) => {
	const initialState = {
		List: new Set([
			`Notes is a notetaking app developed by Apple. It is provided on their iOS and macOS operating systems, the latter starting with OS X 10.8 Mountain Lion. It functions as a service for making short text notes, which can be synchronised between devices using Apple's iCloud service`,
			`Quickly capture what's on your mind and get a reminder later at the right place or time. Speak a voice memo on the go and have it automatically transcribed.
`,
			`With Evernote, your notes sync across all your devices.`,
			`Notes is a notetaking app developed by Apple. It is provided on their iOS and macOS operating systems, the latter starting with OS X 10.8 Mountain Lion.Notes is a notetaking app developed by Apple. It is provided on their iOS and macOS operating systems, the latter starting with OS X 10.8 Mountain Lion.Notes is a notetaking app developed by Apple. It is provided on their iOS and macOS operating systems, the latter starting with OS X 10.8 Mountain Lion.`,
			`Capture notes, share them with others, and access them from your computer, phone or tablet. Free with a Google account.`,
			`Capture notes, share them with others, and access them from your computer`,
			`The useState() is a built-in React Hook that allows you for having state variables in functional components. It should be used when the DOM has something that is dynamically manipulating/controlling.

In the below-given example code, The useState(0) will return a tuple where the count is the first parameter that represents the counter’s current state and the second parameter setCounter method will allow us to update the state of`,
			`We can make use of setCounter() method for updating the state of count anywhere. In this example, we are using setCounter() inside the setCount function where various other things can also be done. The idea with the usage of hooks is that we will be able to keep our code more functional and avoid class-based components if they are not required.
`,
			`A key is a special string attribute that needs to be included when using lists of elements.`,
		]),
	};

	const [state, dispatch] = useReducer(NotesReducer, initialState);

	const addNote = (note) => {
		console.log(note);
		setTimeout(() => {
			resizeAllGridItems();
		}, 100);
		dispatch({ type: 'ADDNOTE', payload: note });
	};

	// const removeNotes = (Notes) => {
	// 	dispatch({ type: 'REMOVENotes', payload: Notes });
	// };

	return (
		<NotesContext.Provider
			value={{
				List: state.List,
				addNote,
			}}>
			{props.children}
		</NotesContext.Provider>
	);
};
