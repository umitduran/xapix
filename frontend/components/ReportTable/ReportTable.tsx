import React, { useEffect, useState } from 'react';
import { styles } from './ReportTable.styles';
import { Table } from 'antd';
import { MONTHS } from '../../utils';
import moment from 'moment';
import { groupBy } from 'lodash';

interface IReportTableProps {
  id: number;
  groupId: string;
  postedDate: string;
  orderId: string;
  type: string;
  subType: string;
  currencyAmount: number;
  currencyCode: string;
}
export type ReportTableProps = IReportTableProps[];

const PRODUCT_SALES = {
  type: 'charge',
  subType: 'principal',
};
const SHIPPING_REVENUE = {
  type: 'charge',
  subType: 'shipping',
};
const OTHER_INCOME = {
  type: 'charge',
  subType: 'wrapping',
};
const CHARGE_TYPE = 'charge';
// @ts-ignore
const monthObject = Object.assign(...MONTHS());

const ReportTable: React.FC<{ financials: ReportTableProps }> = ({
  financials,
}) => {
  const getFinancialByType = (type: string) => {
    return financials.filter((financial) => financial.type === type);
  };

  const [financialByType, setFinancialByType] = useState<ReportTableProps>(
    getFinancialByType(CHARGE_TYPE)
  );
  const [productSales, setProductSales] = useState({});
  const [shippingRevenue, setShippingRevenue] = useState({});
  const [otherIncome, setOtherIncome] = useState({});
  const [dataSource, setDataSource] = useState([]);

  const getFinancialBySubType = (subType: string) => {
    return financialByType
      .filter((financial) => financial.subType === subType)
      .map((el) => {
        return {
          ...el,
          month: moment(el.postedDate).month() + 1,
          year: moment(el.postedDate).year(),
        };
      });
  };

  const getRowObject = ({ name, subType }) => {
    const rowObject = {
      name,
    } as any;
    const financialBySubType = getFinancialBySubType(subType);
    const groupByMonth = groupBy(financialBySubType, 'month');
    Object.entries(groupByMonth).forEach(([key, value]) => {
      // @ts-ignore
      rowObject[key] = value.reduce(
        (acc, curr) => acc + curr?.currencyAmount,
        0
      );
    });
    return rowObject;
  };

  useEffect(() => {
    setProductSales(
      getRowObject({ name: 'Product Sales', subType: PRODUCT_SALES.subType })
    );
    setShippingRevenue(
      getRowObject({
        name: 'Shipping Revenue',
        subType: SHIPPING_REVENUE.subType,
      })
    );
    setOtherIncome(
      getRowObject({ name: 'Other Income', subType: OTHER_INCOME.subType })
    );
    setDataSource([productSales, shippingRevenue, otherIncome]);
    console.log(
      getRowObject({ name: 'Other Income', subType: OTHER_INCOME.subType })
    );
    console.log([productSales, shippingRevenue, otherIncome]);
    setDataSource([productSales, shippingRevenue, otherIncome]);
    //todo: change the dependency to the financials
  }, []);

  //todo: separate it
  const columns = [
    {
      title: 'Type',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '2021 01',
      dataIndex: '1',
      key: '1',
    },
    {
      title: '2021 02',
      dataIndex: '2',
      key: '2',
    },
  ];

  return (
    <div style={styles.Container}>
      <h1>Report</h1>
      <Table dataSource={dataSource} columns={columns}></Table>
    </div>
  );
};

export default ReportTable;
