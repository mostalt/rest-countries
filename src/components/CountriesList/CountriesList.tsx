import React from 'react'
import styled from 'styled-components'

import { devices } from '../../media'
import { CoutriesContext } from '../../services/countries'
import { Card } from '../../components/Card'
import { CountriesDict } from '../../types/common'

const Container = styled.div`
  max-width: 1440px;
  display: flex;
  justify-content: column;
  align-items: flex-start;
  justify-content: center;
  padding: 50px 10px;
  margin: 0 auto;
`

const ListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0;
  list-style-type: none;
  text-align: left;
  padding-left: 0;

  @media ${devices.mobile} {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
`

const CardWrapper = styled.li`
  max-width: 300px;
  margin-bottom: 60px;

  @media ${devices.mobile} {
    max-width: 500px;
  }
`

interface CountriesListView {
  countries: CountriesDict
}

const CountriesListView = ({ countries }: CountriesListView) => {
  return (
    
    <ListWrapper>
      {Object.keys(countries).map((key) => {
        const { iata, name, population, region, capital } = countries[key]

        return (
          <CardWrapper>
            <Card
              key={`${name}-${region}`}
              iata={iata}
              name={name}
              population={population}
              region={region}
              capital={capital ? capital.join(', ') : undefined}
            />
          </CardWrapper>
          )
      })}
    </ListWrapper>
  )
}

export const CountriesList = () => {
  return (
    <CoutriesContext.Consumer>
      {({ isLoading, countries }) => (
        <Container>
          {isLoading && <div>Loading...</div>}

          <ListWrapper>
            <CountriesListView countries={countries} />
          </ListWrapper>
        </Container>
      )}
    </CoutriesContext.Consumer>
  )
}

