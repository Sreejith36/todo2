import React, { Component } from 'react'

export default class Module extends Component {
    state = {
        input: " ",
        items: []
    };

    handleChange = (event) => {
        this.setState({
            input: event.target.value
        });

    };

    storeItems = (event) => {
        event.preventDefault();
        const { input } = this.state;

        this.setState({
            items: [...this.state.items, input],
            input: ""
        })
    };

    deleteItem = (key) => {
        const allItems = this.state.items;
        allItems.splice(key, 1);

        this.setState({
            items: allItems
        })
    };

  


    render() {
        const { input, items } = this.state
        return (
            <div>

                <div className='Top-section'>
                    <form onSubmit={this.storeItems}>

                        <h1>Todo App</h1>
                        <input type="text"
                            value={input}
                            onChange={this.handleChange} placeholder="Enter Items"></input>
                        <button><i class="fa-sharp fa-solid fa-plus"></i> </button>

                    </form>
                </div>

                <div className='bottom-section'>

                    {items.map((data, index) => {
                        return (
                            <p key={index}>
                            <div className='inputbox'>

                            <input type="checkbox" ></input> 
                            {data}
                            </div>

                            <div className='deletebox'>

                            <i onClick={() => this.deleteItem(index)} class="fa-regular fa-trash-can"></i>
                            </div>
                        </p>
                        )
                    })}

                </div>
            </div>

        )
    }
}
