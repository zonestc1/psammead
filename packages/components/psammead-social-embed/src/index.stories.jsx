import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';
import notes from '../README.md';
import { CanonicalSocialEmbed, AmpSocialEmbed } from './index';

storiesOf('Components|SocialEmbed', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add(
    'Default',
    () => (
      <CanonicalSocialEmbed
        provider="instagram"
        oEmbed={{ html: '<h1>Content.</h1>' }}
        skipLink={{
          text: 'Skip %provider% content by %author%',
          endText: 'End of %provider% content by %author%',
        }}
        fallback={{
          text: "Sorry but we're having trouble displaying this content",
          linkText: 'View content on %provider%',
          linkHref: 'https://www.bbc.co.uk',
          warningText:
            'Warning: BBC is not responsible for third party content',
        }}
      />
    ),
    {
      notes,
    },
  )
  .add(
    'AMP',
    () => (
      <AmpSocialEmbed
        provider="instagram"
        id="01234"
        skipLink={{
          text: 'Skip %provider% content by %author%',
          endText: 'End of %provider% content by %author%',
        }}
        fallback={{
          text: "Sorry but we're having trouble displaying this content",
          linkText: 'View content on %provider%',
          linkHref: 'https://www.bbc.co.uk',
          warningText:
            'Warning: BBC is not responsible for third party content',
        }}
      />
    ),
    {
      notes,
    },
  )
  .add(
    'Unsupported Provider',
    () => (
      <CanonicalSocialEmbed
        provider="unsupported"
        oEmbed={{ html: '<h1>Content.</h1>' }}
        skipLink={{
          text: 'Skip %provider% content by %author%',
          endText: 'End of %provider% content by %author%',
        }}
        fallback={{
          text: "Sorry but we're having trouble displaying this content",
          linkText: 'View content on %provider%',
          linkHref: 'https://www.bbc.co.uk',
          warningText:
            'Warning: BBC is not responsible for third party content',
        }}
      />
    ),
    {
      notes,
    },
  )
  .add(
    'No oEmbed response',
    () => (
      <CanonicalSocialEmbed
        provider="twitter"
        skipLink={{
          text: 'Skip %provider% content by %author%',
          endText: 'End of %provider% content by %author%',
        }}
        fallback={{
          text: "Sorry but we're having trouble displaying this content",
          linkText: 'View content on %provider%',
          linkHref: 'https://www.bbc.co.uk',
          warningText:
            'Warning: BBC is not responsible for third party content',
        }}
      />
    ),
    {
      notes,
    },
  );
