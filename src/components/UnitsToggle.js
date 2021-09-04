import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@material-ui/core'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setUnits } from '../redux/reducers/weatherSlice'

const UnitsToggle = () => {
  const { units } = useSelector((state) => state.weather)
  const dispatch = useDispatch()

  return (
    <>
      <FormControl component="fieldset">
        <FormLabel component="legend">Tempreture Units</FormLabel>
        <RadioGroup value={units} row>
          <FormControlLabel
            value="C"
            control={
              <Radio
                onChange={(e) => dispatch(setUnits(e.target.value))}
                color="primary"
              />
            }
            label="C"
            labelPlacement="start"
          />
          <FormControlLabel
            value="F"
            control={
              <Radio
                onChange={(e) => dispatch(setUnits(e.target.value))}
                color="primary"
              />
            }
            label="F"
            labelPlacement="start"
          />
        </RadioGroup>
      </FormControl>
    </>
  )
}

export default UnitsToggle
