import "./Galaxy.css";

export default function Galaxy(props) {
  return (
    <div className="container-card">
      {props.galaxies.map((n) => (
        <div className="card" key={n.id}>
          <div>
            ({n.id}) {n.name}
          </div>
          <div>{n.diameter}</div>
        </div>
      ))}
    </div>
  );
}
