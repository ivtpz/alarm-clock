import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const Cow = ({display}) => {
  if (display) {
    return (
      <ReactCSSTransitionGroup
        transitionName="wrapper"
        transitionEnter={false}
        transitionLeave={false}
        transitionAppear={true}
        transitionAppearTimeout={3000}>
        <div className="wrapper" >
          <ReactCSSTransitionGroup
            transitionName="cow"
            transitionEnter={false}
            transitionLeave={false}
            transitionAppear={true}
            transitionAppearTimeout={3000}>
            <div className="cow">
              <img src="/static/cow_1.png" key="cow_1.png"/>
            </div>
          </ReactCSSTransitionGroup>
        </div>
      </ReactCSSTransitionGroup>
    )
  } else {
    return (
      <div></div>
    )
  }
};

export default Cow;