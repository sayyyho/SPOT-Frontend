import Box from '../../Box';
export const FindItem = ({placeholder, value, onChange, name}) => {
  return (
    <Box width="100%" height="8%" border="1px solid #ccc" borderRadius="20px">
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          resize: 'none',
          outline: 'none',
          marginBottom: '3%',
          paddingTop: '0.5rem',
        }}
      />
    </Box>
  );
};
