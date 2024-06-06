import NestedCheckbox from "./NestedCheckbox";

const App = () => {
  return (
    <div>
      <NestedCheckbox label="Parent Checkbox">
        <span>Child 1</span>
        <span>Child 2</span>
        <span>Child 3</span>
      </NestedCheckbox>
    </div>
  );
};

export default App;