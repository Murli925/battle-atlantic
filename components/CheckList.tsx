import { BadgeCheck } from "lucide-react";
import { ReactNode } from "react"

type CheckListItem = {
  text: ReactNode
  children?: string[]
}

type CheckListProps = {
  items: CheckListItem[]
}

export default function CheckList({ items }: CheckListProps) {
  return (
    <ul className="check-list">
      {items.map((item, index) => (
        <li key={index}>
          <BadgeCheck size={18} strokeWidth={2.5} />

          <div>
            <span>{item.text}</span>

            {item.children && (
              <ul className="ml-0 mt-2 space-y-2">
                {item.children.map((child, i) => (
                  <li key={i}><BadgeCheck size={14} strokeWidth={2.5} /> {child}</li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}