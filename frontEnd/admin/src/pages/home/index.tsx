import { useDispatch, useSelector } from "react-redux";
import { actions } from "@/redux/slice";
import { IListItem, pageState } from "@/interface/types";
function Home() {
  const dispatch = useDispatch();
  const { dataList, flag } = useSelector((state: pageState) => state);

  const getData = () => {
    // dispatch(testApi());
  };
  const itemClickhandle = (item: IListItem, index: number) => {
    dispatch(actions.updateItem(index));
    dispatch(actions.updateFlag());
  };

  getData();

  return (
    <div className="test-page-container">
      {dataList.map((item, index) => (
        <p
          className="list-item"
          key={item.age}
          onClick={() => itemClickhandle(item, index)}
        >
          {`name is ${item.name}---age is ${item.age} &&& flag is ${flag}`}
        </p>
      ))}
    </div>
  );
}
export default Home;
