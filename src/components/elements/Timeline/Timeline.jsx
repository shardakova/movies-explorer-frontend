import './Timeline.sass';

function Timeline (props) {
  const { items } = props;
  const weightsSum = items.reduce((sum, item) => sum + item.weight, 0);

  return (
    <div className="timeline">
      {items.map((item, index) => (
        <div key={index} className="timeline__item" style={{ width: `${(item.weight / weightsSum) * 100}%` }}>
          <div className={`timeline__time ${item.completed ? 'timeline__time_completed' : ''}`}>
            {item.time}
          </div>
          <section className="timeline__description">
            {item.description}
          </section>
        </div>
      ))}
    </div>
  );
}

export default Timeline;
