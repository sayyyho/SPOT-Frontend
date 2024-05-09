import * as S from './Layout.styled';
import Header from '@/components/Common/Header/index.jsx';
import PropTypes from 'prop-types';

const Layout = (props) => {
  return (
    <S.Layout gap={props.gap}>
      {props.showHeader && <Header item={props.headerItem} />}
      {props.children}
    </S.Layout>
  );
};

Layout.propTypes = {
  showHeader: PropTypes.bool,
  headerItem: PropTypes.string,
  gap: PropTypes.string,
};

export default Layout;
