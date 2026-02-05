import { useState } from 'react';

const Exam3 = () => {

  const [input, setInput] = useState('123456');

  const onChangeInput = (e) => {
    setInput(e.target.value);
  };

  const onClickButton = () => {
    setInput('');
  };

  return (
    <div>
      <input 
        type="text" 
        value={input} 
        onChange={onChangeInput}
      />
      <p>{input}</p>
      <button onClick={onClickButton}>
        클릭시 소멸
      </button>
    </div>
  );
};

export default Exam3;
