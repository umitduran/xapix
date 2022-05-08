import React from 'react';
import { Col, Image, Layout, Row, Typography } from 'antd';
import 'antd/dist/antd.css';
import { styles } from './Header.styles';
const { Header: AntHeader } = Layout;
const { Title } = Typography;

const Header: React.FC = () => {
  return (
    <>
      <Layout>
        <AntHeader style={styles.Header}>
          <Row>
            <Col flex={2}>
              <Image
                src="https://assets-global.website-files.com/5fbd1f90c46914dfad58597c/5fbfe35870905e2f80a97d74_Logo%20%26%20Text%20-%20Dev.png"
                srcSet="https://assets-global.website-files.com/5fbd1f90c46914dfad58597c/5fbfe35870905e2f80a97d74_Logo%20%26%20Text%20-%20Dev-p-500.png 500w, https://assets-global.website-files.com/5fbd1f90c46914dfad58597c/5fbfe35870905e2f80a97d74_Logo%20%26%20Text%20-%20Dev-p-800.png 800w, https://assets-global.website-files.com/5fbd1f90c46914dfad58597c/5fbfe35870905e2f80a97d74_Logo%20%26%20Text%20-%20Dev.png 1000w"
                height=""
                sizes="(max-width: 479px) 66vw, (max-width: 767px) 130px, 110px"
                alt=""
                className="logo-image"
              />
            </Col>
            <Col flex={3}>
              <Title level={2} style={styles.HeaderTitle}>
                Welcome to Umit's Challenge
              </Title>
            </Col>
          </Row>
        </AntHeader>
      </Layout>
    </>
  );
};

export default Header;
