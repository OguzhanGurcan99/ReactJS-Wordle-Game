import WordleApp from './components/WordleApp';
import myData from './data/data.json';


const App = () => {
  
  const randomIndex = Math.floor(Math.random() * myData.length);
  const randomWord = myData[randomIndex].name;

  return (
    
    <WordleApp random= {randomWord}></WordleApp>
  )

};
export default App;
