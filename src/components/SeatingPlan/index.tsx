import { InfoCircleOutlined } from "@ant-design/icons";
import { Input, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import React, { useState } from "react";
import BaseComponent from "../BaseComponent";
import { useSearchCallback } from "./hooks";
import { seating } from "./seating-arrangement";
import styles from "./styles.module.css";

type Props = {
  id: string
}

const tableNames = new Set(seating.map(e => e.tableName.toUpperCase()));

const columns: ColumnsType<typeof seating[0]> = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "No.",
    dataIndex: "table",
    width: 50,
  },
  {
    title: "Table Name",
    dataIndex: "tableName",
    width: 100,
  }
];


const SeatingPlan: React.FC<Props> = ({id}) => {
  const [seatingData, setSeatingData] = useState(seating);
  const search = useSearchCallback();

  return (
    <BaseComponent
      id={id}
      title="Seating"
    >
      <Input
        placeholder="Type in your name to find your table"
        onChange={onChange}
        className={styles.inputBox}
      />
      <Table
        className={styles.table}
        columns={columns}
        dataSource={seatingData}
        scroll={{y: 180}}
        pagination={false}
        rowKey="name"
        size="small"
        footer={Footer}
      />
    </BaseComponent>
  );

  function onChange({target: {value = ""}}: React.ChangeEvent<HTMLInputElement>) {
    value = value.toUpperCase();

    if (value.length === 0) {
      setSeatingData(seating);
    } else if (isTable(value)) {
      setSeatingData(seating.filter(s =>
        s.tableName.toUpperCase() === value ||
        s.table === parseInt(value))
      );
    } else {
      const results = search(value) || [];
      setSeatingData(results.map(x => x.choice));
    }
  }

  function isTable(value: string) {
    return tableNames.has(value.toUpperCase()) || !!value.match(/^\d+$/);
  }
};

const Footer = () => (
  <div className={styles.footer}><InfoCircleOutlined/> The tables are named after our future cats. 🐈</div>
);

export default SeatingPlan;