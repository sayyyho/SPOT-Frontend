import * as S from './Layout.styled';
import Header from '@/components/Common/Header/index.jsx';
import PropTypes from 'prop-types';

const Layout = (props) => {
  return (
    <S.Layout>
      {props.showHeader && <Header />}
      {props.children}
    </S.Layout>
  );
};

Layout.propTypes = {
  showHeader: PropTypes.bool,
};

export default Layout;
