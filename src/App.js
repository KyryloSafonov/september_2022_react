import './App.css';
import { ImageBlock } from "./components/ImageBlock/ImageBlock";

const App = () => {
    const url = 'https://www.seekpng.com/png/detail/69-690313_bart-simpsons-png-bart-simpson-ass.png'
    return (
        <div className="App">
            <div className="App">
                <ImageBlock url={url} bool={false}/>
            </div>
        </div>
    );
}

export default App;
