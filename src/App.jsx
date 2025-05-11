import TabsList from "./components/TabsList";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ComponentC from "./components/ComponentC";
import ComponentD from "./components/ComponentD";
import "./App.css";

function App() {
  const tabsList = [
    {
      id: "a",
      label: "Component A",
      component: ComponentA,
    },
    {
      id: "b",
      label: "Component B",
      component: ComponentB,
    },
    {
      id: "c",
      label: "Component C",
      component: ComponentC,
    },
    {
      id: "d",
      label: "Component D",
      component: ComponentD,
    },
  ];
  return (
    <>
      <TabsList tabs={tabsList} />
    </>
  );
}

export default App;
