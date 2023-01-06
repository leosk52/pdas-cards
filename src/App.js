import ProfileCard from "./ProfileCard";
import alexaImage from './images/alexa.png'

console.log(alexaImage)

const App = () => {
  return (
    <div>
      <div>Personal Digital Assistants</div>
      <div>
        <ProfileCard
          img={alexaImage}
          title="Alexa"
          handle="@alexa99"
          description="I'll help you buy stuff off Amazon"
        />
      </div>
      <div>
        <ProfileCard
          img="cortana.png"
          title="Cortana"
          handle="@cortana32"
          description="Personal assistant by Microsoft"
        />
      </div>
      <div>
        <ProfileCard
          img="siri.png"
          title="Siri"
          handle="@siri01"
          description="I don't get a lot of updates anymore"
        />
      </div>
    </div>
  );
};

export default App;
