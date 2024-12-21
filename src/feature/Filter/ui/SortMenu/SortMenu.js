import { sortData } from '../../lib/sortData'
import { useDispatch, useSelector } from 'react-redux';
import { setSort } from '../../model/sortSlice';
import { Selected } from '../../../../entities/Selected/Selected';

export const SortMenu = () => {

    const selectedOption = useSelector(state => state.sort)
    const dispatch = useDispatch()

    const handleSortSelect = (value, label) => {
        dispatch(setSort({value, label}))
    }

    return (
        <Selected 
            sortOptions={sortData}
            selectedOption={selectedOption}
            onSortChange={handleSortSelect}
            label='Сортировка:'
        />
    )
}