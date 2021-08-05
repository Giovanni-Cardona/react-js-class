import React from 'react';

class Main extends React.Component
{
    render()
    {
        return (
          <div>
            <h2>Stock Data for Today</h2>
            <ul>
              <li>Microsoft: {this.props.msValue}</li>
              <li>Twitter: {this.props.twValue}</li>
              <li>Amazon: {this.props.awsValue}</li>
              <button onClick={this.props.increase}>Increase Stock values</button>
              <button onClick={this.props.decrease}>Decrease Stock values</button>
              <button onClick={this.props.jumble}>Jumble Data</button>
            </ul>
            <ul>
              {
                /*  
                    this.props.values.map((items) =>
                        <li>{items.company}: {items.value}</li>
                    )
                    */
                this.props.values.map((items) => {
                  let thisClassName = "masomenos";
                  if (items.value > 500) thisClassName = "mucho";
                  else if (items.value < 200) thisClassName = "poco";
                  return (
                    <li className={thisClassName} >
                      {items.company}: {items.value}
                    </li>
                  );
                })
              }
              <button onClick={this.props.increase2}>Increase Stock values</button>
              <button onClick={this.props.decrease2}>Decrease Stock values</button>
              <button onClick={this.props.jumble2}>Jumble Data</button>
            </ul>
          </div>
        );
    }
}
export default Main
