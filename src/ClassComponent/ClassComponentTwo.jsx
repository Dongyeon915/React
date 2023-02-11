import React from "react";
import styles from "./ClassComponentTwo.module.css"

class ClassComponentTwo extends React.Component{

  state = {
    inputValue : null
  }

  render() {
    return (
        <div>
          <input type="text" className={styles.inputBox}/>
          <button className={styles.inputBtn}>{this.props.btnName}</button>
        </div>
    )
  }


  // shootValue = (e) => {
  //   this.setState((before) => {
  //     return {
  //       ...before,
  //       inputValue : this.
  //     }
  //   })
  // }
  //
}

export default ClassComponentTwo;