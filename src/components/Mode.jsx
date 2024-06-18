import {useEffect, useState} from "react";

const Mode = () => {
  const [modde, setModde] = useState("Light");
  useEffect(() => {
    // document.body.setAttribute("class", 'dark');
    const element = document.body
    if(modde == 'Light') {
        element.classList.remove('Dark');
    } else {
        element.classList.remove('Light');
    }

    element.classList.add(modde);
  }, [modde]);


  return (
    <>
      <div className= {`main-wrap`}>
        <h1>React Dark Mode Example</h1>
        <span className={modde === "Light" ? "Lightbtn" : "darkbtn"}
          onClick={() => setModde(modde === "Light" ? "Dark" : "Light")}
        >{`Switch to ${modde} mode`}</span>
        <p>
          Both of these libraries are easy to use and integrate into your React
          application, providing straightforward solutions for generating QR
          codes. Choose the one that best fits your needs and coding style.
        </p>
      </div>
    </>
  );
};

export default Mode;
