import "./Tooltip.scss"
import React from "react"
import classNames from "classnames"
import { Icon } from "../Icon"

export class Tooltip extends React.PureComponent {
  static defaultProps = {
    style: {}
  }

  render() {
    const { title, icon, children } = this.props

    const cn = classNames("tooltip", {
      "tooltip--fixed": this.props.fixed,
      "tooltip--inline": this.props.inline
    })

    const innerStyle = {
      width: this.props.width
    }

    const style = {
      opacity: 1,
      ...this.props.style
    }

    return (
      <div className={cn} style={style}>
        {icon && <Icon className="tooltip__icon" name={icon} />}
        <div className="tooltip__inner" style={innerStyle}>
          <div className="tooltip__top">
            <div className="tooltip__body">
              {title && <div className="tooltip__title tight">{title}</div>}
              {children}
            </div>
          </div>

          <div className="tooltip__footer" />
        </div>
      </div>
    )
  }
}
