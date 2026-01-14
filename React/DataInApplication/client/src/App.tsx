import "./App.css";
import "./main.css";
import { Account } from "./components/account";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./api/queryClient";



function App() {
  return (
 
<QueryClientProvider client={queryClient}>
<div className="app">
    <Account/>deba
    {/* <AuthForm /> */}
</div>
    </QueryClientProvider>
  );
}

export default App;
