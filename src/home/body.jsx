import "./body.css";

const Body = () => {
  return (
    <>
      <div className="blog">
        <h1>Blog</h1>
        <p>
          l have no idea what to say .Occassionally l think there are{" "}
          <strong> NO LIMITATIONS</strong> in this world.Then l go on to realise
          there could be limitations only to the extend my mind lets exist.
        </p>
        <p>
          There is an aphorism <i>As a man thinketh so is he.</i> It is
          definitely as biblical as it is manifested in the physical. l believe
          James Allen said it, the bible said it.l have said it. That alone
          should stir up something in you.{" "}
        </p>
        <p>
          l really wish l had more for you, but for today that is it. Have a
          lovely day. Stay blessed. Like always my friends, today is going to be
          a good day.
        </p>
        <h1>Today's Blog : Monday 27 November 2023</h1>
        <p>
          <strong>Enjoy Your life.</strong> That is the topic for the
          day.Listen, l woke up today feeling like not working out.Full
          disclaimer <i>l worked out........</i>Why?Well l have discovered
          something about the human mind.My mind in particular because l speak
          for none other than myself. The thing that happens with my mind is, it
          tells you something and if you choose to ignore it, it magically shuts
          up.Recently l have been rebelling against it. Doing complementary
          things to what it tells me. <i> Lesson here is,</i>{" "}
          <strong> Just Do It.</strong> Defy the odds. Just go for it.
        </p>
        <p>
          l appreciate you for taking this opportunity to go through my
          mind.Have a blessed day. Like always my friends,{" "}
          <strong>Today is going to be a good da</strong>
        </p>
        <h1>Blog | Wednesday 29 November 2023</h1>
        <p>
          Well well well.What's up people. Welcome to my daily blog.I'm so
          excited to be sharing the journey with you people. It is a wonderful
          opportunity. Big Shout out to you.Recently l have been reading the
          book <strong>The Subtle Art Of Not Giving A Fxck.</strong> Yeah, l
          said it. Shocking isn't it. Turns out recently l have been giving too
          many fxcks. That's stopping.
        </p>
        <p>
          l mean......why should l give a fxck someone drives a GLE and l drive
          a Honda. Why should l give a fxck 5 girls got married and they are
          flashing it all over instagram. l have learnt something. Let things
          flow.Don't rush into things. Take a chill pill. That's their life.
          Learn to live your life and don't get encampused into other peoples
          dreams. You will lose your path. Stay strong friends. Like always my
          friends.Today will be a good day.{" "}
          <strong> Oh yeah, and there's a Taku.</strong>See you tommorow.
        </p>
        <h1>Blog | Thursday 30 November 2023</h1>
        <p>It's finally today. Let's skip the nitty gritties.... <strong>l am playing with school</strong>
        l didn't read for a math exam l had today... guess what, l wrote nothing. Yes you heard me... <strong>NOTHING.</strong>
        Nevertheless, l don't ever quit, l have a Schlieffen Plan to bombard my facilitator to allow me to retake all the tests.
        <p>
          l am coming back stronger...give me 48 hours. Anyways friends don't forget to keep fighting.Yours Truly...Sir Raphiniel <strong>The Black Shinobi</strong>
        </p>
       
        </p>
        <h1>Friday | 1 December 2023</h1>
        <p>Firstly...Happy New Month!!</p>
      </div>
      <div className="container">
        <div className="leftContainer">
          <h1>Podcast</h1>

          {/* <p className="aboutText">
            Hi, I’m Raphiniel, a software developer and an artist. I love creating things that make people happy, whether it’s a website, a game, a painting, or a song. I have a passion for learning new skills and technologies, and I enjoy challenging my mind with puzzles and problems.
            </p> */}
          <p className="aboutText">
            Oh,podcast. In case of any unexpected incidents of my
            succumbing.There is nothing l would love more than to leave
            something for my friends and family.
          </p>
          <p className="aboutText">
            The content l am to provide is heartfelt. We are going
            somewhere.Stay strong...
          </p>
        </div>
        <div className="rightContainer">
          <img src="./images/pexels-francesco-ungaro-396547.jpg" alt="" />
        </div>
      </div>

      {/* Second Item */}

      <div className="container">
        <div className="leftContainer">
          <h1>Programming and Youtube</h1>
          <p className="aboutText">
            The links for the programming channel are to be provided.
          </p>
          {/* <p className="aboutText">
            Hi, I’m Raphiniel, a software developer and an artist. I love creating things that make people happy, whether it’s a website, a game, a painting, or a song. I have a passion for learning new skills and technologies, and I enjoy challenging my mind with puzzles and problems.
            </p>
            <p className="aboutText">
            I’m also a fitness enthusiast, and I practice calisthenics regularly. Calisthenics is a form of exercise that uses your own body weight as resistance, and it helps me improve my strength, flexibility, and balance. I like to push myself to the limit and see what I can achieve with my body.            </p> */}
        </div>
        <div className="rightContainer">
          {/* <video autoPlay loop muted src="images\IMG_1919.MOV" width="100%" height="600px"></video> */}
          <img src="images\images (1).png" alt="hello" />
        </div>
      </div>
      <div className="about" id="aboutPage">
        <h1>About</h1>
        <div className="aboutInside">
          <div className="aboutP">
            <p>The About Page.I will ask, what do you want to know about me?</p>
            <p>
              Hi, I’m Raphiniel, a freelance web developer and designer with
              over 12 months of experience in creating stunning websites for
              small businesses and entrepreneurs
            </p>
          </div>
          <div className="aboutImg">
            <img
              src="images\IMG_0739.JPG"
              alt=""
              width="400px"
              height="400px"
            />
          </div>
        </div>
      </div>
      <div className="workouts">
        <h1>Workouts</h1>
        <video
          autoPlay
          muted
          loop
          src="images\IMG_1528.MOV"
          width="100%"
          height="600px"
        ></video>
      </div>
    </>
  );
};

export default Body;
