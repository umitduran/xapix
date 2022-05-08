import React from 'react';
import { GetServerSideProps } from 'next';
import Layout from '../components/Layout';
import Post, { PostProps } from '../components/Post';
import { Table } from 'antd';
import ReportTable, {
  ReportTableProps,
} from '../components/ReportTable/ReportTable';

type Props = {
  financials: ReportTableProps;
};

const Index: React.FC<Props> = (props) => {
  return (
    <Layout>
      <ReportTable financials={props.financials} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('http://localhost:3001/financials');
  const financials = await res.json();
  return {
    props: { financials },
  };
};

export default Index;
