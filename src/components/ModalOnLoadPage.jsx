import React, { useEffect } from "react";

function ModalOnLoadPage({ setShowModal }) {
  useEffect(() => {
    const returningUser = localStorage.getItem("seenPopUp");
    setShowModal(!returningUser);
  }, []);

    return (
      <>
        <h4 style={{ direction: "rtl", textAlign: "center" }}>
          به دلیل تحریمهای سایت TMDB لطفا برای دیدن سایت از VPN استفاده
          کنید.{" "}
        </h4>
        <br />
        <h4 style={{textAlign: "center" }}>
          Iranian people have to use VPN to see properly due to tmdb site
          sanctions
        </h4>
      </>
    );
}

export default ModalOnLoadPage;
