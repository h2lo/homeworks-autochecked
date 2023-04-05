import React, {ChangeEvent} from 'react'
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect'
import {Pagination} from '@mui/material'
import s from './SuperPagination.module.css'

export type SuperPaginationPropsType = {
    id?: string
    page: number
    itemsCountForPage: number
    totalCount: number
    onChange: (page: number, count: number) => void
}

const SuperPagination: React.FC<SuperPaginationPropsType> = (
    {
        page, itemsCountForPage, totalCount, onChange, id = 'hw15',
    }
) => {

    const lastPage = Math.ceil(totalCount / itemsCountForPage)
    // пишет студент // вычислить количество страниц

    const onChangeCallback = (event: any, page: number) => {
        // пишет студент
        // debugger
        const count = event.currentTarget.value
            ? +event.currentTarget.value
            : itemsCountForPage
        onChange(page, count)
    }

    const onChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
        // пишет студент
        // console.log(event.currentTarget.value)
        onChangeCallback(event, page)
    }

    return (
        <div className={s.pagination}>
            <Pagination
                id={id + '-pagination'}
                sx={{
                    // стили для Pagination // пишет студент
                }}
                page={page}
                count={lastPage}
                onChange={onChangeCallback}
                hideNextButton
                hidePrevButton
                shape="rounded"
                color="primary"
            />

            <span className={s.text1}>
                Показать
            </span>

            <SuperSelect
                id={id + '-pagination-select'}
                value={itemsCountForPage}
                options={[
                    {id: 4, value: 4},
                    {id: 7, value: 7},
                    {id: 10, value: 10},
                ]}
                onChange={onChangeSelect}
                style={{width: '60px'}}
            />

            <span className={s.text2}>
                строк в таблице
            </span>
        </div>
    )
}

export default SuperPagination