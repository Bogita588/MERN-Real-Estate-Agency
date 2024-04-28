import { listData } from "../../lib/dummydata";
import "./listPage.scss";
import Filter from "../../components/filter/Filter"
import Card from "../../components/card/Card"
import Map from "../../components/map/Map";

function CustomListPage() {
  const data = listData;

  return (
    <div className="customListPage">
      <div className="customListContainer">
        <div className="customWrapper">
          <Filter />
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="customMapContainer">
        <Map items={data} />
      </div>
    </div>
  );
}

export default CustomListPage;