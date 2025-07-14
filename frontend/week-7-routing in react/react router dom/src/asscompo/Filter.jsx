import { useRecoilState } from "recoil";
import { filterAtom } from "../store/atoms/count";

function Filter() {
    const [filter, setFilter] = useRecoilState(filterAtom);

    return (
        <div>
            <input 
                type="text"
                value={filter}
                onChange={(e) =>setFilter(e.target.value)}
                placeholder="Search todos"
            />
        </div>
    );
}

export default Filter;