import { RouterProvider, useRouter } from "./router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function Pages() {
  const { path } = useRouter();
  console.log("Current path:", path);
  let Page;
  switch (path) {
    case "/":
    case "":
      Page = Home;
      break;
    case "/about":
      Page = About;
      break;
    case "/services":
      Page = Services;
      break;
    case "/contact":
      Page = Contact;
      break;
    default:
      Page = Home;
  }

  return (
    <div className="min-h-screen flex flex-col bg-primary-bg text-primary-text selection:bg-primary-accent selection:text-white">
      <Navbar />
      <main className="flex-1">
        <Page />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <Pages />
    </RouterProvider>
  );
}
