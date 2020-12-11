// import styles from "../styles/Carousel.module.css";

export default class VerticalCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeID: 0,
      wrapperStyle: {
        backgroundImage: `url('${this.props.data[0].img}')`,
      },
      panelStyle: {
        background: this.props.data[0].colour,
      },
      buttonHover: false,
      buttonStyle: {
        color: "#ffffff",
      },
    };
    this.timer = this.props.timer ? this.props.timer : 15000;
    this.styles = this.props.styles;
  }
  _changeActive(id) {
    this.setState({
      activeID: id,
      wrapperStyle: {
        backgroundImage: `url('${this.props.data[id].img}')`,
      },
      panelStyle: {
        backgroundColor: this.props.data[id].colour,
      },
    });
  }
  _buttonColour() {
    if (!this.state.buttonHover) {
      this.setState({
        buttonHover: true,
        buttonStyle: {
          color: this.props.data[this.state.activeID].colour,
        },
      });
    } else {
      this.setState({
        buttonHover: false,
        buttonStyle: {
          color: "#ffffff",
        },
      });
    }
  }
  componentDidMount() {
    setInterval(() => {
      let carouselLength = this.props.data.length;
      let activeSlide = this.state.activeID;
      if (carouselLength - 1 === activeSlide) {
        this._changeActive(0);
      } else {
        this._changeActive(activeSlide + 1);
      }
    }, this.timer);
  }
  render() {
    return (
      <section className={this.styles.wrapper} style={this.state.wrapperStyle}>
        <Selectors
          data={this.props.data}
          activeID={this.state.activeID}
          _changeActive={this._changeActive.bind(this)}
          styles={this.props.styles}
        />
        <Panel
          data={this.props.data[this.state.activeID]}
          panelStyle={this.state.panelStyle}
          buttonStyle={this.state.buttonStyle}
          _buttonColour={this._buttonColour.bind(this)}
          styles={this.props.styles}
        />
      </section>
    );
  }
}
class Panel extends React.Component {
  render() {
    return (
      <aside className={this.props.styles.panel} style={this.props.panelStyle}>
        <h2 className={this.props.styles.panel_header}>
          {this.props.data.header}
        </h2>
        <p className={this.props.styles.panel_info}>{this.props.data.body}</p>
        <button
          className={this.props.styles.panel_button}
          style={this.props.buttonStyle}
          onMouseEnter={this.props._buttonColour}
          onMouseLeave={this.props._buttonColour}
        >
          Read More
        </button>
      </aside>
    );
  }
}
class Selectors extends React.Component {
  constructor(props) {
    super(props);
    this.styles = this.props.styles;
  }
  _handleClick(e) {
    if (this.props.id !== this.props.activeID) {
      this.props._changeActive(this.props.id);
    } else {
      return;
    }
  }
  render() {
    return (
      <div className={this.props.styles.selectors}>
        {this.props.data.map((item) => (
          <Selector
            key={item.id}
            id={item.id}
            _handleClick={this._handleClick}
            _changeActive={this.props._changeActive}
            activeID={this.props.activeID}
            styles={this.props.styles}
          />
        ))}
      </div>
    );
  }
}
class Selector extends React.Component {
  render() {
    let componentClass = this.props.styles.selector;
    if (this.props.activeID === this.props.id) {
      componentClass = this.props.styles.selector + this.props.styles.active;
    }
    return (
      <div
        className={componentClass}
        onClick={this.props._handleClick.bind(this)}
      ></div>
    );
  }
}
