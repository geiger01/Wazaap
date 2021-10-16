import { HomePage } from "./pages/HomePage";
import { ChatRoom } from "./pages/ChatRoom";

import { useAuthState } from 'react-firebase-hooks/auth'
import { firebaseService } from "./services/firebase";



export const App = () => {

  const [user] = useAuthState(firebaseService.auth)

  return (
    <div >
      {user ? <ChatRoom /> : <HomePage />}
    </div>
  );
}

