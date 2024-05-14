import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "../elements/Header";
import { useStateContext } from "../contexts/ContextProvider";

import { useLocation } from "react-router-dom";
import Footer from "../elements/Footer";

function DefaultLayout() {
  let location = useLocation();
  const { user, token, notification, setUser, setToken, setNotification } =
    useStateContext();

  const [page, setPage] = useState(location.pathname);

  // setting the page to the as is
  const handleSetPage = (state) => {
    setPage(state);
  };

  const onLogout = (ev) => {
    ev.preventDefault();
    setUser({});
    setToken(null);
  };

  // implementing header as the location goes back
  useEffect(() => {
    setPage(location.pathname);
  }, [location]);

  return (
    <div id="defaultLayout">
      <Header
        page={page}
        onOpenPage={handleSetPage}
        token={token}
        onLogout={onLogout}
      />
      <main>
        <Outlet />
      </main>
      <Footer page={page}/>
    </div>
  );
}

export default DefaultLayout;
