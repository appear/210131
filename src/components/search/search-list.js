import React from 'react'
import styled from 'styled-components'

import Container from '../shared/container'
import Text from '../shared/text'

const Title = styled(Text)`
  float: left;
  display: inline-block;
`

const RemoveText = styled.span`
  float: right;
  color: #a7a7a7;
`

const KeywordContainer = styled.li`
  overflow: hidden;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`

const RemoveButton = styled.button`
  float: right;
  color: #0cde8b;
  border: 1px solid #0cde8b;
  padding: 3px 5px;
  border-radius: 15px;
  background: #fff;
`

const Keyword = styled.span`
  font-size: 18px;
  font-weight: 400;
`

function SearchList({ keywords, onRemoveKeyword }) {
  if (!keywords.length) {
    return <Container margin="20px">최근 검색어가 없습니다.</Container>
  }

  return (
    <Container padding="18px">
      <Container overflow="hidden">
        <Title color="#666">최근 검색어</Title>
        <RemoveText>전체삭제</RemoveText>
      </Container>
      <Container margin="10px 0" as="ul">
        {keywords.map((keyword) => {
          return (
            <KeywordContainer key={keyword.id}>
              <Keyword>{keyword.text}</Keyword>
              <RemoveButton onClick={() => onRemoveKeyword(keyword.id)}>
                삭제
              </RemoveButton>
            </KeywordContainer>
          )
        })}
      </Container>
    </Container>
  )
}

export default SearchList
