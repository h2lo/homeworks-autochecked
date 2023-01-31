import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{
                // стили для слайдера // пишет студент
                width: '147px',
                height: '4px',
                '& .MuiSlider-track': {
                    color: '#00CC22'
                },
                '& .MuiSlider-rail': {
                    color: '#8B8B8B'
                },
                '& .MuiSlider-thumb': {
                    color: 'white',
                    height: '18px',
                    width: '18px',
                    border: '1px solid #00CC22'
                },
                '& .MuiSlider-thumb:after': {
                    backgroundColor: '#00CC22',
                    height: '6px',
                    width: '6px',
                    top: '50%',
                    left: '50%'
                }
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}
export default SuperRange
