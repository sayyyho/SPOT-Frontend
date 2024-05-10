import {useState} from 'react';
import Box from '../../Box';
export const FindItem = (props) => {
  const [content, setContent] = useState('');

  const handleChange = (e) => {
    setContent(e.target.value);
    if (e.target.placeholder === 'Swing') {
      localStorage.setItem('prod', e.target.value);
    } else if (e.target.placeholder === '2.3km') {
      localStorage.setItem('dist', e.target.value);
    } else {
      localStorage.setItem('time', e.target.value);
    }
  };

  return (
    <Box
      width="100%"
      height="8%"
      border="1px solid #ccc"
      borderRadius="20px"
      key={props.key}
    >
      <textarea
        value={content}
        onChange={handleChange}
        key={props.key}
        placeholder={props.placeholder}
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          resize: 'none',
          outline: 'none',
          marginBottom: '3%',
        }}
      />
    </Box>
  );
};
