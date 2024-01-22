import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  border-bottom: 2px solid transparent;
  &:hover {
    color: #4caf50;
  }
  &.active {
    border-bottom: 2px solid #4caf50;
  }
`;
