import React, { Component } from 'react'

class ComponenteTeste extends Component {
   
    constructor(props) {
        super(props);
        this.state = { teste: props.teste };

        this.onClick = this.onClick.bind(this);

        console.log('***', 'Mounting', '***');
        console.log('0', 'constructor');
      }
    
      onClick() {
        console.log('***', 'Updating', '***');

        this.setState((state) => ({ 
          teste: !state.teste 
        }));
      }

    static getDerivedStateFromProps() {
        console.log('1', 'getDerivedStateFromProps');

        return null;
    }

    render() {
        console.log('2', 'render');

      return (
            <div>
                <p>Componenete Teste !</p>
                <input type="button" value="Mudar estado do componente teste!" onClick={this.onClick} />
            </div>
        );
    }
  

  componentDidMount() {
    console.log('3', 'componentDidMount');
  }

  shouldComponentUpdate() {
    console.log('4', 'shouldComponentUpdate');

    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log('5', 'getSnapshotBeforeUpdate');

    return null;
  }

  componentDidUpdate() {
    console.log('6', 'componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('***', 'Unmounting', '***');

    console.log('7', 'componentWillUnmount');
  }
}

export default ComponenteTeste