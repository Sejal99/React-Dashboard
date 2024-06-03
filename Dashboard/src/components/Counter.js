import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Button } from './Button';
import { Bar } from './Bar';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const AddHandler = () => {
    setCounter(counter + 1);
  };

  const DeductHandler = () => {
    setCounter(counter - 1);
  };

  const ResetHandler = () => {
    setCounter(0);
  };

  const colorAnimation = useSpring({
    backgroundColor: `rgba(255, 182, 193, ${Math.min(counter / 10, 1)})`,
    config: {
      duration: 500,
      easing: t => t * t * (3 - 2 * t),
    },
  });

  return (
    <animated.div className="font-inter w-[100%] lg:w-[60%] m-3"
      style={{
        ...colorAnimation,
        padding: '5em',
        borderRadius: '8px',
        border: '1px solid white',
        boxShadow: '0px 4px 6px white',
      }}
    >
      <Bar content={counter}/>
      <h1 className="m-2 font-semibold text-center text-gray-50 text-2xl">Counter</h1>
      <div className="flex gap-2 justify-center">
        <Button name="+" handler={AddHandler} width="w-[20%] lg:w-[10%]"/>
        <Button name="Reset" handler={ResetHandler} isOutlined width="w-[60%] lg:w-[30%]" />
        <Button name="-" handler={DeductHandler} width="w-[20%] lg:w-[10%]"/>
      </div>
    </animated.div>
  );
};

export default Counter;
