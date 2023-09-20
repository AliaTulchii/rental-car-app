import { StyledOverlay } from './Loader.styled';

const { ColorRing } = require('react-loader-spinner');

const Loader = () => {
  return (
    <StyledOverlay>
      <ColorRing
        visible={true}
        height="120"
        width="120"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#54ADFF', '#FFF', '#54ADFF', '#FFF', '#54ADFF']}
      />
    </StyledOverlay>
  );
};

export default Loader;
