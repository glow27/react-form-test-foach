import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from './card';

export const Dashboard = () => {
  const employees = useSelector((state) => state.employees);

  return (
    <>
      {employees.map((el, i) => (
        <Card key={i} empl={el} />
      ))}
    </>
  );
};
