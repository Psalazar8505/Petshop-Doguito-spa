import { useParams } from "react-router-dom";
import ListPost from "../Components/ListPost";

const SubCategoria = () => {
    const { subcategoria } = useParams ()
    return (
        <ListPost url={`/posts?subcategoria=${subcategoria}`}/>
    )
}

export default SubCategoria