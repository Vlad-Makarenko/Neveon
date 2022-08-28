import { observer } from "mobx-react-lite";
import { useContext, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Context } from ".";
import { useRoutes } from "./routes";
import { Breadcrumbs } from "./components/Breadcrumbs";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ModalWin } from "./components/ModalWin";
import { NavBar } from "./components/NavBar";
import { OrderForm } from "./components/OrderForm";

const App = observer(() => {
  const routes = useRoutes();
  const { Categories } = useContext(Context);
  const [thanksShow, setThanksShow] = useState(false);

  return (
    <Router>
      <Header setModal={(show) => Categories.setModalShow(show)} />
      <NavBar />
      <Breadcrumbs />
      <div className="App">{routes}</div>
      <Footer />
      <ToastContainer />
      <ModalWin
        show={Categories.modalShow}
        onHide={() => Categories.setModalShow(false)}
      >
        <OrderForm
          setThanksModal={setThanksShow}
          setOwnModal={(show) => Categories.setModalShow(show)}
        />
      </ModalWin>
      <ModalWin show={thanksShow} onHide={() => setThanksShow(false)}>
        <div className="mb-5">
          <h1>Дякуємо!</h1>
          <p style={{ fontSize: "18px" }}>
            Вашу заявку прийнято, менеджер зв'яжеться з вами найближчим часом
          </p>
        </div>
      </ModalWin>
    </Router>
  );
});

export default App;
