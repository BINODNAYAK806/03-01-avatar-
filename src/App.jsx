import logo from './logo.svg';
import './App.css';
import Avtar from './Components/Avtar';
import Navbar from './Components/navbar';
import NavigationBar from './Components/nav';
// import 'bootstrap/dist/css/bootstrap.min.css';

const userDetails = [
  {
    img_url: "https://avatars.githubusercontent.com/u/95870032?v=4"
  },

  {
    img_url:
      "https://rukminim1.flixcart.com/image/200/200/xif0q/shirt/b/w/o/s-c301-white-dennis-lingo-original-imafw2ggrk5epcfu-bb.jpeg?q=90"
  },
  {
    img_url:
      "https://rukminim1.flixcart.com/image/200/200/xif0q/shirt/a/c/c/40-assfwmofv18960-allen-solly-original-imaft9us8uwwfsbe-bb.jpeg?q=90"
  }
];

// function Button() {

//   return <button>med</button>

// }

// const dis = userDetails.map((user) => (
//   <div>
//     <Avtar src={user.img_url} />
//   </div>
// ));
function App() {
  
    // return <div className="App">{dis}</div>
    return userDetails.map((user) => (
      <div>
        <Navbar/>
        <NavigationBar/>
        <Avtar src={user.img_url} />

      </div>
    ))
  
}

export default App;