import * as React from 'react'

interface ClickerProps {
    startClickAmount?: number
}

interface ClickerState {
    amountOfClicks: number
}

export default class Clicker extends React.Component<
ClickerProps, ClickerState> {
static defaultProps = {
    startClickAmount: 0 
}



    constructor(props: ClickerProps) {
        super(props)
        this.state = {
            amountOfClicks: props.startClickAmount!
        }
    }

    public increment() : void{
        this.setState({ amountOfClicks: this.state.amountOfClicks + 1 })
    }


    public decrement() : void  {
        this.setState({ amountOfClicks: Math.max(this.state.amountOfClicks - 1, 0 ) })
    }

    public render() {
        return (
            <div>
                <h1>
                    Number of Clicks: {this.state.amountOfClicks}
                </h1>
                <button
                    onClick={this.increment.bind(this)}>+</button>
                <button
                    onClick={this.decrement.bind(this)}>-</button>
            </div>
        )
    }

}