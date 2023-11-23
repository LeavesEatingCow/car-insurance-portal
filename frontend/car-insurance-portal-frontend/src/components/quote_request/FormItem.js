import { Form } from "react-bootstrap";
import {useState} from "react";
const FormItem = ({ item, onChange, response }) => {
  const [currentValue, setCurrentValue] = useState(response || null);
  switch(item.type) {
    case "text":
      return (
        <>
          <Form.Label>{item.label}</Form.Label>
          <Form.Control
            type="text"
            id={item.label}
            onChange={(e) => onChange(e.target.value, item.value)}
            value={currentValue}
          />
        </>
      );

    case "select":
      return (
        <div className="mt-2">
          <Form.Select aria-label={item.label} value={currentValue} onChange={(e) => onChange(e.target.value, item.value)}>
            <option value="">{item.label}</option>
            {item.options.map((opt, index) => (
              <option key={index} value={opt}>{opt}</option>
            ))}
          </Form.Select>
        </div>
      );

    case "textarea":
      return (
        <>
          <Form.Label>{item.label}</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            onChange={(e) => onChange(e.target.value, item.value)}
            value={currentValue}
          />
        </>
      );

    case "checkboxGroup":
      const handleCheckboxChange = (checked, option) => {
        const updatedValues = checked
          ? [...(currentValue || []), option]
          : (currentValue || []).filter(val => val !== option);
        onChange(updatedValues, item.value);
      };

      return (
        <div>
          {item.options.map((option, index) => (
            <Form.Check
              key={index}
              type="checkbox"
              label={option}
              onChange={(e) => handleCheckboxChange(e.target.checked, option)}
              checked={currentValue?.includes(option)}
            />
          ))}
        </div>
      )

    default:
      return <div>Unsupported item type</div>;
  }
}

export default FormItem;