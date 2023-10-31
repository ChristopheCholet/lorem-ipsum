import "./App.css";
import Title from "./assets/components/Title";
import Description from "./assets/components/Description";

const App = () => {
  return (
    <>
      <div className="title">
        <Title title="Lorem" />
        <Description text="" />
      </div>

      <div className="content">
        <Title title="Ipsum" />
        <Description text="" />
      </div>
    </>
  );
};

export default App;
