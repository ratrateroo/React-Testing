import "./App.css";
import { Application } from "./components/application/Application";
import { CounterTwo } from "./components/counter-two/CounterTwo";
import { Counter } from "./components/counter/Counter";
import { MuiMode } from "./components/mui/MuiMode";
import { Skills } from "./components/skills/Skills";
import { Users } from "./components/users/Users";
import { AppProviders } from "./providers/AppProviders";

const items = [
  {
    name: "mug",
    price: 100,
  },
  {
    name: "plate",
    price: 150,
  },
];

const countProficiency = (data: typeof lang) => {
  return data.reduce((count, item) => {
    if (item.proficiencyCode === "1") {
      count = count + 1;
    }
    return count;
  }, 0);
};

console.log(countProficiency(lang));

const totalPrice = items.reduce((count, item) => {
  return count + item.price;
}, 0);

console.log(totalPrice);

//allowed conditions:
//truthy condition to satisfy:
// 1 lanugage, 2 proficiencies
//(props.selectedData.length === 1 && props.selectedData.proficiencyCode===3)

const dummyData = [
  { proficiencyCode: "3" },
  { proficiencyCode: "1" },
  // { proficiencyCode: "1" },
];

const lastOneLanguage = (data: typeof lang) => {
  if (!(data.length === 1 && data[0].proficiencyCode === "3")) {
    return false;
  }
  return true;
};

const lastTwoLanguages = (data: typeof lang) => {
  if (data.length === 2) {
    if (
      data[0].proficiencyCode === "1" &&
      (data[1].proficiencyCode === "2" || data[1].proficiencyCode === "3")
    ) {
      return true;
    }
    if (
      data[0].proficiencyCode === "2" &&
      (data[1].proficiencyCode === "1" || data[1].proficiencyCode === "3")
    ) {
      return true;
    }

    if (
      data[0].proficiencyCode === "3" &&
      (data[1].proficiencyCode === "1" || data[1].proficiencyCode === "2")
    ) {
      return true;
    }
  }
  return false;
};

console.log(lastOneLanguage(lang));
console.log(lastTwoLanguages(lang));

// ||
// 2 language, 1 proficiency each
//(props.selectedData.length === 2 && ( ( props.selectedData[0].proficiencyCode===1 && props.selectedData[1].proficiencyCode===2  ) || ( props.selectedData[0].proficiencyCode===2 && props.selectedData[1].proficiencyCode===1  )))

function App() {
  return (
    <AppProviders>
      <div className="App">
        <Application />
        <Skills skills={["HTML", "CSS"]} />
        <Counter />
        <CounterTwo count={1} />
        <Users />
        <MuiMode />
      </div>
    </AppProviders>
  );
}

export default App;
