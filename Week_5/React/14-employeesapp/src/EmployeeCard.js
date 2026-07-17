import { useContext } from "react";
import Styles from "./EmployeeCard.module.css";
import ThemeContext from "./ThemeContext";

function EmployeeCard(props) {

  const theme = useContext(ThemeContext);

  return (
    <div className={Styles.Card}>
      <h3>{props.employee.name}</h3>

      <p>{props.employee.email}</p>

      <p>{props.employee.phone}</p>

      <p>
        <button className={Styles[theme]}>Edit</button>

<button className={Styles[theme]}>Delete</button>
      </p>
    </div>
  );
}

export default EmployeeCard;