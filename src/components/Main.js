import React from "react";

return (
    <main>
        <div className={circleClass}>
            <h1>{this.state.counter}</h1>
        </div>
        <div className="buttons">
            <button className="add-one" onClick={this.addOneHandler}>Add one </button>
            <button className="add-five" onClick={this.addFiveHandler}>Add five</button>
            <button className="remove-one" onClick={this.removeOneHandler}>Remove one</button>
            <button className="remove-five" onClick={this.removeFiveHandler}>Remove five</button>
            <button className="reset" onClick={this.resetHandler}>Reset</button>
        </div>
    </main >
);