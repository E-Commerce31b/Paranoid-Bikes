import { createSlice, createEntityAdapter, current } from '@reduxjs/toolkit'

export const filtersAdapter = createEntityAdapter()
export const filtersSelectors = filtersAdapter.getSelectors(state => state.filters)

const filtersSlice = createSlice({
    name: 'filters',
    initialState: filtersAdapter.getInitialState(),
    reducers: {
    addFilter: filtersAdapter.upsertOne,
    removeFilter: filtersAdapter.removeOne,
    removeAll: filtersAdapter.removeAll
    }
});

export const { addFilter, removeFilter, removeAll } = filtersSlice.actions

export default filtersSlice.reducer