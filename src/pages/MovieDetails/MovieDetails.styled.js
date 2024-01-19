import { List } from '@mui/material';
import styled from 'styled-components';

export const MovieInfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
`;

export const MovieDetailsContainer = styled.div`
  max-width: 600px;
`;

export const MovieGenresContainer = styled.div`
  display: flex;
  margin-top: 10px;
  align-items: center;
`;

export const ListContainer = styled(List)`
  display: flex;
  justify-content: center;
  gap: 5px;
`;

export const StyledMovieTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;
