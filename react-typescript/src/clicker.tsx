import * as React from 'react'

interface ClickerProps {
    startClickAmount?: number
}

interface ClickerState {
    amountOfClicks: number
}

export default class Clicker extends React.Component<ClickerProps, ClickerState> {
    constructor(props: ClickerProps) {
        super(props)
        this.state = {
            amountOfClicks: props.startClickAmount!
        }
    }

    public increment() {
        this.setState({ amountOfClicks: this.state.amountOfClicks + 1 })
    }


    public decrement() {
        this.setState({ amountOfClicks: Math.max(this.state.amountOfClicks - 1, 0 ) })
    }

    public render() {
        return (
            <div>
                <h1>
                    Number of Clicks: {this.state.amountOfClicks}
                </h1>
                <button
                    onClick={this.increment}>+</button>
                <button
                    onClick={this.decrement}>-</button>
            </div>
        )
    }

}