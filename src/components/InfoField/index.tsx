import React, { ReactNode } from "react";

interface InfoFieldProps {
  label: string;
  value: ReactNode;
}

const InfoField: React.FC<InfoFieldProps> = ({ label, value }) => (
  <p>
    {label}: <b>{value}</b>
  </p>
);

export default InfoField;
