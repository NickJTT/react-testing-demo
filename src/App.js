import Header from './components/Header/Header';
import Headline from './components/Headline/Headline';

const data = [{
  firstName: 'Nick',
  lastName: 'JTT',
  email: 'nickjtt357@gmail.com',
  age: 24,
  onlineStatus: true
}];

export default function App() {
  return <>
    <Header/>
    <Headline header = 'Posts' description = 'Click the button to render posts' data = { data }/>
  </>;
}
