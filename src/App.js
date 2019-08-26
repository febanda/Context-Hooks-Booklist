// import React from "react";
// import BookContextProvider from "./contexts/BookContext";
// import Navbar from "./components/Navbar";

// function App() {
//   return (
//     <div className="App">
//       <BookContextProvider>
//         <Navbar />
//       </BookContextProvider>
//     </div>
//   );
// }

// export default App;

import React from "react";
import Navbar from "./components /Navbar";
import BookContextProvider from "./contexts/BookContext";
import BookList from "./components /BookList";
import NewBookForm from "./components /BookForm";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <NewBookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
