import { ResponsiveRadar } from "@nivo/radar";

export default function RadarGraph({ name, info }) {
  var result = Object.values(info);

  let skills = ["Ball Control", "Passing Under Pressure", "Dribble Skills"];
  let gd = [];
  let players = [];
  skills.forEach((skill) => {
    let obj = { Skill: skill };
    result.forEach((element) => {
      obj[element["Player"]] = element[skill];
      if (gd.length === 0) {
        players.push(element["Player"]);
      }
    });
    gd.push(obj);
  });

  return (
    <div className="col">
      <div className="card">
        <div className="card-body" style={{ height: 400 }}>
          <h5 className="card-title">{name}</h5>
          <ResponsiveRadar
            data={gd}
            keys={players}
            indexBy="Skill"
            valueFormat=">-.2f"
            margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
            borderColor={{ from: "color" }}
            gridLabelOffset={36}
            dotSize={10}
            dotColor={{ theme: "background" }}
            dotBorderWidth={2}
            colors={{ scheme: "nivo" }}
            blendMode="multiply"
            motionConfig="wobbly"
            legends={[
              {
                anchor: "top-left",
                direction: "column",
                translateX: -50,
                translateY: -40,
                itemWidth: 80,
                itemHeight: 20,
                itemTextColor: "#999",
                symbolSize: 12,
                symbolShape: "circle",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: "#000",
                    },
                  },
                ],
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
