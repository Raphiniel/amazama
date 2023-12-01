// import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./footerz.css";

const Footerz = () => {
  return (
    <>
      <div>
        {/* <div>
          <h1>Workouts</h1>
          <video src="images\IMG_1528.MOV">
            <source src="images\IMG_1528.MOV" type="media/mp4" />
          </video>
        </div> */}
        <footer id="go">
          {/* <br />
          <br />
          <br />
          <br /> */}
          <div className="footer-items">
            <div className="socials">
              <h1>Socials</h1>
              <a href="#">Instagram</a>
              <a href="#">Twitter</a>
              <a href="#">Youtube</a>
            </div>
            <div className="contacts">
              <h1>Contacts</h1>
              <h3>contact: +263 783 607 500</h3>
              <h3>business: +263 718 078 132</h3>
            </div>
            <div className="other">
              <h1>Emails</h1>
              <h3>Email1:raphinielr@gmail.com</h3>
              <h3>Email2:raphinielrmurwira@gmail.com</h3>
            </div>

            {/* <marquee behavior="scroll" direction="right" scrollamount="10">
            <h1>Well this is the bottom</h1>
            </marquee> */}
           
          </div>
          {/* <div className="leftContainer">
            <a href="#">Well this is the bootom</a> */}
            {/* <BrowserRouter>
              <Routes>
                <Route path="/Footer" element={<Footerz />}></Route>
              </Routes>
            </BrowserRouter> */}
            {/* <marquee behavior="scroll" direction="right">
              <h1>CONTENT COMING SOON!</h1>
            </marquee> */}
          {/* </div> */}
         
        </footer>
      </div>
    </>
  );
};

export default Footerz;
