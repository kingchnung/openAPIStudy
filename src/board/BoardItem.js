import { Link } from "react-router";

const BoardItem = ({no, title, name, regDate, hit}) => {
    return (
        <tr className="align-middle">
            <td>{no}</td>
            <td><Link to={`/datail/${no}`} className="link">{title}</Link></td>
            <td>{name}</td>
            <td>{regDate}</td>
            <td>{hit}</td>
        </tr>
    )
}

export default BoardItem;