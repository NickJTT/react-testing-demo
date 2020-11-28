import Header from './components/Header/Header';
import Headline from './components/Headline/Headline';

export default function App() {
  return <>
    <Header/>
    <Headline header = 'Posts' description = 'Click the button to render posts'/>
  </>;
}
