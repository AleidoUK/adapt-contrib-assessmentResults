import React from 'react';
import { classes, compile, templates } from 'core/js/reactHelpers';

export default function AssessmentResults (props) {
  const {
    _globals,
    _retry,
    retryFeedback,
    _isRetryEnabled,
    _graphic
  } = props;

  return (
    <div
      className={classes([
        'component__inner',
        'assessmentresults__inner',
        _graphic?.src && 'has-image'
      ])}
    >

      <div className="assessmentresults__header-container">

        <templates.header {...props} />

        {_isRetryEnabled &&
        <div className="component__feedback assessmentresults__feedback">
          <div className="component__feedback-inner assessmentresults__feedback-inner">

            {retryFeedback &&
            <div className="assessmentresults__retry-feedback">
              <div className="assessmentresults__retry-feedback-inner" dangerouslySetInnerHTML={{ __html: compile(retryFeedback, props) }} />
            </div>
            }

            <button className="btn-text assessmentresults__retry-btn js-assessment-retry-btn">
              <span>
                {_retry.button || _globals._components._assessmentResults.retryText}
              </span>
            </button>

          </div>
        </div>
        }

      </div>

      <div className="component__widget assessmentresults__widget">

        <templates.image {..._graphic}
          classNamePrefixes={['component-item', 'assessmentresults-item']}
          attributionClassNamePrefixes={['component', 'assessmentresults']}
        />

      </div>

    </div>

  );
}
