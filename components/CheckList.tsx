import { BadgeCheck } from "lucide-react";

export default function CheckList({ items }) {
  return (
    <ul className="check-list">
      {items.map((item, index) => (
        <li key={index}>
          <BadgeCheck size={18} strokeWidth={2.5} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}