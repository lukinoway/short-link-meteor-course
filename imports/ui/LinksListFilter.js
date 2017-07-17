import React from 'react';
import { Session } from 'meteor/session';

export default class LinksListFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showVisible: true
        };
    }

    componentDidMount() {
        console.log('component will mount LinksListFilter');
        this.filterTracker = Tracker.autorun(() => {
            const showVisible = Session.get('showVisible');
            this.setState({showVisible: showVisible});
        });
    }

    componentWillUnmount() {
        console.log('component will unmount LinksListFilter');
        this.filterTracker.stop();
    }

    render() {
        return (
            <div>
                <label className="checkbox">
                    <input
                        className="checkbox__box"
                        type="checkbox"
                        checked={!this.state.showVisible}
                        onChange={(e) => {
                        Session.set('showVisible', !e.target.checked);
                    }}/>
                    show hidden links
                </label>
            </div>
        );
    }
}
