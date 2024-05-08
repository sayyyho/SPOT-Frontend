import Header from "@/components/Common/Header/index.jsx";
import PropTypes from "prop-types";

const Layout = (props) => {
  return (
    <div>
      {props.showHeader && <Header />}
        {props.children}
    </div>
  );
};

Layout.propTypes = {
  showHeader: PropTypes.bool,
};

export default Layout;
