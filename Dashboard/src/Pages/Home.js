import { Provider } from 'react-redux';
import '../App.css';

import Counter from '../components/Counter';
import Editor from "../components/Editor"
import User from '../components/User';
import { Form } from '../components/Form';
import store from '../utils/AppStore';
import Bezier from '../components/Beizer';


function Home() {
  return (
    <>
      <div className='bg-[#0F172A] flex flex-col lg:flex-row gap-2 mb-3 font-inter'>
        <Counter/>
        <Provider store={store}>
          <Editor/>
        </Provider>
      </div>
      
      <div className='flex flex-col lg:flex-row gap-2'>
      <Provider store={store}>
        <User/>
        <Form/>
      </Provider>
      </div>

      <Bezier/>
      
    </>
  );
}

export default Home;
