import "./App.css";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import Label from "./components/Label/Label";
import Text from "./components/Text/Text";
import HeroImage from "./components/HeroImage/HeroImage";
import Img from "./components/Img/Img";
import Dropdown from "./components/Dropdown/Dropdown";
import RadioButton from "./components/RadioButton/RadioButton";
import Table from "./components/Table/Table";
import TableHeader from "./components/TableHeader/TableHeader";
import TableRow from "./components/TableRow/TableRow";
import TableCell from "./components/TableCell/TableCell";
import TableFooter from "./components/TableFooter/TableFooter";
import heroImg from "./components/HeroImage/hero.jpg";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>
        Jasdeep Kaur - UI Component Library
      </h1>

      <section>
        <h2>Hero Image</h2>
        <HeroImage src={heroImg} alt="Hero Banner" />
      </section>

      <section>
        <h2>Buttons</h2>
        <Button label="Primary" onClick={() => alert("Clicked!")} />
        <Button label="Disabled" disabled={true} />
      </section>

      <section>
        <h2>Labels</h2>
        <Label text="Sample Label" />
      </section>

      <section>
        <h2>Text</h2>
        <Text content="This is a sample text component." />
      </section>

      <section>
        <h2>Card</h2>
        <Card
          title="Sample Card"
          description="This is a card component with a title and description."
        />
      </section>

      <section>
        <h2>Image</h2>
        <Img src={heroImg} alt="Sample" width="300" />
      </section>

      <section>
        <h2>Dropdown</h2>
        <Dropdown
          options={["Option 1", "Option 2", "Option 3"]}
          onChange={(e) => console.log(e.target.value)}
        />
      </section>

      <section>
        <h2>Radio Buttons</h2>
        <RadioButton
          label="Option A"
          name="radio"
          checked={false}
          onChange={() => {}}
        />
        <RadioButton
          label="Option B"
          name="radio"
          checked={true}
          onChange={() => {}}
        />
      </section>

      <section>
        <h2>Table</h2>
        <Table>
          <TableHeader>Name</TableHeader>
          <TableRow>
            <TableCell>Jasdeep Kaur</TableCell>
            <TableCell>Developer</TableCell>
          </TableRow>
          <TableFooter>End of Table</TableFooter>
        </Table>
      </section>
    </div>
  );
}

export default App;
