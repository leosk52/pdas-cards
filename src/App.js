import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import alexaImage from "./images/alexa.png";
import cortanaImage from "./images/cortana.png";
import siriImage from "./images/siri.png";

const App = () => {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">
            <div>Personal Digital Assistants</div>
          </p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <div>
                <ProfileCard
                  title="Alexa"
                  handle="@alexa99"
                  img={alexaImage}
                  description="I'll help you buy stuff off Amazon"
                />
              </div>
            </div>
            <div className="column is-4">
              <div>
                <ProfileCard
                  title="Cortana"
                  handle="@cortana32"
                  img={cortanaImage}
                  description="Personal assistant by Microsoft"
                />
              </div>
            </div>
            <div className="column is-4">
              <div>
                <ProfileCard
                  title="Siri"
                  handle="@siri01"
                  img={siriImage}
                  description="I don't get a lot of updates anymore"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
