import Profile from './Profile';

const Basic_Info = () => {
    let history = useHistory();
    const panes = [
        { menuItem: 'Personal Information', render: () => <Tab.Pane><Profile/></Tab.Pane> },
        { menuItem: 'Tab 2', render: () => <Tab.Pane>Picture1</Tab.Pane> },
        { menuItem: 'Tab 3', render: () => <Tab.Pane>Picture2</Tab.Pane> },
      ]

    return (
        <div>
            <div>
                <button onClick={() => history.goBack()}>back</button>
            </div>
            <Tab panes={panes}/>
        </div>
    )
}

export default Basic_Info;