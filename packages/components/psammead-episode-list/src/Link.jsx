import styled from '@emotion/styled';
import {
  C_METAL,
  C_POSTBOX,
  C_WHITE,
  C_STONE,
} from '@bbc/psammead-styles/colours';

const Link = styled.a`
  :before {
    position: absolute;
    inset: 0;
    content: '';
    white-space: nowrap;
    overflow: hidden;
    z-index: 1;
  }
  display: inline;
  line-height: 0;
  .rounded-play-button__outer-circle,
  .rounded-play-button__inner-circle,
  .rounded-play-button__triangle {
    transition: fill ease-in-out 0.2s;
  }
  &:hover,
  &:focus {
    .underlined_hover {
      text-decoration: underline;
    }
    .rounded-play-button__outer-circle,
    .rounded-play-button__inner-circle {
      fill: ${C_POSTBOX};
    }
    .rounded-play-button__triangle {
      fill: ${C_WHITE};
    }
  }
  &:visited {
    .fade_visited {
      color: ${({ darkMode }) => (darkMode ? C_STONE : C_METAL)};
    }
  }
`;

export default Link;
