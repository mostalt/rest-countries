import React from 'react'

import { CoutriesContext } from '../../services/countries'

export const CountriesList = () => {
  return (
    <CoutriesContext.Consumer>
      {({ isLoading, countries }) => (
        <div>
          {isLoading && <div>Loading...</div>}
          {Object.keys(countries).map((value) => {
            return <div key={value}>{value}</div>
          })}
        </div>
      )}
    </CoutriesContext.Consumer>
  )
}

