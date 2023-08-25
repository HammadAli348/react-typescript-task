import React from "react";
import { Card } from "react-bootstrap";
import { CheckboxItem } from "../interface/CheckboxItem";

interface CheckboxListGroupProps {
  items: CheckboxItem[];
  onItemSelect: (itemId: number) => void;
}

const CheckboxListGroup: React.FC<CheckboxListGroupProps> = ({
  items,
  onItemSelect,
}) => {
  return (
    <>
      {items?.map((item) => (
        <Card key={item.id} className="task-cards mt-1">
          <Card.Body key={item.id}>
            <input type="checkbox" onChange={() => onItemSelect(item.id)} />
            {item.name}
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default CheckboxListGroup;
