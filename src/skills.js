import React from 'react';

const Skills = () => {
  const [count, setCount] = React.useState(0);
  const countRef = React.useRef(0);

  React.useEffect(() => {
    const handleScroll = () => {
      if (countRef.current === 0 && window.pageYOffset + window.innerHeight > document.getElementById('skills-section').offsetTop) {
        const intervalId = setInterval(() => {
          if (countRef.current < 10) {
            setCount((prevCount) => prevCount + 1);
            countRef.current += 1;
          } else {
            clearInterval(intervalId);
          }
        }, 1000);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="skills-section">
      <div className="skills-container">
        <div className="skill-item">
          <h3>JavaScript</h3>
          <p>{count*6}%</p>
        </div>
        <div className="skill-item">
          <h3>React</h3>
          <p>{count*7}%</p>
        </div>
        <div className="skill-item">
          <h3>Laravel</h3>
          <p>{count*7}%</p>
        </div>
        <div className="skill-item">
          <h3>Python</h3>
          <p>{count*5}%</p>
        </div>
        <div className="skill-item">
          <h3>Css</h3>
          <p>{count*8}%</p>
        </div>
        <div className="skill-item">
          <h3>Mysql</h3>
          <p>{count*8}%</p>
        </div>
        <div className="skill-item">
          <h3>MongoDB</h3>
          <p>{count*8}%</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
