import thajImage from "./assets/thaj.jpg";
import "./App.css";


function App() {
  return (
    <>
      <h3>Taj Mahal</h3>
      <img
        src={thajImage} // Use the imported image
        alt="The Taj Mahal"
        width="500px"
        height="500px"
      />
      <p>The Taj Mahal, a UNESCO World Heritage site, is a stunning white marble mausoleum built by Mughal emperor Shah Jahan in the 17th century, as a tomb for his wife Mumtaz Mahal, located on the south bank of the Yamuna river in Agra, India. </p>
    </>
  );
}

export default App;

