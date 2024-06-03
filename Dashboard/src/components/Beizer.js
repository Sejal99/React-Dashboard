import { useSpring, animated } from "@react-spring/web";

const Bezier = () => {
  const animationProps = useSpring({
    from: { backgroundPosition: '0% 50%' },
    to: { backgroundPosition: '100% 50%' },
    config: {
      duration: 10000,
      easing: t => t * t * (3 - 2 * t) 
    },
    loop: { reverse: true } 
  });

  return (
    <div
      className="border-white border 1 px rounded-md mt-5"
      style={{
        ...animationProps,
        height: '240px',
        width: '100%',
        background: 'linear-gradient(#F472B6, #F4B6FF)',
        backgroundSize: '300% 100%'
      }}
    >
      <p style={{ color: 'white', textAlign: 'center', paddingTop: '50px' }}>
      Elegant and Seamless Bezier
      </p>
      <p className="border-white border 1 px rounded-md" style={{ color: 'white', textAlign: 'center', paddingTop: '50px' }}>
      Elegant and Seamless Bezier
      </p>
      <p className="border-white border 1 px rounded-md" style={{ color: 'white', textAlign: 'center', paddingTop: '50px' }}>
      Elegant and Seamless Bezier
      </p>
    </div>
  );
};

export default Bezier;
