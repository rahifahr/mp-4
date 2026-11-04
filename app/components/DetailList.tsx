import { Fragment } from "react";
import type { OptionalText } from "../lib/types";

type DetailItem = {
    label: string;
    value: OptionalText;
};

type DetailListProps = {
    items: DetailItem[];
};

export default function DetailList({ items }: DetailListProps) {
    const filled = items.filter((item) => item.value);

    return (
        <dl className="detail-list">
            {filled.map((item) => (
                <Fragment key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                </Fragment>
            ))}
        </dl>
    );
}