import * as React from 'react';


class Loader extends React.Component {

  public render() {

    return (

        <div className="loader-wrapper">

            <div className="loader-body">

                <i className="material-icons loader-spin-icon">

                    cached

                </i>

                <br/>

                <span>loading ...</span>

            </div>

        </div>

    );

  }

}

export default Loader;