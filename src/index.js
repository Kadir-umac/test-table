import * as React from 'react';
import * as Scrivito from 'scrivito';

const FaqWidget = Scrivito.provideWidgetClass('FaqWidget', {
  attributes: {
    question: 'string',
    answer: 'html',
  },
});

Scrivito.provideEditingConfig('FaqWidget', {
  title: 'Test-Table',
  description: 'A frequently asked question.',

  attributes: {
    question: {
      title: 'Question',
      description: 'State the frequently asked question',
    },
    answer: {
      title: 'Answer',
      description: 'Provide an eloquent answer',
    },
  },

  properties: ['question', 'answer'],
  initialContent: {
    question: "What is the question?",
    answer: "And this is the answer.",
  },
});

Scrivito.provideComponent('FaqWidget', ({ widget }) => {
  return (
    <div className='mt-2 mr-0 pt-0 pr-0 pb-3 pl-2 border-bottom'>
      <Scrivito.ContentTag tag='h3' content={ widget } attribute='question' />
      <Scrivito.ContentTag content={ widget } attribute='answer'/>
    </div>
  );
});

export default FaqWidget;