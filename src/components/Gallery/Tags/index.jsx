import styled from 'styled-components'
import Tags from './tags.json'

const TagsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 32px 0;
`

const TagsTitle = styled.h3`
  color: #D9D9D9;
  font-size: 24px;
  margin: 0 32px 0 0;
`

const TagsList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
  gap: 24px;
`

const TagListItem = styled.li`
  font-size: 24px;
  color: #FFFFFF;
  background: rgba(217, 217, 217, 0.3);
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 12px;
  box-sizing: border-box;
  border: 2px solid transparent;
  &:hover {
    border-color: #C98CF1;
  }
  &.active {
    border-color: #C98CF1;
  }
`

const GalleryTags = ({ handleFilterPerTag, selectedTag }) => {
  return (
    <TagsWrapper>
      <TagsTitle>
        Busque por tags:
      </TagsTitle>

      <TagsList>
        {Tags.map(tag => {
          return (
            <TagListItem 
              key={tag.id}
              onClick={() => handleFilterPerTag(tag.tag)}
              className={tag.tag === selectedTag ? 'active' : ''}
            >
              {tag.titulo}
            </TagListItem>
          )
        })}
      </TagsList>

    </TagsWrapper>
  )
}

export default GalleryTags