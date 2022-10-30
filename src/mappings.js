import Links from "./components/Links";
import { data } from "./Data";
const Body = () => {
  return (
    <div>
      {data.map(({ id, title, description, link }) => (
        <div className="body-container" key={id}>
          <Links title={title} link={link} key={id} />
        </div>
      ))}
    </div>
  );
};

export default Body;
