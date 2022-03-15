import React from 'react'
import styled from 'styled-components'

import { devices } from '../../media'

interface CardProps {
  iata: string
  name: string
  population: number
  region: string

  capital?: string
}

const CardWrapper = styled.div`
  background: ${({ theme }) => theme.elementColor};
  min-height: 380px;
  box-shadow: 0 0 0 transparent;
  transition: box-shadow 0.25s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: 0 8px 16px rgba(0,0,0,.08);
  }

  @media ${devices.mobile} {
    min-height: auto;
  }
`

const FlagWrapper = styled.div`
  min-height: 230px;

  @media ${devices.mobile} {
    min-height: auto;
  }
`

const Flag = styled.img`
  width: 100%;
`

const InfoWrapper = styled.div`
  min-height: 210px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 40px;
  text-align: left;
`

const Title = styled.div`
  font-size: 20px;
  font-weight: 800;
`

const DetailsWrapper = styled.div`
  margin-top: 20px;
`
const DetailRow = styled.div`
  padding-top: 5px;
  font-size: 16px;

  &:first-child {
    padding-top: 0;
  }
`

const DetailTitle = styled.span`
  font-weight: 600;
`

export const Card = ({
  iata,
  name,
  population,
  region,
  capital
}: CardProps) => {
  return (
    <CardWrapper>
      <FlagWrapper>
        <Flag
          title={iata}
          alt={iata}
          src={`https://flagcdn.com/w320/${iata.toLocaleLowerCase()}.png`}
        />
      </FlagWrapper>
      <InfoWrapper>
          <Title>{name}</Title>
          <DetailsWrapper>
              <DetailRow>
                <DetailTitle>Population: </DetailTitle>
                {/* todo: format number */}
                <span>{population}</span>
              </DetailRow>
              <DetailRow>
                <DetailTitle>Region: </DetailTitle>
                  <span>{region}</span>
              </DetailRow>
              {capital && <DetailRow>
                <DetailTitle>Capital: </DetailTitle>
                  <span>{capital}</span>
              </DetailRow>}
          </DetailsWrapper>
      </InfoWrapper>
    </CardWrapper>
  )
}