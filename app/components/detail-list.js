export default function DetailList({ items }) {
    const filled = items.filter((item) => item.value);

    return (
        <dl className="detail-list">
            {filled.map((item) => [
                <dt key={`${item.label}-term`}>{item.label}</dt>,
                <dd key={`${item.label}-value`}>{item.value}</dd>,
            ])}
        </dl>
    );
}