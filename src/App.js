// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Login from "./compornents/signin/Login";
// import Register from "./compornents/signin/Register";
// import Head from "./compornents/chats_pages/Head";
// import MessagePlace from "./compornents/chats_pages/MessagePlace";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login/>} />
//         <Route path="/register" element={<Register/>} />
//         <Route path="/chat" element={<Head/>}/>
//         <Route path="/messagePlace" element={<MessagePlace/>}/>
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from "./compornents/signin/Login";
import Register from "./compornents/signin/Register";
import Head from "./compornents/chats_pages/Head";
import MessagePlace from "./compornents/chats_pages/MessagePlace";

function App() {
  return (
    <Router basename="/check">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chat" element={<Head />} />
        <Route path="/messagePlace" element={<MessagePlace />} />
      </Routes>
    </Router>
  );
}

export default App;