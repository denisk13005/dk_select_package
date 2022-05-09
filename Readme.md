#dk_select_package

dk_select_package is a customisable select input

###EXAMPLE OF A STYLIZED RENDERING

![Select](./src/assets/img/select.png "select")

## Installation

`npm i dk_select_package`

##

## Usage

This package is made for use in a react application like a registration form for example

#### Example



```
import React, { useState } from "react"
import { SelectDk } from "dk_select_package"

const form = () => {

  const [selectIsOpen, setSelectIsOpen] = useState(false)
  const closeSelect = () => selectIsOpen && setStateOpen(false)
   

  return (
    <form>
      <SelectDk
          datas={states.map((el) => ({
              value: el.abbreviation,
              label: el.name,
            }))}
          update={updateState}
          visibleValue={stateString}
          open={stateOpen}
          setOpen={setStateOpen}
      />
    
    </form>
  )
}



```
