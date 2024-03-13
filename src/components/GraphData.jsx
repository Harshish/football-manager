import BarGraph from "./BarGraph";
import RadarGraph from "./RadarGraph";

export default function GraphData({ data }) {
  if (Object.entries(data).length === 0) {
    return (
      <div className="container-fluid" style={{ padding: 10, marginTop: 10 }}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title text-center">No Players Selected</h5>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="container-fluid" style={{ padding: 10, marginTop: 10 }}>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <BarGraph name="Height" info={data} units="(cm)" />
        <BarGraph name="Weight" info={data} units="(kg)" />
        <BarGraph name="Age" info={data} units="(years)" />
        <RadarGraph name="Skills" info={data}></RadarGraph>
      </div>
    </div>
  );
}
